const { data } = require('../users.json');

const getAllUsers = (req, res) => {
    res.json(data);
};

const getUsersByUuid = (req, res) => {
    const { uuid } = req.params;
    console.log(uuid)
    const result = data.find((item) => item.login.uuid === uuid);

    if (result){
        res.json(result);
    }
    else {
        res.send({message: "uuid invalid"})
        res.sendStatus(404);
    }
}

const searchUsersByQuery = (req, res) => {
    console.log("Fn Called");

    const gender = req.query.gender;
    const age = req.query.age;

    if (gender && age) {
        const result = data.filter(
            (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
        );

        res.json(result);
    }
    else if (gender) {
        const result = data.filter((item) => item.gender === gender);
        res.json(result);
    }
    else if (age) {
        const result = data.filter((item) => Number(item.dob.age) >= Number(age));
        res.json(result);
    }
    else {
        res.sendStatus(404);
    }
}


module.exports = { getAllUsers, getUsersByUuid, searchUsersByQuery }