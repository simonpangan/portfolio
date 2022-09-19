import FormElement from "../../interfaces/FormElementsInterface";

const elements = new Map<string, FormElement>([
    ["name", {
        label: "Name",
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your Name",
            required: true
        },
        value: "",
        validation: {
            required: true,
            minLength: 2,
            maxLength: 50
        },
        valid: false,
        touched: false,
        position: "left"
    }],
    ["email", {
        label: "Email",
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Your Email",
            required: true
        },
        value: "",
        validation: {
            required: true,
            maxLength: 50,
            email: true,
        },
        valid: false,
        touched: false,
        position: "left"
    }],
    ["message", {
        label: "Message",
        elementType: "textarea",
        elementConfig: {
            type: "text",
            placeholder: "Your Message",
            required: true,
            row: 5,
            style: {
                height: "128px"
            }
        },
        value: "",
        validation: {
            required: true,
            maxLength: 200,
        },
        valid: false,
        touched: false,
        position: "right"
    }],
]);

export default elements;