import axios from "axios";
import React, {useState} from "react";
import FormElement from "../interfaces/FormElementsInterface";


function useContactForm(ContactFormElements : Map<string, FormElement>) {
    const [form, setForm] = useState(new Map(ContactFormElements));
    const [status, setStatus] = useState({
        success: false,
        loading: false,
        error: false,
    });

    const inputChangedHandler = (
        event: React.ChangeEvent<any>, key: any
    ) => {
        const inputValue = event.target.value;
        const oldForm = form.get(key);

        const { isValid, message } = checkValidity(inputValue, oldForm?.validation);
        // @ts-ignore
        const newForm = {
            ...oldForm,
            value: inputValue,
            valid: isValid,
            errorMessage: message,
            touched: true,
        } as FormElement

        setForm(new Map(form.set(key, newForm)));
    }

    const checkValidity = (value : string, rules:
        {[key: string]: number | boolean} | null | undefined
    ) : { isValid: boolean, message: string } => {
        let input = {
            isValid: true,
            message: "Valid Input"
        };

        if (! rules) {
            return input;
        }

        let message : string = '';

        if (rules.required) {
            input.isValid = value.trim() !== '';
            message = 'Input is required';
        }

        if (rules.minLength && input.isValid) {
            input.isValid = value.length >= rules.minLength;
            message = `Input should have a min length of ${rules.minLength} characters`;
        }

        if (rules.maxLength && input.isValid) {
            input.isValid = value.length <= rules.maxLength;
            message = `Input should have a maximum length of ${rules.maxLength} characters`;
        }

        if (rules.email && input.isValid)
        {
            input.isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            message = "Input should be a valid email address";
        }

        if (! input.isValid) {
            input.message = message;
        }

        return input;
    }


    const isValidInput = () : boolean =>  {
        // @ts-ignore
        for (let element of form.values()) {
            if (! element.valid)
            {
                return false;
            }
        }

        return true;
    }

    const post = async (url: string, inputs: any | null) : Promise<void> =>  {
        setStatus({
            ...status,
            loading: true,
        });

        await axios.post(url, {
            ...getInputs(),
            ...inputs
        })

        setForm(new Map(ContactFormElements));

        setStatus({
            ...status,
            success: true,
            loading: false,
        });
    }

    const getInputs = () : {
        [key: string]: number | string
    } =>  {
        let temp: any = {};
        form.forEach((element, key) => {
            temp[key] = element.value;
        });

        return temp;
    }

    return { form, inputChangedHandler, isValidInput, getInputs, post, status};
}

export default useContactForm;
