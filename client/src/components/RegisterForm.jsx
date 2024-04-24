import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../redux/userSlice.mjs';
import { changeHandler, registerHandler } from '../handlers/index.mjs';

const RegisterForm = ({ isLoading }) => {

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
                }, 4000);
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

        <div
            className={`
                bg-white/20 view flex flex-col justify-center items-center p-8 ${isLoading ? 'opacity-0' : 'opacity-100'} ease-in duration-300
                sm:bg-white/50 sm:w-auto sm:min-h-fit sm:rounded-lg`}>

            <Link to='/auth/login'>
                <div className={`flex place-content-center items-center absolute top-0 left-0 bg-white fill-third-color w-8 h-8 m-4 p-2 rounded-full transition-all hover:bg-blue-login-color sm:w-12 sm:h-12 sm:m-6`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </div>
            </Link>

            <div className={`${errorMessage ? 'error-modal' : ''}`}>{errorMessage}</div>

            <h2 className='text-h2 text-center text-white font-bold mx-auto mb-4 leading-none sm:text-third-color'>¡Register your new user here!</h2>

            <form className={`text-third-color sm:grid sm:grid-cols-2 sm:gap-4`}>

                <div className={`form-part`}>
                    <label className='font-bold' htmlFor="email">Email</label>

                    <input
                        name="email"
                        className={`input-1`}
                        type="text"
                        placeholder="rick@example.com"
                        value={userData.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warning-span`}>{visMesErr.email ? errors.email : ''}</span>
                </div>

                <div className={`form-part`}>
                    <label className='font-bold' htmlFor="firstName">First Name</label>

                    <input
                        name="firstName"
                        className={`input-1`}
                        type="text"
                        placeholder='Rick'
                        value={userData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warning-span`}>{visMesErr.firstName ? errors.firstName : ''}</span>
                </div>

                <div className={`form-part`}>
                    <label className='font-bold' htmlFor="lastName">Last Name</label>

                    <input
                        name="lastName"
                        className={`input-1`}
                        type="text"
                        placeholder='Sanchez'
                        value={userData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warning-span`}>{visMesErr.lastName ? errors.lastName : ''}</span>
                </div>

                <div className={`form-part`}>
                    <label className='font-bold' htmlFor="username">Username</label>

                    <input
                        name="username"
                        className={`input-1`}
                        type="text"
                        placeholder='rick01'
                        value={userData.username}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warning-span`}>{visMesErr.username ? errors.username : ''}</span>
                </div>

                <div className={`form-part`}>
                    <label className='font-bold' htmlFor="password">Password</label>

                    <input
                        name="password"
                        className={`input-1`}
                        type="password"
                        placeholder=""
                        value={userData.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warning-span`}>{visMesErr.password ? errors.password : ''}</span>
                </div>

                <div className={`form-part col-span-2 h-16`}>
                    {
                        !showSpinner
                            ? <button className={`login-button w-fit mx-auto px-16`} disabled={!visButton} onClick={handleRegister}>Register Now</button>
                            : <svg className={`fill-none stroke-blue-login-color/80 stroke-[10] mx-auto my-0 block`} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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