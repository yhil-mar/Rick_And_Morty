import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChar, removeDetailChar } from '../redux/characterSlice.mjs';

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

        <div className={`flex justify-center items-center text-white p-4 w-full sm:p-8`}>

            {
                detailChar.name ? (

                    <div className={`flex flex-col items-center gap-4 sm:gap-6 w-full max-w-screen-xl`}>

                        <h2 className='text-h2 text-center font-bold'>{detailChar.name}</h2>

                        <div className={`flex flex-col gap-4 sm:flex-row sm:gap-8`}>

                            <img className={`w-[80%] h-auto mx-auto rounded-2xl`} src={detailChar.image} alt="" />

                            <div className={`flex flex-col gap-1 justify-between`}>
                                <h4 className='text-h4'>Status: {detailChar.status}</h4>
                                <h4 className='text-h4'>Gender: {detailChar.gender}</h4>
                                <h4 className='text-h4'>Specie: {detailChar.species}</h4>
                                <h4 className='text-h4'>Origin: {detailChar.origin}</h4>
                            </div>

                        </div>

                    </div>
                )
                    : (
                        <div>

                            <h3>Loading...</h3>

                        </div>
                    )

            }

        </div>


    );

};

export default CardDetail;