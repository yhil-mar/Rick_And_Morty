import style from './Card.module.css';
import { useState } from 'react';
import { WarningModal } from '../index.mjs';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeChar, removeFav } from '../../redux/characterSlice.mjs';
import { addFavHandler, removeCharHandler, removeFavHandler } from '../../handlers/index.mjs';

const Card = ({ id, name, species, gender, image, status, origin }) => {

    const { jwt } = useSelector((state) => state.user);

    const { myFavorites } = useSelector((state) => state.character);

    const [errorMessage, setErrorMessage] = useState('');

    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const handleFavorite = async (event) => {

        // const typeFav = event.target.name;

        const typeFav = event.target.attributes.name.value;

        if (typeFav == 'noFav') {

            const result = await addFavHandler(jwt, id, status, name, species, origin, image, gender);

            result.access ? dispatch(addFav({ id, status, name, species, origin, image, gender })) : setErrorMessage(result.data);

        } else {

            const result = await removeFavHandler(jwt, id);

            result.access ? dispatch(removeFav(id)) : setErrorMessage(result.data);

        };


    };

    const handleClose = async () => {

        const result = await removeCharHandler(jwt, id, myFavorites);

        result.access ? dispatch(removeChar(id)) : setErrorMessage(result.data);

    };

    return (

        <div className={`${style.cardContainer}`}>

            <div className={`${style.optionsContainer}`}>

                {/* {

                    myFavorites.find(char => char.id === id) ? (

                        <button className={`${style.cardButton}`} name='fav' onClick={handleFavorite}>❤️</button>

                    ) : (

                        <button className={`${style.cardButton}`} name='noFav' onClick={handleFavorite}>🤍</button>
                    )

                } */}

                <svg className={`${style.cardButton} ${myFavorites.find(char => char.id === id) ? style.charFav : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        name={myFavorites.find(char => char.id === id) ? 'fav' : 'noFav'}
                        onClick={handleFavorite}
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>

                {

                    pathname === '/home' &&
                    // <div className={`${style.cardButton}`} onClick={handleClose}>❌</div>
                    <svg className={`${style.cardButton}`} onClick={handleClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                    </svg>

                }

            </div>

            <div className={`${style.dataContainer}`}>

                <Link className={`${style.detailLink}`} to={`/detail/${id}`}>
                    <h4>{
                        name.split(' ').length < 3
                            ? name
                            : name.split(' ')[0] + ' ' + name.split(' ')[1]
                    }</h4>
                </Link>
                <h5>{species}</h5>
                <h5>{gender}</h5>
                {/* <div className={`${style.imageContainer}`}> */}
                <img className={`${style.charImage}`} src={image} alt="" />
                {/* </div> */}

            </div>

            {
                errorMessage &&
                <WarningModal errorMessage={errorMessage} setErrorMessage={setErrorMessage} type={'Sing in'} />
            }

        </div>

    );

};

export default Card;