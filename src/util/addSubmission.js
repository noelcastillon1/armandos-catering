import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Firestore retries writes indefinitely while offline instead of rejecting,
// so give up after a while and let the user know.
const SAVE_TIMEOUT_MS = 15000;

const withTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timed out saving submission")), ms),
    ),
  ]);

// Throws if the submission can't be saved, so the caller can tell the user.
export const addSubmission = async (e) => {
  const v = Object.fromEntries(
    Object.entries(e).map(([key, value]) => [key, escapeHtml(value)]),
  );
  const docRef = await withTimeout(addDoc(collection(db, "mail"), {
    to: ["chefarmandocatering@gmail.com"],
    message: {
      subject: "New Interest Submission!",
      html: `<h1>New Catering Interest Form Submission!</h1><table><tr><th>Name</th><td>${v.name}</td></tr><tr><th>Phone Number</th><td>${v.phoneNum}</td></tr><tr><th>Email</th><td>${v.email}</td></tr><tr><th>Event Date</th><td>${v.date}</td></tr><tr><th>Event Time</th><td>${!v.time ? "No time given" : v.time}</td></tr><tr><th>Event Type</th><td>${v.type}</td></tr><tr><th>Number of Guests</th><td>${v.guestsNum}</td></tr><tr><th>Comments</th><td>${!v.comment ? "No comment" : v.comment}</td></tr></table>`,
    },
  }), SAVE_TIMEOUT_MS);
  console.log("Document written with ID: ", docRef.id);
};
