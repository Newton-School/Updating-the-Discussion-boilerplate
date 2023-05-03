const Discussion   = require("../models/Discussion.js");


const getalldiscussion =async (req, res) => {

    const all_discussion = await Discussion.find({});
    res.status(200).json({
        "status": "success",
        "data": all_discussion
    })
   
}

const creatediscussion = async (req, res) => {

    Discussion.create(req.body).then((discussion)=> {
        res.status(200).json({
            "message": 'Discussion added successfully',
            "discussion_id": discussion._id,
            "status": 'success'
        });
    }).catch((err) => {
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        });
    });
}

const deletediscussion = async (req, res) => {

    const id = req.params.id;

    const discussion = await Discussion.findById(id);
    if(!discussion)
    {
        res.status(403).json({
            "status": 'fail',
            "message": "Given Discussion doesnot exist"
        })
    }

    Discussion.findByIdAndDelete(id).then(() => {
        res.status(200).json({
            status: 'success',
            message: 'Discussion deleted successfully'
        });
    })
    .catch((err) => {
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        })
    });

}

/*

deletediscussion Controller


1. update the discussion with given id in req.params.
2. update that field that is present in req.body.

req.body = {
    heading : "xyz",
    body : "xyz"
}

req.body can contain any of the given field.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Discussion updated successfully'
}

2. Discussion Doesnot exist

403 Status Code
json = {
    "status": 'fail',
    "message": 'Given Discussion doesnot exist'
}

3. Something went wrong

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

*/

const updatediscussion = async (req, res) => {

    //Write your code here.

}

module.exports = { getalldiscussion, creatediscussion, deletediscussion, updatediscussion };
