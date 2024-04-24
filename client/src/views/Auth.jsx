import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingScreen, LoginForm, RegisterForm } from "../components/index.mjs";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Auth() {

    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();

    const { pathname } = useLocation();

    const handleLoad = () => {

        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

    };

    return (

        <>

            <LoadingScreen isLoading={isLoading} message={'Loading...'} />

            <img className={`fixed w-full h-screen object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} ease-in duration-300`} src='/images/rick_and_morty_2.jpg' onLoad={handleLoad} />

            <TransitionGroup>

                {
                    pathname === '/auth/login' &&

                    <CSSTransition key={location.key} classNames="translate1" timeout={600}>
                        <div className={`view fixed flex justify-center items-center`}>
                            <LoginForm isLoading={isLoading} />
                        </div>
                    </CSSTransition>

                }

                {
                    pathname === '/auth/register' &&

                    <CSSTransition key={location.key} classNames="translate2" timeout={600}>
                        <div className={`view fixed flex justify-center items-center`}>
                            <RegisterForm isLoading={isLoading} />
                        </div>
                    </CSSTransition>

                }
                
            </TransitionGroup>

        </>

    )

};

export default Auth;