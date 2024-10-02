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



exports.getUsers = async (req , res) => {
    try{
        const users = await User.find({});

        if(!users){
            res.status(500).json({
                success: false,
                message: "!NO User Found....",
            });
        }

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            users,
        });

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.deleteUser = async(req , res) => {
    try{
        const userId = req.params.id;

        // Check if the user exists
        if (!userId){
            res.status(500).json({
                success: false,
                message: error.message,
            });    
        }

        // Proceed to delete the user
        await User.findByIdAndDelete(userId)
        res.status(200).json({
        success: true,
        message: 'User deleted successfully',
    });
    }
    catch(error){
        // Handle errors appropriately
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



exports.editUser = async(req, res) => {
    try{

        // Proceed to delete the user
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
        success: true,
        message: 'User Updated successfully',

    });
    }
    catch(error){
        // Handle errors appropriately
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
