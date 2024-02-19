import axios from "axios";

// URL de la API a la cual se harán las peticiones
const URL = "https://rickandmortyapi.com/api/character/";

//Controlador para obtener un personaje por id de la API
const getCharById = async (id) => {

    const response = await axios.get(URL + id);

    const { status, name, species, origin, image, gender } = response.data;

    if (response.data) {
        return {
            id,
            status,
            name,
            species,
            origin: origin.name,
            image,
            gender
        };
    };

};

export default getCharById;