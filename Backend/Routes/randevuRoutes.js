const express = require("express");
const router = express.Router(); // express.Router() ile yeni bir Router nesnesi oluşturuluyor
const { create, getAll } = require("../Controllers/randevuController");

router.post("/randevu/create", create); // router nesnesi üzerinden post yöntemiyle /randevu/create yoluna işlem ekleme
router.get("/randevu/getAll", getAll); // router nesnesi üzerinden get yöntemiyle /randevu/getAll yoluna işlem ekleme

module.exports = router; // router nesnesini dışa aktarma
