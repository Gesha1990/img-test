import * as axios from "axios/index";

const instance = axios.create({
  baseURL: "https://tzfrontend.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json'
  }
  
});

export const productsAPI = {
  getAllImages() {
    return instance.get('images/').then((response) => response.data);
  },
  getImage(image_id){
    return instance.get(`images/${image_id}`).then((response) => response.data);
  },
  getComments(image_id){
    return instance.get(`comments/${image_id}`).then((response) => response.data);
  },
  postComments (description, id){
    return instance({
        url: `https://tzfrontend.herokuapp.com/comments/add/`,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: {
          "name": "Hennadii",
          "description": description,
          "image_id": id
        }
    })
  } 
};
