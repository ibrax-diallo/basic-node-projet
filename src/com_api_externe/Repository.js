const axios = require('axios');
//As early as possible in your application, require and configure dotenv
require('dotenv').config()

//Create a Repository class allowing to interact with an API
class Repository {
    findALLPost() {
        return axios.get(process.env.API_URL + "/posts")
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            })
    }
    //Create a method to retrieve comments by postId
    findComByPost(id){
        return axios.get(process.env.API_URL+"/posts/"+ id +"/comments")
            .then((response) =>{
                return response.data;
            })
            .catch((error)=>{
                return error.response;
            })
    }
}

module.exports = Repository;
