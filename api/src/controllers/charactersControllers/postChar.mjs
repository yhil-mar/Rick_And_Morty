import { Character } from "../../db.mjs";

const postChar = async (id, name, origin, status, image, species, gender, idUser) => {

    const newChar = await Character.findOrCreate({

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

    await newChar[0].addUser(idUser);

    return newChar;

};

export default postChar;