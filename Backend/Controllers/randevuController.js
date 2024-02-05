const Randevu = require("../Models/randevuModel");

const create = async(req,res)=>{
    try{
        const {name,surname,email,phone,text}=req.body;
        var newRandevu = new Randevu({
            name,surname,email,phone,text,date
        });
        await Randevu.save();
        res.status(201).send({message:"Randevu başarıyla oluşturuldu", data:newRandevu});
    }
    catch(error){
console.log(error);
res.status(400).send({message:error.message});
    }
}
const getAll =async(req,res)=>{
 try {
    const Randevus=await Randevu.find({});
    var data = JSON.parse(JSON.stringify(Randevus));
    res.status(200).send({message:"Randevulara başarıyla erişildi", data:data});
 } catch (error) {
    console.log(error)
    res.status(400).send({message:"Bir şeyler yanlış gittii"});
 }
};


module.exports=model(create,getAll);