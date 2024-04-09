import { Form } from "houseform"
import FormField from "./FormField"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

import { UserSvg } from "./constants/svgs"
import { PhoneSvg } from "./constants/svgs"
import { EmailSvg } from "./constants/svgs"
import { CalendarSvg } from "./constants/svgs"
import { ClockSvg } from "./constants/svgs"
import { StarSvg } from "./constants/svgs"
import { NumberSvg } from "./constants/svgs"
import { QuestionSvg } from "./constants/svgs"

const addSubmission = async (e) => {
    let formValues = JSON.stringify(e)
    try {
        const docRef = await addDoc(collection(db, "mail"), {
            to: ["chefarmandocatering@gmail.com"],
            message: {
                subject: "New Interest Submission!",
                text: formValues
            },
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};


const ConsultForm = () => {
    return (
        <Form
            onSubmit={(values) => {
                alert("Form was submitted with: " + JSON.stringify(values));
                addSubmission(values)
            }}
        >
            {({ isValid, submit }) => (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit()
                    }}
                >
                    <div className="form-field-container flex flex-col gap-5 md:mx-6">
                        <FormField fieldName={"name"} labelContent={<UserSvg />} inputType={"text"} placeholder={"Full Name*"} changeValidateMessage={"Please enter your full name"} isRequired={true} />
                        <FormField fieldName={"phoneNum"} labelContent={<PhoneSvg />} inputType={"tel"} placeholder={"Phone Number*"} changeValidateMessage={"Please enter your phone number"} isRequired={true} />
                        <FormField fieldName={"email"} labelContent={<EmailSvg />} inputType={"email"} placeholder={"Email*"} changeValidateMessage={"Please enter your email"} isRequired={true} />
                        <div className="flex flex-col gap-5 md:flex-row">
                            <div className="flex flex-col gap-5 w-full">
                                <FormField fieldName={"date"} labelContent={<CalendarSvg />} inputType={"text"} placeholder={"Event Date*"} changeValidateMessage={"Please enter the date of your event"} isRequired={true} />
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                                <FormField fieldName={"time"} labelContent={<ClockSvg />} inputType={"text"} placeholder={"Event Time"} changeValidateMessage={"Please enter the planned event time"} isRequired={false} />
                            </div>
                        </div>
                        <FormField fieldName={"type"} labelContent={<StarSvg />} inputType={"text"} placeholder={"Type of Event*"} changeValidateMessage={"Please enter the type of event"} isRequired={true} />
                        <FormField fieldName={"guestsNum"} labelContent={<NumberSvg />} inputType={"text"} placeholder={"Number of Guests*"} changeValidateMessage={"Please enter the planned number of guests"} isRequired={true} />
                        <FormField fieldName={"comment"} labelContent={<QuestionSvg />} inputType={"text"} placeholder={"Questions?"} changeValidateMessage={"Please enter your full name"} isRequired={false} />
                        <div>
                            <button className="btn btn-primary" disabled={!isValid} type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default ConsultForm