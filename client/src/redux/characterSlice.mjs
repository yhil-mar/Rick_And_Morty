import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCharacters: [],
    allCharactersShow: [],
    myFavorites: [],
    myFavoritesShow: [],
    searchInput: "",
    charId: "",
    detailChar: {},
    typeSortChar: 'A',
    typeSortFav: 'A',
    typeFilterChar: 'allChar',
    typeFilterFav: 'allChar',
    numPage: 1,
};

export const characterSlice = createSlice({

    name: 'character',

    initialState: initialState,

    reducers: {

        addChar: (state, action) => {
            const character = action.payload;
            state.allCharacters = [character, ...state.allCharacters];
            state.allCharactersShow = [character, ...state.allCharactersShow];
        },
        removeChar: (state, action) => {
            const idChar = action.payload;
            state.allCharacters = state.allCharacters.filter(char => char.id !== idChar);
            state.allCharactersShow = state.allCharactersShow.filter(char => char.id !== idChar);
            state.myFavorites = state.myFavorites.filter(fav => fav.id !== idChar);
            state.myFavoritesShow = state.myFavoritesShow.filter(fav => fav.id !== idChar);
        },
        addFav: (state, action) => {
            const newFav = action.payload;
            state.myFavorites = [newFav, ...state.myFavorites];
            state.myFavoritesShow = [newFav, ...state.myFavoritesShow];
        },
        removeFav: (state, action) => {
            const idFav = action.payload;
            state.myFavorites = state.myFavorites.filter(fav => fav.id !== idFav);
            state.myFavoritesShow = state.myFavoritesShow.filter(fav => fav.id !== idFav);
        },
        setSearch: (state, action) => {
            const idSearch = action.payload;
            state.searchInput = idSearch;
        },
        setCharId: (state, action) => {
            const charId = action.payload;
            state.charId = charId;
        },
        getChar: (state, action) => {
            const detailChar = action.payload;
            state.detailChar = detailChar;
        },
        removeDetailChar: (state, action) => {
            state.detailChar = {};
        },
        setCharacters: (state, action) => {
            const characters = action.payload;
            state.allCharacters = characters;
            state.allCharactersShow = characters;
        },
        clearCharacters: (state, action) => {
            state.allCharacters = [];
            state.allCharactersShow = [];
        },
        setFavorites: (state, action) => {
            const favorites = action.payload;
            state.myFavorites = favorites;
            state.myFavoritesShow = favorites;
        },
        clearFavorites: (state, action) => {
            state.myFavorites = [];
            state.myFavoritesShow = [];
        },
        sortCharacters: (state, action) => {
            const typeCharacters = action.payload;
            state[typeCharacters.slice(0, typeCharacters.length - 4)] = state[typeCharacters.slice(0, typeCharacters.length - 4)].reverse()
            state[typeCharacters] = state[typeCharacters].reverse();
        },
        filterCharacters: (state, action) => {
            const { typeFilter, typeCharacters } = action.payload;
            state[typeCharacters] = state[typeCharacters.slice(0, typeCharacters.length - 4)].filter(char => char.gender === typeFilter);
        },
        showAllCharacters: (state, action) => {
            const typeCharacters = action.payload;
            state[typeCharacters] = state[typeCharacters.slice(0, typeCharacters.length - 4)];
        },
        setTypeSort: (state, action) => {
            const { typeSort, whereSort } = action.payload;
            state[whereSort] = typeSort;
        },
        setTypeFilter: (state, action) => {
            const { typeFilter, whereFilter } = action.payload;
            state[whereFilter] = typeFilter;
        },
        firstPage: (state, action) => {
            state.numPage = 1;
        },
        nextPage: (state, action) => {
            state.numPage = state.numPage + 1;
        },
        prevPage: (state, action) => {
            state.numPage = state.numPage - 1;
        },

    },

});

export const {
    addChar,
    removeChar,
    addFav,
    removeFav,
    setSearch,
    setCharId,
    getChar,
    removeDetailChar,
    setCharacters,
    clearCharacters,
    setFavorites,
    clearFavorites,
    sortCharacters,
    filterCharacters,
    showAllCharacters,
    setTypeSort,
    setTypeFilter,
    firstPage,
    nextPage,
    prevPage,
} = characterSlice.actions;

export default characterSlice.reducer;