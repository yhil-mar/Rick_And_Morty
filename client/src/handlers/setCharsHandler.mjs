import axios from "axios";

const setCharsHandler = async (jwt) => {

    const headers = {
        'Authorization': jwt,
    };

    const config = {
        headers: headers,
    };

    return axios.get('/character', config)

        .then(({ data }) => {

            return data;

        }).catch((error) => {

            alert(error.response.data.message);

        });

};

export default setCharsHandler;