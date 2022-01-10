import "./styles.css";

const FormGroup = ({ id, name, label, type, onChange, input }) => {
    const { value, error } = input;
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={label} id={id} name={name} onChange={onChange} value={value} />
            {error && error.length ?
                <span>
                    {error[0]}
                </span> : ""
            }

        </div>
    )
}

export default FormGroup;