const Admin = require("../Models/adminModel");

const create = async (req, res) => {
    try {
        const { name, surname, email, password, phone } = req.body;
        var newAdmin = new Admin({
            name,
            surname,
            email,
            password,
            phone,
        });
        await newAdmin.save();
        res.status(201).send({ message: "Admin Created Successfully", data: newAdmin });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const Admins = await Admin.find({});
        var data = JSON.parse(JSON.stringify(Admins));
        res
            .status(200)
            .send({ message: "Admins Found Successfully", data: data });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
};

const getOne = async (req, res) => {
    try {
        var { id } = req.params;
        var data = await Admin.findById(id);
        res.status(200).send({ message: "Admin Found Successfully", data: data });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id, name, surname, email, password, phone } = req.body;
        const updatedAdmin = await Admin.findOneAndUpdate(
            { _id: id },
            { name, surname, email, password, phone },
            { new: true, runValidators: true }
        );
        if (!updatedAdmin) {
            return res.status(404).send({ message: "Admin not found" });
        }
        res.status(200).send({ message: "Admin updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.body;
        await Admin.findOneAndDelete({ _id: id });
        res.status(200).send({ message: "Admin Deleted Successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
};

module.exports = { create, getAll, getOne, update, remove };