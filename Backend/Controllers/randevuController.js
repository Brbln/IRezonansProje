const Randevu = require("../Models/randevuModel");

const create = async (req, res) => {
    try {
        const { name, surname, email, phone, text, date } = req.body;
        var newRandevu = new Randevu({
            name, surname, email, phone, text, date
        });
        await newRandevu.save();
        res.status(201).send({ message: "Randevu başarıyla oluşturuldu", data: newRandevu });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const Randevus = await Randevu.find({});
        var data = JSON.parse(JSON.stringify(Randevus));
        res.status(200).send({ message: "Randevulara başarıyla erişildi", data: data });
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "Bir şeyler yanlış gitti" });
    }
};
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const rand = await Randevu.findById(id);
        res.status(200).send({ message: "Randevu başarıyla getirildi", data: rand });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Bir şeyler yanlış gitti" });
    }
}
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Randevu.findOneAndDelete({ _id: id });
        res.status(200).send({ message: "Randevu başarıyla silindi" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
};
module.exports = { create, getAll, getOne, remove}; 
