import axios from "axios";

const registerHandler = async (event, userData) => {

    event.preventDefault();

    return axios.post('/login', userData)

        .then(({ data }) => {

            if (data.jwt) {

                const finalData = {
                    email: data.newUser.email,
                    username: data.newUser.username,
                    firstName: data.newUser.firstName,
                    lastName: data.newUser.lastName,
                    jwt: data.jwt,
                };

                return { access: true, data: finalData };

            };

        }).catch((error) => {

            return { access: false, data: error.response.data };

        });

};

export default registerHandler;