const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

const formRegisterValidation = (userData, state) => {

    const errors = {};
    let visButton = true;

    if (!userData.email) {
        errors.email = '*Requiered field';
        visButton = false;
    } else if (userData.email.length > 35) {
        errors.email = '*35 characters maximum';
        visButton = false;
    } else if (!regexEmail.test(userData.email)) {
        errors.email = '*Invalid Email';
        visButton = false;
    };

    if (!userData.firstName) {
        errors.firstName = '*Requiered field';
        visButton = false;
    } else if (userData.firstName.length > 20) {
        errors.firstName = '*20 characters maximum';
        visButton = false;
    } else if (userData.firstName.length < 3) {
        errors.firstName = '*At least 3 characters';
        visButton = false;
    };

    if (!userData.lastName) {
        errors.lastName = '*Requiered field';
        visButton = false;
    } else if (userData.lastName.length > 20) {
        errors.lastName = '*20 characters maximum';
        visButton = false;
    } else if (userData.lastName.length < 3) {
        errors.lastName = '*At least 3 characters';
        visButton = false;
    };

    if (!userData.username) {
        errors.username = '*Requiered field';
        visButton = false;
    } else if (userData.username.length > 15) {
        errors.username = '*15 characters maximum';
        visButton = false;
    } else if (userData.username.length < 3) {
        errors.username = '*At least 3 characters';
        visButton = false;
    };

    if (!userData.password) {
        errors.password = '*Requiered field';
        visButton = false;
    } else if (userData.password.length < 6) {
        errors.password = '*At least 6 characters';
        visButton = false;
    } else if (!/\d/.test(userData.password)) {
        errors.password = '*At least 1 number';
        visButton = false;
    }
    else if (userData.password.length > 35) {
        errors.password = '*35 characters maximum';
        visButton = false;
    };

    if (state === 'errors') return errors;
    else return visButton;
}

export default formRegisterValidation;