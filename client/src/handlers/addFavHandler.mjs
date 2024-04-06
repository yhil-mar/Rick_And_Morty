import axios from "axios";

const addFavHandler = async (jwt, id, status, name, species, origin, image, gender) => {

    const headers = {
        'Authorization': jwt,
    };

    const config = {
        headers: headers,
    };

    const newFav = {
        id, status, name, species, origin, image, gender
    };

    return axios.post('/favorites', newFav, config)

        .then(({ data }) => {

            return { access: true, data }

        }).catch((error) => {

            return { access: false, data: error.response.data };

        });

};

export default addFavHandler;