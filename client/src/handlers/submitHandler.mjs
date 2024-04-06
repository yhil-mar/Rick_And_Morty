import axios from "axios";

const submitHandler = async (event, userData) => {

    event.preventDefault();

    return axios.get(`/login?userEmail=${userData.userEmail}&password=${userData.password}`)

        .then(({ data }) => {

            if (data.jwt) {

                const finalData = {
                    email: data.user.email,
                    username: data.user.username,
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    jwt: data.jwt,
                };

                return { access: true, data: finalData };

            };

        }).catch((error) => {

            return { access: false, data: error.response.data };

        });

};

export default submitHandler;