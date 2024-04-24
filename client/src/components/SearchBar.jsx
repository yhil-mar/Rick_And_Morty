import { useState } from 'react';
import { WarningModal } from './index.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { addCharHandler } from '../handlers/index.mjs';
import { addChar, setSearch, setCharId } from '../redux/characterSlice.mjs';

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

        <div className={`flex justify-center items-center`}>

            <input className={`text-input h-8 w-[70%] rounded-tl-full rounded-bl-full px-4 outline-none sm:w-auto`} type="search" placeholder='Search Character...' value={searchInput} onChange={handleChange} />

            <div className='flex place-content-center w-12 h-8 rounded-tr-full rounded-br-full bg-third-color sm:hidden'>
                <button className='fill-white w-8 h-8 hover:fill-second-color transition-all' onClick={handleAddChar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
                    </svg>
                </button>
            </div>

            <button className={`hidden items-center text-white text-button leading-none rounded-tr-full rounded-br-full bg-third-color h-8 px-4 hover:text-second-color transition-all sm:flex`} onClick={handleAddChar}>Add Character</button>

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