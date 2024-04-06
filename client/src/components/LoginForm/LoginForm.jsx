import style from './LoginForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/userSlice.mjs';
import { clearCharacters, clearFavorites, firstPage, setCharacters, setFavorites, setTypeFilter, setTypeSort } from '../../redux/characterSlice.mjs';
import { changeHandler, setCharsHandler, setFavsHandler, submitHandler } from '../../handlers/index.mjs';

const LoginForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        userEmail: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        userEmail: '',
        password: ''
    });

    const [visButton, setVisButton] = useState(false);

    const [visMesErr, setVisMesErr] = useState({
        userEmail: false,
        password: false,
    });

    const [showSpinner, setShowSpinner] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {

        changeHandler(event, userData, setUserData, setErrors, setVisButton, 'login');

    };

    const handleSubmit = async (event) => {

        setShowSpinner(true);
        setVisButton(!visButton);

        const result = await submitHandler(event, userData);

        if (result.access) {

            const characters = await setCharsHandler(result.data.jwt);

            const favorites = await setFavsHandler(result.data.jwt);

            dispatch(setCharacters(characters));

            dispatch(setFavorites(favorites));

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

    // Acá este handler hace que cada vez que no esté apuntado el input se verifique si hay errores en el parámetro elegido
    // y así se muestre o no el span de cual error existe, lo cual hace que la primera vez ingresando los datos no se
    // muestren los errores

    const handleBlur = (event) => {

        const property = event.target.name;

        if (errors[property]) {
            setVisMesErr({ ...visMesErr, [property]: true });
        };

    };

    useEffect(() => {

        const newLogin = {

            email: "",
            username: "",
            firstName: "",
            lastName: "",
            jwt: "",
        };

        dispatch(addUser(newLogin));

        dispatch(clearCharacters());

        dispatch(clearFavorites());

        dispatch(setTypeSort({ typeSort: 'A', whereSort: 'typeSortChar' }));
        dispatch(setTypeSort({ typeSort: 'A', whereSort: 'typeSortFav' }));
        dispatch(setTypeFilter({ typeFilter: 'allChar', whereFilter: 'typeFilterChar' }));
        dispatch(setTypeFilter({ typeFilter: 'allChar', whereFilter: 'typeFilterFav' }));

        dispatch(firstPage());

    }, []);

    return (

        <div className={style.loginContainer}>

            <span className={`${errorMessage ? 'messageContainer' : ''}`}>{errorMessage}</span>

            <form className={style.formSection}>

                <h1 className={`initialMessage`}>¡Welcome!</h1>

                <div className={`formPart`}>
                    <input
                        name="userEmail"
                        className={`input_1`}
                        type="text"
                        placeholder="Username / Email"
                        value={userData.userEmail}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.userEmail ? errors.userEmail : ''}</span>
                </div>

                <div className={`formPart`}>
                    <input
                        name="password"
                        className={`input_1`}
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <span className={`warningSpan`}>{visMesErr.password ? errors.password : ''}</span>
                </div>

                <div className={`formPart ${style.buttonContainer}`}>
                    {
                        !showSpinner
                            ? <button className={`loginButton`} disabled={!visButton} onClick={handleSubmit}>Login</button>
                            : <svg className={`spinnerCharge`} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <circle cx="50" cy="50" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.7462686567164178s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                                </circle>
                            </svg>
                    }
                </div>


            </form>
            <div className={`formPart ${style.registerSection}`}>
                <span className={`${style.registerText}`}>¿Are you a new user?</span>
                <Link className={`${style.registerLink}`} to='/register'>
                    <span>Click here to register</span>
                </Link>
            </div>

        </div>
    )
};

export default LoginForm;