const asyncHandler=require("express-async-handler");
//@desc get all contacts
//@route get /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//@desc create new contact
//@route post /api/contacts
//@access public
const createContact = asyncHandler (async(req, res) => {
    console.log("The request body:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(200).json({ message: "Create contact" });
});

//@desc get contact
//@route get /api/contacts/:id
//@access public
const getContact =asyncHandler( async(req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc update contact
//@route put /api/contacts
//@access public
const updateContact =asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delete contact
//@route delete /api/contacts
//@access public
const deleteContact =asyncHandler (async(req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};