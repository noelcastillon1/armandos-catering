import { Form } from "houseform";
import FormField from "./FormField";
import { addSubmission } from "../util/addSubmission";

import { UserSvg } from "./constants/svgs";
import { PhoneSvg } from "./constants/svgs";
import { EmailSvg } from "./constants/svgs";
import { CalendarSvg } from "./constants/svgs";
import { ClockSvg } from "./constants/svgs";
import { StarSvg } from "./constants/svgs";
import { NumberSvg } from "./constants/svgs";
import { QuestionSvg } from "./constants/svgs";

const ConsultForm = () => {
  return (
    <Form
      onSubmit={(values) => {
        alert(
          "Thanks for filling out our form! We'll reach back out ASAP to coordinate an appointment time!",
        );
        addSubmission(values)
      }}
    >
      {({ isValid, submit, isSubmitted, reset }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isSubmitted) {
              alert("You already submitted the form. If you have any additional questions, please email us at chefarmandocatering@gmail.com")
            } else {
              submit().then(() => {
                reset();
              })
            }
          }}
        >
          <div className="form-field-container flex flex-col gap-5 md:mx-6">
            <FormField
              fieldName={"name"}
              labelContent={<UserSvg />}
              inputType={"text"}
              placeholder={"Full Name*"}
              changeValidateMessage={"Please enter your full name"}
              isRequired={true}
            />
            <FormField
              fieldName={"phoneNum"}
              labelContent={<PhoneSvg />}
              inputType={"tel"}
              placeholder={"Phone Number*"}
              changeValidateMessage={"Please enter your phone number"}
              isRequired={true}
            />
            <FormField
              fieldName={"email"}
              labelContent={<EmailSvg />}
              inputType={"email"}
              placeholder={"Email*"}
              changeValidateMessage={"Please enter your email"}
              isRequired={true}
            />
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-5">
                <FormField
                  fieldName={"date"}
                  labelContent={<CalendarSvg />}
                  inputType={"date"}
                  min={new Date().toISOString().split('T')[0]}
                  placeholder={"Event Date*"}
                  changeValidateMessage={
                    "Please enter a valid date for your event"
                  }
                  isRequired={true}
                />
              </div>
              <div className="flex w-full flex-col gap-5">
                <FormField
                  fieldName={"time"}
                  labelContent={<ClockSvg />}
                  inputType={"time"}
                  placeholder={"Event Time"}
                  isRequired={false}
                />
              </div>
            </div>
            <FormField
              fieldName={"type"}
              labelContent={<StarSvg />}
              inputType={"text"}
              placeholder={"Type of Event*"}
              changeValidateMessage={"Please enter the type of event"}
              isRequired={true}
            />
            <FormField
              fieldName={"guestsNum"}
              labelContent={<NumberSvg />}
              inputType={"number"}
              placeholder={"Number of Guests*"}
              changeValidateMessage={
                "Please enter the planned number of guests"
              }
              isRequired={true}
            />
            <FormField
              fieldName={"comment"}
              labelContent={<QuestionSvg />}
              inputType={"text"}
              placeholder={"Questions?"}
              isRequired={false}
            />
            <div>
              <button
                className="btn btn-primary"
                disabled={!isValid}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Form>
  );
};

export default ConsultForm;
