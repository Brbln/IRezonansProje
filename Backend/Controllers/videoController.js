const Video = require("../Models/videoModel");

const create = async (req, res) => {
    try {
        const { vidName, vidLink } = req.body;
        var newVideo = new Video({
            vidName, vidLink
        });
        await newVideo.save();
        res.status(201).send({ message: "Video başarıyla oluşturuldu", data: newVideo });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const Videolar = await Video.find({});
        res.status(200).send({ message: "Videolara başarıyla erişildi", data: Videolar });
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "Bir şeyler yanlış gitti" });
    }
}
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findById(id);
        res.status(200).send({ message: "Video başarıyla getirildi", data: video });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Bir şeyler yanlış gitti" });
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Video.findByIdAndDelete({ _id: id });
        res.status(200).send({ message: "Video başarıyla silindi" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}
const update = async (req, res) => {
    try {
        const { id, vidName, vidLink } = req.body;
        const updateVid = await Video.findByIdAndUpdate({ _id: id },
            {
                vidName,
                vidLink
            });
        if (!updateVid) {
            return res.status(404).send({ message: "Video bulunamadı" });
        }
        res.status(200).send({ message: "Video başarıyla guncellendi" });
    } catch (error) {
        console.log(error);
        res.status(404).send({ message: error.message });
    }
}
module.exports = { create, getAll, remove, getOne, update };
