const Topics = require('../Modal/Topics');


// @request for get topics lists
module.exports.getTopics = async function(req, res){
   try {
     let data = await Topics.find({});
       return res.status(200).json({
        success : true,
        data,
      });
   } catch (error) {
    return res.status(500).json({
        succes : false,
        message : 'Somthing went wrong..'
    });
   }
}


// @request for add new topics
module.exports.addTopics = async function(req, res){
    try {
        await Topics.create(req.body);
        return res.status(201).json({
            succes : true,
            message : 'Topic added....'
        });
    } catch (error) {
        console.log('Error' , error);
        return res.status(500).json({
            succes : false,
            message : 'Somthing went wrong..'
        });
    }
}