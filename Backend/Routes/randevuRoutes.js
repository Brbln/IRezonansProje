const express=require("express");
const {create, getAll} =require("../Controllers/randevuController");

routes.post("/randevu/create",create);
routes.get("/randevu/getAll",getAll);

export default router;