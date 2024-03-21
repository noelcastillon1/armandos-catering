import { Field, Form } from "houseform"
import { z } from "zod"

const ConsultForm = () => (
    <Form onSubmit={() => { }}>
        {({ submit }) => (
            <div>
                <Field name="fullName" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="phoneNum" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="email" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="eventDate" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="eventTime" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="eventType" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="numOfAttendees" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <Field name="questions" initialValue={""}>
                    {({ value, setValue, onBlur }) => (
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={onBlur}
                        />
                    )}
                </Field>
                <button onClick={submit}>Submit</button>
            </div>
        )}
    </Form>
)

export default ConsultForm