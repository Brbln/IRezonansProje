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

module.exports = { create };
