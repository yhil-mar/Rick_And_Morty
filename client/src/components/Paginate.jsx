import { useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../redux/characterSlice.mjs';

const Paginate = ({ numPage, amountPages }) => {

    const dispatch = useDispatch();

    const handlePage = (event) => {
        const action = event.target.id;
        if (action === 'next') dispatch(nextPage());
        else dispatch(prevPage());
    };

    return (

        <div className={`text-white text-span flex justify-center gap-4 mt-auto`}>

            <span>Page {numPage} of {amountPages} </span>

            {
                numPage > 1 &&
                <button id='prev' className={`flex justify-center items-center w-5 leading-none font-bold text-button text-second-color bg-white rounded-full hover:bg-white/80 transition-all sm:w-6`} onClick={handlePage}>{'<'}</ button>
            }

            {
                numPage < amountPages &&
                <button id='next' className={`flex justify-center items-center w-5 leading-none font-bold text-button text-second-color bg-white rounded-full hover:bg-white/80 transition-all sm:w-6`} onClick={handlePage}>{'>'}</ button>
            }

        </div>

    );
};

export default Paginate;