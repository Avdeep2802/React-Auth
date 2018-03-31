import axios from 'axios';
import React from 'react';


export function signup_action(userdata){
   (dispatch) => {
     return axios.post("http://127.0.0.1:8080/signup", userdata,'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "http://127.0.0.1:3000");
      }

}


export function userSignupRequest(userdata) {
  return dispath => {
    return axios.post("http://127.0.0.1:8080/signup", userdata,'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "http://127.0.0.1:3000");
  }
}
