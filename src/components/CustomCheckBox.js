import React from 'react'
import { useField } from 'formik'

const CustomCheckBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="checkBox">
                <input {...field} {...props}
                    className={meta.touched && meta.error ? "input-error" : ""}
                />
                <span>I accept the term and services</span>
            </div>

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}


        </>
    )
}

export default CustomCheckBox