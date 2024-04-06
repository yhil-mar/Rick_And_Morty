import formValidation from "../validations/formValidation.mjs";
import formRegisterValidation from "../validations/formRegisterValidation.mjs";

const changeHandler = (event, userData, setUserData, setErrors, setVisButton, typeForm) => {

    const property = event.target.name;
    
    const value = event.target.value;
    
    setUserData({ ...userData, [property]: value });

    if (typeForm === 'register') {

        setErrors(
            formRegisterValidation({ ...userData, [property]: value }, 'errors')
        );
        setVisButton(
            formRegisterValidation({ ...userData, [property]: value })
        );

    } else if (typeForm === 'login') {

        setErrors(
            formValidation({ ...userData, [property]: value }, 'errors')
        );
        setVisButton(
            formValidation({ ...userData, [property]: value })
        );
    };

};

export default changeHandler;