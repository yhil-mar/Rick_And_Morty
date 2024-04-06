import axios from "axios";

const addCharHandler = (id, jwt, characters) => {

    const headers = {
        'Authorization': jwt,
    };

    const config = {
        headers: headers,
    };

    if (characters.find(char => char.id == id)) {

        return { access: false, data: 'Repeated character' };

    };

    return axios.get(`/character/${id}`)

        .then(({ data }) => {

            return axios.post('/character', data, config)

                .then(({ data }) => {

                    return { access: true, data: data[0] };

                }).catch((error) => {

                    return { access: false, data: error.response.data };

                });

        }).catch((error) => {

            return { access: false, data: error.response.data };

        });

};

export default addCharHandler;