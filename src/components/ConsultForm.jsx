import { Field, Form } from "houseform"
import { z } from "zod"

const ConsultForm = () => (
    <Form onSubmit={() => { }}>
        {({ submit }) => (
            <div>
                <Field name="fullName" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
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
                    )}
                </Field>
                <Field name="phoneNum" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <label className="input input-bordered flex items-center gap-2">
                        Phone Number
                        <input
                            type="text"
                            className="grow"
                            placeholder="(555) 555-5555"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    </label>
                    )}
                </Field>
                <Field name="email" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input
                            type="text"
                            className="grow"
                            placeholder="janedoe@email.com"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    </label>
                    )}
                </Field>
                <Field name="eventDate" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
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
                    )}
                </Field>
                <Field name="eventTime" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
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
                    )}
                </Field>
                <Field name="eventType" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
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
                    )}
                </Field>
                <Field name="numOfAttendees" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
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
                    )}
                </Field>
                <Field name="questions" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
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
                    )}
                </Field>
                <button className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
        )}
    </Form>
)

export default ConsultForm