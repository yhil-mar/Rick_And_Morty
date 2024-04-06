import style from './CardDetail.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChar, removeDetailChar } from '../../redux/characterSlice.mjs';

const CardDetail = () => {

    const { id } = useParams();

    const { allCharacters, detailChar } = useSelector((state) => state.character);

    const dispatch = useDispatch();

    useEffect(() => {

        const character = allCharacters.find(char => char.id == id);

        dispatch(getChar(character));

        return () => dispatch(removeDetailChar());

    }, [])


    return (

        <div className={`${style.cardDetailContainer}`}>

            {
                detailChar.name ? (

                    <div className={`${style.infoContainer}`}>

                        <h3>{detailChar.name}</h3>

                        <div className={`${style.bodyContainer}`}>

                            <img className={`${style.imgDetail}`} src={detailChar.image} alt="" />

                            <div className={`${style.specsContainer}`}>
                                <h4>Status: {detailChar.status}</h4>
                                <h4>Gender: {detailChar.gender}</h4>
                                <h4>Specie: {detailChar.species}</h4>
                                <h4>Origin: {detailChar.origin}</h4>
                            </div>

                        </div>

                    </div>
                )
                    : (
                        <h3>Loading...</h3>
                    )

            }

        </div>


    );

};

export default CardDetail;