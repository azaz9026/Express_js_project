const User = require('../models/user_Models.js');

exports.home = (req, res) => {
    res.send('Hello World!');
}

exports.createUser = async (req, res) => {
    const { name, email } = req.body;

    // Basic input validation
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: 'Name and email are required.',
        });
    }

    const userExists = await User.findOne({email});
    if (userExists){
        throw new Error('User already exists'); 
    } 

    try {
        const user = await User.create({ name, email });
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
