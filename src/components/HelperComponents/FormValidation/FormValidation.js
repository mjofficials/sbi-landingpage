// const isText = RegExp(/^[A-Z ]+$/i);
// const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
// const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/); // us
// const isNumber = RegExp(/^\d+$/);
// const isPhone = RegExp(/^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/);
const isPhone = RegExp(/^([a-zA-Z0-9+]+)$/);
const isOtp = RegExp(/^\d{4}$/gm);

export default function formValidation(name, value, schema) {
    const { validate, minLength, maxLength } = schema[name];
    let error = "";

    if (minLength && value.length < minLength)
        error = `Minimum ${minLength} characters is required.`;
    else if (maxLength && value.length > maxLength)
        error = `Maximum length of ${maxLength} exceeded!`;
    if (!validate) return;

    switch (validate) {

        case "mobileInput":
            if (!isPhone.test(value))
                error = "Please enter a valid mobile no./username";
            break;

        case "otpInput":
            if (!isOtp.test(value))
                error = "Please enter 4 digit valid OTP";
            break;

        // case "text":
        //     if (!isText.test(value)) error = "This field accept text only.";
        //     break;

        // case "number":
        //     if (!isNumber.test(value)) error = "This field accept numbers only.";
        //     break;

        // case "email":
        //     if (!isEmail.test(value)) error = "Please enter a valid email";
        //     break;

        // case "zip":
        //     if (!isZip.test(value)) error = "Please enter a valid zip code";
        //     break;

        // case "checkbox":
        //     if (!value) error = "Please select a value";
        //     break;

        default:
            break;
    }

    return error;
}
