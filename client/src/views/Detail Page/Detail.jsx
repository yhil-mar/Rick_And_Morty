import style from './Detail.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardDetail, Footer, Header } from '../../components/index.mjs';

const Detail = () => {

    const { jwt } = useSelector((state) => state.user);

    const navigate = useNavigate();

    useEffect(() => {

        if (!jwt) navigate('/login')

    }, [])

    return (

        <div className={`view ${style.detailPage}`}>

            <img className={`wallpaperImg`} src='/images/rick_and_morty_1.png' />

            <Header />

            <div className={`${style.detailContainer}`}>
                <CardDetail />
            </div>

            <Footer />

        </div>

    );

};

export default Detail;