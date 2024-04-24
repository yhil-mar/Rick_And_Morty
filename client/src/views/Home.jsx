import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header, CardsContainer, Footer, LoadingScreen } from '../components/index.mjs';

const Home = () => {

    const { jwt } = useSelector((state) => state.user);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {

        setTimeout(() => {
            document.body.classList.remove('overflow-y-hidden');
            setIsLoading(false);
        }, 500);

        document.body.classList.add('overflow-y-hidden');

    };

    useEffect(() => {

        if (!jwt) navigate('/auth/login')

    }, [])

    return (

        <>

            <LoadingScreen isLoading={isLoading} message={'Loading Characters...'} />

            <img className={`fixed w-full h-screen object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} ease duration-500`} src='/images/rick_and_morty_5.jpg' onLoad={handleLoad} />

            <div className={`fixed w-full h-screen bg-black/30`}></div>

            <div className={`relative grid grid-rows-[auto_1fr_auto] view ${isLoading ? 'opacity-0' : 'opacity-100'} ease duration-500`}>

                <Header />

                <CardsContainer typeCharacters='allCharactersShow' />

                <Footer />

            </div>



        </>


    );

};

export default Home;