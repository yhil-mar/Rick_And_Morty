import axios from "axios";

const removeCharHandler = async (jwt, id, myFavorites) => {

    const headers = {
        'Authorization': jwt,
    };

    const config = {
        headers: headers,
    };

    return axios.delete(`/character/${id}`, config)

        .then(({ data }) => {

            if (myFavorites.find(char => char.id === id)) {

                return axios.delete(`/favorites/${id}`, config)

                    .then(({ data }) => {

                        return { access: true, data };

                    }).catch((error) => {

                        return { access: false, data: error.response.data };

                    });

            } else return { access: true, data };

        }).catch((error) => {

            return { access: false, data: error.response.data };

        });

};

export default removeCharHandler;