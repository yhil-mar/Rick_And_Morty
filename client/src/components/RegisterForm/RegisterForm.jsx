import style from './RegisterForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/userSlice.mjs';
import { changeHandler, registerHandler } from '../../handlers/index.mjs';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        firstName: '',
        lastName: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        username: '',
        firstName: '',
        lastName: '',
    });

    const [visButton, setVisButton] = useState(false);

    const [visMesErr, setVisMesErr] = useState({
        email: false,
        password: false,
        username: false,
        firstName: false,
        lastName: false,
    });

    const [showSpinner, setShowSpinner] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {

        changeHandler(event, userData, setUserData, setErrors, setVisButton, 'register');

    };

    const handleRegister = async (event) => {

        setShowSpinner(true);
        setVisButton(!visButton);

        const result = await registerHandler(event, userData);

        if (result.access) {

            dispatch(addUser(result.data));

            setTimeout(() => {
                navigate('/home');
            }, 2000);

        } else {
            setTimeout(() => {
                setShowSpinner(false);
                setErrorMessage(result.data);
                setTimeout(() => {
                    setErrorMessage('');
                    setVisButton(true);
                }, 5000);
            }, 2000);

        };

    };

    const handleBlur = (event) => {

        const property = event.target.name;

        if (errors[property]) {
            setVisMesErr({ ...visMesErr, [property]: true });
        };

    };

    useEffect(() => {

        const clearLogin = {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            jwt: "",
        };

        dispatch(addUser(clearLogin));

    }, []);

    return (

        <div className={style.registerContainer}>

            <div className={`${errorMessage ? 'messageContainer' : ''}`}>{errorMessage}</div>

            <form className={style.formSection}>

                <h1>¡Register your new user here!</h1>

                <div className={`formPart`}>
                    <label htmlFor="email">Email</label>

                    <input
                        name="email"
                        className={`input_1`}
                        type="text"
                        placeholder="rick@example.com"
                        value={userData.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.email ? errors.email : ''}</span>
                </div>

                <div className={`formPart`}>
                    <label htmlFor="firstName">First Name</label>

                    <input
                        name="firstName"
                        className={`input_1`}
                        type="text"
                        placeholder='Rick'
                        value={userData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.firstName ? errors.firstName : ''}</span>
                </div>

                <div className={`formPart`}>
                    <label htmlFor="lastName">Last Name</label>

                    <input
                        name="lastName"
                        className={`input_1`}
                        type="text"
                        placeholder='Sanchez'
                        value={userData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.lastName ? errors.lastName : ''}</span>
                </div>

                <div className={`formPart`}>
                    <label htmlFor="username">Username</label>

                    <input
                        name="username"
                        className={`input_1`}
                        type="text"
                        placeholder='rick01'
                        value={userData.username}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.username ? errors.username : ''}</span>
                </div>

                <div className={`formPart`}>
                    <label htmlFor="password">Password</label>

                    <input
                        name="password"
                        className={`input_1`}
                        type="password"
                        placeholder=""
                        value={userData.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.password ? errors.password : ''}</span>
                </div>

                <div className={`formPart ${style.buttonContainer}`}>
                    {
                        !showSpinner
                            ? <button className={`loginButton ${style.registerButton}`} disabled={!visButton} onClick={handleRegister}>Register</button>
                            : <svg className={`spinnerCharge`} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <circle cx="50" cy="50" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.7462686567164178s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                                </circle>
                            </svg>
                    }
                </div>

            </form>

        </div>
    )
};

export default RegisterForm;