const User = require('../Modal/User');

module.exports.login = async function(req, res) {
   try {
    // finding user in db
    let user = await User.findOne({email : req.body.email});

    // if user email is present in db
    if(user) {
        return res.status(200).json({
          success : true,
          user : user
        });
    }
    
    // if there is issue is email send response to client
    return res.status(404).json({
        message : 'Invalid Email address'
    });
    
   } catch (error) {
    console.log('Error' , error);
    return res.status(500).json({
        succes : false,
        message : 'Somthing went wrong..'
    });
   }
}

module.exports.register = async function(req, res) {
     try {
        let user = await User.findOne({email : req.body.email});

         // if user email is present in db send reponse already registered
        if(user) {
            return res.status(404).json({
                message : 'This email already registered'
            });
        }
        
        // create new user
        await User.create({
            username : req.body.username,
            email : req.body.email
        });

        return res.status(201).json({
            message : 'Registered Successfully..'
        });

    } catch (error) {
        console.log('Error' , error);
        return res.status(500).json({
            succes : false,
            message : 'Somthing went wrong..'
        });
    }
}