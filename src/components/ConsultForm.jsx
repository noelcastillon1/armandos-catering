import { Field, Form } from "houseform"
import { z } from "zod"

const url = "https://script.google.com/macros/s/AKfycbxI9UC_2019X-UGxMOXIDkIkS8rOSDp6WipD3jQxgbteMUIsHrPWDB6C72isgGYd-ht/exec"

// fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'text/plain;charset=utf-8',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log('data', data))
//     .catch((err) => console.log('err', err));

const ConsultForm = () => {
    return (
        <Form
            onSubmit={(values) => {
                fetch(url, {
                    mode: "no-cors",
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
                    <Field
                        name="fullName"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter your name here")}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Full Name
                                        <input
                                            type="text"
                                            className="grow"
                                            placeholder="Jane Doe"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="phoneNum"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter your phone number here")}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Phone Number
                                        <input
                                            type="tel"
                                            className="grow"
                                            placeholder="(555) 555-5555"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="email"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter your email here")}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Email
                                        <input
                                            type="email"
                                            className="grow"
                                            placeholder="janedoe@email.com"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="eventDate"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter the date of your event here")}

                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Event Date
                                        <input
                                            type="text"
                                            className="grow"
                                            placeholder="November 8, 2022"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="eventTime"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter the time you plan to hold your event")}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Time of Event
                                        <input
                                            type="text"
                                            className="grow"
                                            placeholder="Evening, 6:00 PM"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="eventType"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter the type of event here")}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Type of Event
                                        <input
                                            type="text"
                                            className="grow"
                                            placeholder="Wedding, baptism, work event, etc..."
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="numOfAttendees"
                        initialValue={""}
                        onChangeValidate={z.string().min(1, "Please enter the approximate number of attendees")}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Approximate Number of Attendees
                                        <input
                                            type="text"
                                            className="grow"
                                            placeholder="300"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <Field
                        name="questions"
                        initialValue={""}
                    >
                        {({ value, setValue, onBlur, errors }) => {
                            return (
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        Do you have any additional questions?
                                        <input
                                            type="text"
                                            className="grow"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            onBlur={onBlur}
                                        />
                                    </label>
                                    {errors.map((error) => (
                                        <p className="text-error" key={error}>{error}</p>
                                    ))}
                                </div>
                            )
                        }}
                    </Field>
                    <button className="btn btn-primary" disabled={!isValid} type="submit">
                        Submit
                    </button>
                </form>
            )}
        </Form>
    )
}

export default ConsultForm