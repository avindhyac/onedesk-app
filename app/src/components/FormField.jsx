import "./FormField.css";

export function Input({
  label,
  type = "text",
  placeholder,
  required,
  icon,
  id,
  ...rest
}) {
  const uid = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="od-field">
      {label && (
        <label className="od-field__label" htmlFor={uid}>
          {label}
          {required && <span className="od-field__req">*</span>}
        </label>
      )}
      <div className="od-field__wrap">
        {icon && <iconify-icon icon={icon} className="od-field__icon" />}
        <input
          id={uid}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`od-field__input ${icon ? "od-field__input--icon" : ""}`}
          {...rest}
        />
      </div>
    </div>
  );
}

export function Textarea({ label, rows = 4, placeholder, id, ...rest }) {
  const uid = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="od-field">
      {label && (
        <label className="od-field__label" htmlFor={uid}>
          {label}
        </label>
      )}
      <textarea
        id={uid}
        rows={rows}
        placeholder={placeholder}
        className="od-field__textarea"
        {...rest}
      />
    </div>
  );
}

export function Select({ label, options = [], id, ...rest }) {
  const uid = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="od-field">
      {label && (
        <label className="od-field__label" htmlFor={uid}>
          {label}
        </label>
      )}
      <select id={uid} className="od-field__select" {...rest}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Checkbox({ label, ...rest }) {
  return (
    <label className="od-checkbox">
      <input type="checkbox" className="od-checkbox__input" {...rest} />
      <span className="od-checkbox__box">
        <iconify-icon icon="lucide:check" className="od-checkbox__check" />
      </span>
      <span className="od-checkbox__label">{label}</span>
    </label>
  );
}
