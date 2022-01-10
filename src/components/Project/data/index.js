import { isRequired, validateEmail } from "../components/FormComponent/helpers/validators";

export const formData = [{
    name: "name",
    label: "Name",
    type: "text",
    id: "name_id",
}, {
    name: "email",
    label: "Email",
    type: "text",
    id: "email_id"
},
{
    name: "phone",
    label: "Phone",
    type: "number",
    id: "phone_id"
}, {
    name: "password",
    label: "Password",
    type: "password",
    id: "password_id"
},
{
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    id: "confirm_password_id"
}];


export const initialFormCurrentData = {
    name: {
        touched: false,
        error: null,
        value: ""
    },
    email: {
        touched: false,
        error: null,
        value: ""
    },
    phone: {
        touched: false,
        error: null,
        value: ""
    },
    password: {
        touched: false,
        error: null,
        value: ""
    },
    confirmPassword: {
        touched: false,
        error: null,
        value: ""
    },
};


export const formValidators = {
    name: [isRequired],
    email: [isRequired, validateEmail],
    phone: [isRequired],
    password: [isRequired],
    confirmPassword: [isRequired],
}