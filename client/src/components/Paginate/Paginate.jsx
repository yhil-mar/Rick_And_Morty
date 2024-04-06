import style from './Paginate.module.css';
import { useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../../redux/characterSlice.mjs';

const Paginate = ({ numPage, amountPages }) => {

    const dispatch = useDispatch();

    const handlePage = (event) => {
        const action = event.target.id;
        if (action === 'next') dispatch(nextPage());
        else dispatch(prevPage());
    };

    return (

        <div className={`${style.paginateContainer}`}>

            <span className={style.numbers}>Page {numPage} of {amountPages}</span>
            
            {
                numPage > 1 &&
                <div id='prev' className={style.paginateButton} onClick={handlePage}>{'<'}</ div>
            }

            {
                numPage < amountPages &&
                <div id='next' className={style.paginateButton} onClick={handlePage}>{'>'}</ div>
            }

        </div>

    );
};

export default Paginate;