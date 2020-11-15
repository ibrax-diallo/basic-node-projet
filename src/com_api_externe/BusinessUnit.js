//Create a BusinessUnit class that will use the methods of the Repository previously created.
const Repository = require('./Repository');
const repo = new Repository();
class BusinessUnit {
    // Create a method to retrieve the number of comments. This method will take the postId as a parameter and return an object
    getPost(id){
      return  repo.findComByPost(id).then((response) => {
          return { comment_count: response.length-1 }});
    }

}

const businessUnit = new BusinessUnit();
repo.findALLPost().then(response => console.log(response));
businessUnit.getPost(1).then(r=>console.log(r));

