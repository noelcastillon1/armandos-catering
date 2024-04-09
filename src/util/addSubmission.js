import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addSubmission = async (e) => {  
  try {
      const docRef = await addDoc(collection(db, "mail"), {
          to: ["chefarmandocatering@gmail.com"],
          message: {
              subject: "New Interest Submission!",
              html: `<h1>New Catering Interest Form Submission!</h1><table><tr><th>Name</th><td>${e.name}</td></tr><tr><th>Phone Number</th><td>${e.phoneNum}</td></tr><tr><th>Email</th><td>${e.email}</td></tr><tr><th>Event Date</th><td>${e.date}</td></tr><tr><th>Event Time</th><td>${!e.time ? "No time given" : e.time}</td></tr><tr><th>Event Type</th><td>${e.type}</td></tr><tr><th>Number of Guests</th><td>${e.guestsNum}</td></tr><tr><th>Comments</th><td>${!e.comments ? "No comment" : e.comments}</td></tr></table>`
          },
      });
      console.log("Document written with ID: ", docRef.id);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
};