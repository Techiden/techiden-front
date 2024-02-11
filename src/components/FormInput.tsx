import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  isMessage?: boolean;
}

const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  isMessage,
}: FormInputProps) => {
  return (
    <div className="flex flex-col w-full">
      {isMessage ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={(e) =>
            onChange(e as React.ChangeEvent<HTMLTextAreaElement>)
          }
          placeholder={label}
          required={required}
          className="p-4 rounded-xl border-2 border-primary w-full focus:outline-none focus:border-secondary placeholder:text-primary"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
          placeholder={label}
          required={required}
          className="p-4 rounded-xl border-2 border-primary w-full focus:outline-none focus:border-secondary placeholder:text-primary"
        />
      )}
    </div>
  );
};

export default FormInput;
