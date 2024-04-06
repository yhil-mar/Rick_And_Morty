import style from './Login.module.css';
import { LoginForm } from '../../components/index.mjs';

const Login = () => {

    return (

        <div className={`view ${style.loginPage}`}>

            <LoginForm />

            <img className={`wallpaperImg`} src='/images/rick_and_morty_2.jpg' />

        </div>

    );

};

export default Login;