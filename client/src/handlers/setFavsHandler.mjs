import axios from "axios";

const setFavsHandler = async (jwt) => {

    const headers = {
        'Authorization': jwt,
    };

    const config = {
        headers: headers,
    };

    return axios.get('/favorites', config)

        .then(({ data }) => {

            return data;

        }).catch((error) => {

            alert(error.response.data.message);

        });

};

export default setFavsHandler;