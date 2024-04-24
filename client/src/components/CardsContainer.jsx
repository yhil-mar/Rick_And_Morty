import { Card, Paginate } from './index.mjs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCharacters, firstPage, setTypeFilter, setTypeSort, showAllCharacters, sortCharacters } from '../redux/characterSlice.mjs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CardsContainer = ({ typeCharacters }) => {



    const dispatch = useDispatch();

    const showCharacters = useSelector((state) => state.character[typeCharacters]);

    const { typeSortChar, typeSortFav, typeFilterChar, typeFilterFav, numPage } = useSelector((state) => state.character);

    // Paginado
    const since = (numPage - 1) * 12;
    const until = numPage * 12;
    const amountPages = Math.ceil(showCharacters.length / 12);
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

        dispatch(firstPage());

    };

    useEffect(() => {

        dispatch(firstPage());

    }, [])

    return (

        <div className={`flex justify-center px-4 py-4 w-full sm:px-8`}>

            <div className='flex flex-col gap-4 sm:gap-6 w-full max-w-screen-xl'>

                <div className={`flex justify-around items-center gap-8 sm:gap-0`}>

                    <select className='text-input border-none rounded-lg outline-none px-3 py-2 cursor-pointer' name='sortSelect' value={typeCharacters === 'allCharactersShow' ? typeSortChar : typeSortFav} onChange={handleSort}>
                        <option value='A'>Ascending</option>
                        <option value='D'>Descending</option>
                    </select>

                    <select className='text-input border-none rounded-lg outline-none px-3 py-2 cursor-pointer' name='filterSelect' value={typeCharacters === 'allCharactersShow' ? typeFilterChar : typeFilterFav} onChange={handleFilter}>
                        <option value='allChar'>All characters</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Genderless'>Genderless</option>
                        <option value='unknown'>Unknown</option>
                    </select>

                </div>

                <TransitionGroup className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4`}>

                    {
                        viewCharacters.map(({ id, name, species, gender, image, status, origin }) => (

                            <CSSTransition key={id} timeout={500} classNames='item' appear={true}>

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

                            </CSSTransition>

                        ))

                    }

                </TransitionGroup>

                <Paginate numPage={numPage} amountPages={amountPages} />

            </div>

        </div>
    );

};

export default CardsContainer;