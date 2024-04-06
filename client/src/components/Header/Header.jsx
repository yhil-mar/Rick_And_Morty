import style from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {

    const location = useLocation();

    return (

        <div className={style.headerContainer}>

            {

                location.pathname === '/home' ?

                    <Link to='/favorites'>

                        <button className={`headerButton`}>My Favorites</button>


                    </Link>


                    :

                    <Link to='/home'>

                        <button className={`headerButton`}>Back</button>

                    </Link>

            }

            {

                location.pathname === '/home' && <SearchBar />

            }


            <Link to='/login'>
                <button className={`headerButton`}>Log Out</button>
            </Link>

        </div>

    );

};

export default Header;