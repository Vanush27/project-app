import {useState} from "react";
import {formData, formValidators, initialFormCurrentData} from "../../../../data";
import FormGroup from "../FormGroup";
import "./styles.css";
import {Alert, Button} from "react-bootstrap";

const Notification = ({setIsShow}) => {
    return (
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <Button onClick={() => (setIsShow(false))}>X</Button>
        </Alert>
    );
}


const Form = () => {
    const [isShow, setIsShow] = useState(false);

    const [formCurrentData, setFormCurrentData] = useState(initialFormCurrentData);

    const [localForm, setLocalForm] = useState([]);

    const getErrorsAfterValidation = (value, validators) => {
        const errors = [];
        validators.forEach(validator => {
            const error = validator(value);
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    }

    const onSubmit = () => {
        const obj = {
            name: formCurrentData.name.value,
            email: formCurrentData.email.value,
            phone: formCurrentData.phone.value,
            password: formCurrentData.password.value,
            confirmPassword: formCurrentData.confirmPassword.value,
        }
        // debugger
        const formData = localStorage.getItem("dataForm");
        if (formData && JSON.parse(formData) && JSON.parse(formData).length) {

            const arrData = [...JSON.parse(formData), obj];

            return localStorage.setItem('dataForm', JSON.stringify(arrData));
        }
        localStorage.setItem('dataForm', JSON.stringify(obj));


        setFormCurrentData(initialFormCurrentData);
        setIsShow(true);
    }

    const getValidationValues = (name, value) => {
        const validationValues = {value};
        if (name === "confirmPassword")
            validationValues["password"] = formCurrentData.password.value;

        return validationValues;
    }


    const handleInputChange = (e) => {

        const {name, value} = e.target;
        const validators = formValidators[name];
        const validationValues = getValidationValues(name, value);

        const error = getErrorsAfterValidation(validationValues, validators);

        console.log("🚀 ~ error", error)
        setFormCurrentData(prev => {
            return {
                ...prev,
                [name]: {
                    touched: true,
                    error,
                    value
                }
            }


        });
        setLocalForm([...localForm, {[name]: value}]);
    }


    return (
        <div className="form">
            {isShow && <Notification
                setIsShow={setIsShow}
            />}
            {formData.map(data => {
                return (
                    <FormGroup
                        {...data}
                        key={data.id}
                        onChange={handleInputChange}
                        input={formCurrentData[data.name]}
                    />
                )
            })}
            <Button as="input" type="submit" onClick={onSubmit} value="Submit" className="subBtn"/>
        </div>
    )
}

export default Form;