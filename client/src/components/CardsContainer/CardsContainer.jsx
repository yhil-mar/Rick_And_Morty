import style from './CardsContainer.module.css';
import { Card, Paginate } from '../../components/index.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { filterCharacters, setTypeFilter, setTypeSort, showAllCharacters, sortCharacters } from '../../redux/characterSlice.mjs';

const CardsContainer = ({ typeCharacters }) => {



    const dispatch = useDispatch();

    const showCharacters = useSelector((state) => state.character[typeCharacters]);

    const { typeSortChar, typeSortFav, typeFilterChar, typeFilterFav, numPage } = useSelector((state) => state.character);

    // Paginado
    const since = (numPage - 1) * 15;
    const until = numPage * 15;
    const amountPages = Math.ceil(showCharacters.length / 15);
    const viewCharacters = showCharacters.slice(since, until);

    const handleSort = (event) => {

        const typeSort = event.target.value;

        dispatch(setTypeSort({ typeSort, whereSort: typeCharacters === 'allCharactersShow' ? 'typeSortChar' : 'typeSortFav' }));

        dispatch(sortCharacters(typeCharacters));


    };

    const handleFilter = (event) => {

        const typeFilter = event.target.value;

        dispatch(setTypeFilter({ typeFilter, whereFilter: typeCharacters === 'allCharactersShow' ? 'typeFilterChar' : 'typeFilterFav' }));

        if (typeFilter !== 'allChar') dispatch(filterCharacters({ typeFilter, typeCharacters }));
        else dispatch(showAllCharacters(typeCharacters));

    };

    return (

        <div className={style.cardsContainer}>

            <div className={`${style.selectSection}`}>

                <select name='sortSelect' value={typeCharacters === 'allCharactersShow' ? typeSortChar : typeSortFav} onChange={handleSort}>
                    <option value='A'>Ascending</option>
                    <option value='D'>Descending</option>
                </select>

                <select name='filterSelect' value={typeCharacters === 'allCharactersShow' ? typeFilterChar : typeFilterFav} onChange={handleFilter}>
                    <option value='allChar'>All characters</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                </select>

            </div>

            <div className={style.cardsSection}>

                {
                    viewCharacters.map(({ id, name, species, gender, image, status, origin }) => {
                        return (

                            <Card
                                key={id}
                                id={id}
                                name={name}
                                species={species}
                                status={status}
                                gender={gender}
                                origin={origin}
                                image={image}
                            />

                        );
                    })

                }

            </div>

            <Paginate numPage={numPage} amountPages={amountPages} />

        </div>
    );

};

export default CardsContainer;