import style from './Favorites.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header, CardsContainer, Footer } from '../../components/index.mjs';

const Favorites = () => {

    const { jwt } = useSelector((state) => state.user);

    const navigate = useNavigate();

    useEffect(() => {

        if (!jwt) navigate('/login')

    }, [])

    return (

        <div className={`view ${style.favoritesPage}`}>

            <img className={`wallpaperImg`} src='/images/rick_and_morty_1.png' />

            <Header />

            <CardsContainer typeCharacters='myFavoritesShow' />

            <Footer />

        </div>

    );

};

export default Favorites;