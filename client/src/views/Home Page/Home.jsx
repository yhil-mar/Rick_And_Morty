import style from './Home.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header, CardsContainer, Footer } from '../../components/index.mjs';

const Home = () => {

    const { jwt } = useSelector((state) => state.user);

    const navigate = useNavigate();

    useEffect(() => {

        if (!jwt) navigate('/login')

    }, [])

    return (

        <div className={`view ${style.homePage}`}>

            <img className={`wallpaperImg`} src='/images/rick_and_morty_1.png' />
            
            <Header />

            <CardsContainer typeCharacters='allCharactersShow' />

            <Footer />


        </div>

    );

};

export default Home;