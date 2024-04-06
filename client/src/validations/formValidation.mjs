const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;

const formValidation = (userData, state) => {

    const errors = {};
    let visButton = true;

    if (!userData.userEmail) {
        errors.userEmail = '*Requiered field';
        visButton = false;
    } else if (userData.userEmail.length > 35) {
        errors.userEmail = '*35 characters maximum';
        visButton = false;
    } else if (userData.userEmail.length < 3) {
        errors.userEmail = '*At least 3 characters';
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

    if (state === 'errors') return errors;
    else return visButton;
}

export default formValidation;