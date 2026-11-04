import { Field } from "houseform"
import { z } from "zod"

const FormField = ({ fieldName, inputType, placeholder, dataTestId, changeValidateMessage, isRequired, min }) => {
    const validator = isRequired ? z.string().min(1, `${changeValidateMessage}`) : null
    return (
        <Field
            name={fieldName}
            initialValue={""}
            // Also validate on change so an error clears (and the submit button
            // re-enables) as soon as the field is filled, not only on blur.
            onChangeValidate={validator}
            onBlurValidate={validator}
        >
            {({ value, setValue, onBlur, errors }) => {
                return (
                    <>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">{isRequired ? "*" + placeholder : placeholder}</span>
                            </div>
                            <input
                                type={inputType}
                                className="input input-bordered w-full grow"
                                value={value}
                                data-testid={dataTestId}
                                min={min}
                                onChange={(e) => setValue(e.target.value)}
                                onBlur={onBlur}
                            />
                        </label>
                        {errors.map((error) => (
                            <p className="text-error" data-testid="input-error" key={error}>{error}</p>
                        ))}
                    </>
                )
            }}
        </Field>
    )
}

export default FormField