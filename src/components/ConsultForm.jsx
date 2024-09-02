import { Form } from "houseform";
import FormField from "./FormField";
import { addSubmission } from "../util/addSubmission";

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
      {({ isValid, submit, reset }) => (
        <form
          data-testid="catering-interest-form"
          onSubmit={(e) => {
            e.preventDefault();
            submit().then(() => {
              reset();
            })
          }}
        >
          <div className="form-field-container flex flex-col gap-5 md:mx-6">
            <FormField
              fieldName={"name"}
              inputType={"text"}
              placeholder={"Full Name"}
              changeValidateMessage={"Please enter your full name"}
              isRequired={true}
              dataTestId={"name-input"}
            />
            <FormField
              fieldName={"phoneNum"}
              inputType={"tel"}
              placeholder={"Phone Number"}
              changeValidateMessage={"Please enter your phone number"}
              isRequired={true}
              data-testid={"phone-input"}
            />
            <FormField
              fieldName={"email"}
              inputType={"email"}
              placeholder={"Email"}
              changeValidateMessage={"Please enter a valid email address"}
              isRequired={true}
              data-testid={"email-input"}
            />
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex w-full flex-col gap-5">
                <FormField
                  fieldName={"date"}
                  inputType={"date"}
                  min={new Date().toISOString().split('T')[0]}
                  placeholder={"Event Date"}
                  changeValidateMessage={
                    "Please enter a valid date for your event"
                  }
                  isRequired={true}
                  data-testid={"date-input"}
                />
              </div>
              <div className="flex w-full flex-col gap-5">
                <FormField
                  fieldName={"time"}
                  inputType={"time"}
                  placeholder={"Event Time"}
                  isRequired={false}
                  data-testid={"time-input"}
                />
              </div>
            </div>
            <FormField
              fieldName={"type"}
              inputType={"text"}
              placeholder={"Type of Event"}
              changeValidateMessage={"Please enter the type of event"}
              isRequired={true}
              data-testid={"event-type-input"}
            />
            <FormField
              fieldName={"guestsNum"}
              inputType={"tel"}
              placeholder={"Number of Guests"}
              changeValidateMessage={
                "Please enter the planned number of guests"
              }
              isRequired={true}
              data-testid={"guest-num-input"}
            />
            <FormField
              fieldName={"comment"}
              inputType={"text"}
              placeholder={"Questions?"}
              isRequired={false}
              data-testid={"comment-input"}
            />
            <div>
              <button
                className="btn btn-primary"
                disabled={!isValid}
                type="submit"
                data-testid="submit-button"
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
