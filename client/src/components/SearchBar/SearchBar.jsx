import style from './SearchBar.module.css';
import { useState } from 'react';
import { WarningModal } from '../index.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { addCharHandler } from '../../handlers/index.mjs';
import { addChar, setSearch, setCharId } from '../../redux/characterSlice.mjs';

const SearchBar = () => {

    const { allCharacters, searchInput, charId } = useSelector((state) => state.character);

    const { jwt } = useSelector((state) => state.user);

    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {

        dispatch(setSearch(event.target.value));

    };

    const handleAddChar = async () => {

        if (searchInput === '') return setErrorMessage('Enter an ID');

        // Se realiza un dispatch a setSearchId para evitar el Debouncing y que se repita la misma acción 
        // al hacer click varias veces rápidamente
        if (charId === '') {

            dispatch(setCharId(searchInput));

            const result = await addCharHandler(searchInput, jwt, allCharacters);

            result.access ? dispatch(addChar(result.data)) : setErrorMessage(result.data);

            // Al finalizar se la setea en vacío para que al volver a intentarlo con otro ID funcione
            dispatch(setCharId(''));

            dispatch(setSearch(''));

        };

    };


    return (

        <div className={`${style.searchBarContainer}`}>

            <input className={`${style.searchContainer}`} type="search" placeholder='Search Character...' value={searchInput} onChange={handleChange} />

            <button className={`${style.buttonContainer}`} onClick={handleAddChar}>Add Character</button>

            {
                errorMessage &&
                <WarningModal
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    type={errorMessage.includes('authorization') ? 'Sing in' : 'Accept'} />
            }

        </div>

    );

};

export default SearchBar;