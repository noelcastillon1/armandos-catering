import { Field } from "houseform"
import { z } from "zod"

const FormField = ({ fieldName, labelContent, placeholder, changeValidateMessage, isRequired }) => {
    return (
        <Field
            name={fieldName}
            initialValue={""}
            onChangeValidate={isRequired ? z.string().min(1, {changeValidateMessage}) : null}
        >
            {({ value, setValue, onBlur, errors }) => {
                return (
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            {labelContent}
                            <input
                                type="tel"
                                className="grow"
                                placeholder={placeholder}
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
    )
}

export default FormField