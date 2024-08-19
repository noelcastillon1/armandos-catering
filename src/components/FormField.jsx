import { Field } from "houseform"
import { z } from "zod"

const FormField = ({ fieldName, labelContent, inputType, placeholder, changeValidateMessage, isRequired, min }) => {
    return (
        <Field
            name={fieldName}
            initialValue={""}
            onChangeValidate={isRequired ? z.string().min(1, `${changeValidateMessage}`) : null}
        >
            {({ value, setValue, onBlur, errors }) => {
                return (
                    <>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            {labelContent}
                            <input
                                type={inputType}
                                className="grow text-[#9ca3af]"
                                placeholder={placeholder}
                                value={value}
                                min={min}
                                onChange={(e) => setValue(e.target.value)}
                                onBlur={onBlur}
                            />
                        </label>
                        {errors.map((error) => (
                            <p className="text-error" key={error}>{error}</p>
                        ))}
                    </>
                )
            }}
        </Field>
    )
}

export default FormField