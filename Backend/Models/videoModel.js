const {Schema,model} =require("mongoose");

const vidSchema =new Schema({
        vidLink:{
            type:String,
            required: [true, "This {PATH} is required"]            
        }
});
module.exports=mongoose.model("Video",vidSchema);