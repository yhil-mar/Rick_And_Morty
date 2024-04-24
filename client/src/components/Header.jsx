import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {

    const location = useLocation();

    return (

        <nav className={`flex justify-center flex-shrink-0 bg-second-color/70 w-full h-16 sm:h-20`}>

            <div className='flex justify-between items-center w-full h-full px-6 max-w-screen-xl sm:px-8'>

                {

                    location.pathname === '/home' ?

                        <Link to='/favorites'>

                            <button className='mobile-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727zM8.648 7.642a2.224 2.224 0 0 1 3.125 0l.224.219.223-.219a2.225 2.225 0 0 1 3.126 0 2.129 2.129 0 0 1 0 3.069L11.998 14l-3.349-3.289a2.128 2.128 0 0 1-.001-3.069z"></path>
                                </svg>
                            </button>

                            <button className={`hidden text-white text-button rounded-full px-4 py-1 hover:bg-third-color transition-all sm:flex`}>My Favorites</button>

                        </Link>

                        :

                        <Link to='/home'>

                            <button className='mobile-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                </svg>
                            </button>

                            <button className={`hidden text-white text-button rounded-full px-4 py-1 hover:bg-third-color transition-all sm:flex`}>Back</button>

                        </Link>

                }

                {

                    location.pathname === '/home' && <SearchBar />

                }


                {

                    location.pathname === '/home' &&

                    <Link to='/auth/login'>
                        <button className='mobile-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                            </svg>
                        </button>
                        <button className={`hidden text-white text-button rounded-full px-4 py-1 hover:bg-third-color transition-all sm:flex`}>Log Out</button>
                    </Link>

                }

            </div>

        </nav>

    );

};

export default Header;