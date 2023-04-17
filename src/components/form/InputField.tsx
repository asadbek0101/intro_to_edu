import { useField } from "formik";
import React, { useCallback, useMemo, useState } from "react";
import "./assets/input.scss";


interface InputFieldProps{
    readonly name: string;
    readonly id?: string;
    readonly value?: any;
    readonly label?: any;
    readonly type?: string;
    readonly required?: boolean;
    readonly onChange?: (event: any) => void;
    readonly className?: string;
    readonly inputClassName?: string;
    readonly disabled?: boolean;
    readonly placeholder?: string;
}

export default function InputField({name, id, onChange, label, value, type = "text", required, className, disabled=false, inputClassName, placeholder, ...inputProps}:InputFieldProps){
    const [field, meta] = useField(name);
    const [req, setReq] = useState<boolean>(false)
    const showError = useMemo(()=>Boolean(meta.touched && meta.error), [meta])

    return (
        <div className={`input-container w-100 ${className}`}>
            {label &&(
                <label className="w-100" htmlFor={id}>{label}</label>
            )}
            <input {...inputProps} {...field} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder} className={`w-100 ${(showError)? 'show-error':''} ${inputClassName}`} type={type} id={id} name={name} required={required}/>
            {(showError) && (
                <span className="text-danger req-title">{meta.error}</span>
            )}
        </div>
    )
}