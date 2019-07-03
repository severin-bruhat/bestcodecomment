const commentModel = require('../models/comments');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  commentModel.findById(req.params.commentId, function(err, commentInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "comment found!!!", data:{comments: commentInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let commentsList = [];
  commentModel.find({}, function(err, comments){
   if (err){
    next(err);
   } else{
    for (let comment of comments) {
     commentsList.push({id: comment._id, title: comment.title, content: comment.content, created_at: comment.created_at});
    }
    res.json({status:"success", message: "comments list found!!!", data:{comments: commentsList}});
       
   }
});
 },
updateById: function(req, res, next) {
    commentModel.findByIdAndUpdate(req.params.commentId,{title:req.body.title}, function(err, commentInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "comment updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
    commentModel.findByIdAndRemove(req.params.commentId, function(err, commentInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "comment deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
    commentModel.create({ title: req.body.title, comment: req.body.content, created_at: req.body.created_at }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "comment added successfully!!!", data: null});
      
    });
 },
}