const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactModel");


//@desc get all contacts
//@route get /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});


//@desc create new contact
//@route post /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
});

//@desc get contact
//@route get /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("sdfksfs");
    }
    res.status(200).json(contact);
});

//@desc update contact
//@route put /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    );
    res.status(200).json(updatedContact);
});

//@desc delete contact
//@route delete /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("sdfksfs");
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};