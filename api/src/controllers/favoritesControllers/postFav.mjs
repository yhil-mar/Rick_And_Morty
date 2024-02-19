import { Favorite } from "../../db.mjs";

const postFav = async (id, name, origin, status, image, species, gender, idUser) => {

    const newFav = await Favorite.findOrCreate({

        where: { id: id },
        defaults: {
            name: name,
            origin: origin,
            status: status,
            image: image,
            species: species,
            gender: gender
        }

    });

    await newFav[0].addUser(idUser);

    return newFav;

};

export default postFav;