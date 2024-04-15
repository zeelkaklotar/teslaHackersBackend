const Contact = require('../model/Contact');

exports.create = async( req, res ) => {
    try{
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    }catch(err){
        res.status(400).json({message: 'Error creating the contact.'});
    }
}

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving contacts from the database.' });
    }
}