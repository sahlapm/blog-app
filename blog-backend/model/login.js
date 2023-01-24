const mongoose=require('mongoose');
const LoginSchema=mongoose.Schema(
    {
        title: {
            type: String,
            required: true
          },
        author : {
          type: String,
          required: true
        },
        category:{
            type: String,
            required: true
          },
        content : {
            type: String,
            required: true
          }
    }
);
var LoginModel=mongoose.model('Logins',LoginSchema);
module.exports={LoginModel}