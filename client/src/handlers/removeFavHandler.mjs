import axios from "axios";

const removeFavHandler = async (jwt, id) => {

    const headers = {
        'Authorization': jwt,
    };

    const config = {
        headers: headers,
    };

    return axios.delete(`/favorites/${id}`, config)

        .then(({ data }) => {

            return { access: true, data };

        }).catch((error) => {

            return { access: false, data: error.response.data};

        });

};

export default removeFavHandler;