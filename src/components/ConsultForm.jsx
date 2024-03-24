import { Field, Form } from "houseform"
import { z } from "zod"
import FormField from "./FormField"

import { UserSvg } from "./constants/svgs"
import { PhoneSvg } from "./constants/svgs"
import { EmailSvg } from "./constants/svgs"
import { CalendarSvg } from "./constants/svgs"
import { ClockSvg } from "./constants/svgs"
import { StarSvg } from "./constants/svgs"
import { NumberSvg } from "./constants/svgs"

const url = "https://script.google.com/macros/s/AKfycbxI9UC_2019X-UGxMOXIDkIkS8rOSDp6WipD3jQxgbteMUIsHrPWDB6C72isgGYd-ht/exec"

const ConsultForm = () => {
    return (
        <Form
            onSubmit={(values) => {
                fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'text/plain;charset=utf-8',
                    },
                    body: JSON.stringify(values),
                  })
                    .then((res) => res.json())
                    .then((values) => console.log('values', values))
                    .catch((err) => console.log('err', err));
                alert("Form was submitted with: " + JSON.stringify(values));
            }}
        >
            {({ isValid, submit }) => (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit()
                    }}
                >
                    <FormField fieldName={"name"} labelContent={<UserSvg />} placeholder={"Full Name"} changeValidateMessage={"Please enter your full name"} isRequired={true} />
                    <FormField fieldName={"phoneNum"} labelContent={<PhoneSvg />} placeholder={"Phone Number"} changeValidateMessage={"Please enter your phone number"} isRequired={true} />
                    <FormField fieldName={"email"} labelContent={<EmailSvg />} placeholder={"Email"} changeValidateMessage={"Please enter your email"} isRequired={true} />
                    <FormField fieldName={"date"} labelContent={<CalendarSvg />} placeholder={"Event Date"} changeValidateMessage={"Please enter the date of your event"} isRequired={true} />
                    <FormField fieldName={"time"} labelContent={<ClockSvg />} placeholder={"Event Time"} changeValidateMessage={"Please enter the planned event time"} isRequired={true} />
                    <FormField fieldName={"type"} labelContent={<StarSvg />} placeholder={"Type of Event"} changeValidateMessage={"Please enter the type of event"} isRequired={true} />
                    <FormField fieldName={"guestsNum"} labelContent={<NumberSvg />} placeholder={"Approximate Number of Attendees"} changeValidateMessage={"Please enter the planned number of guests"} isRequired={true} />
                    <FormField fieldName={"comment"} labelContent={""} placeholder={"Full Name"} changeValidateMessage={"Please enter your full name"} isRequired={false} />
                    <button className="btn btn-primary" disabled={!isValid} type="submit">
                        Submit
                    </button>
                </form>
            )}
        </Form>
    )
}

export default ConsultForm