export default interface FormElement{
    label?: string,
    elementType: string,
    elementConfig: {
        type: string,
        placeholder?: string,
        row?: number,
        style? : {},
        required? : true
    },
    value?: string,
    validation: {
        [key: string]: number | boolean
    },
    valid: boolean,
    errorMessage?: string,
    touched: boolean,
    position: string
}