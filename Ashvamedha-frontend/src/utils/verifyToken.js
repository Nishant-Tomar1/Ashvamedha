import axios from "axios";
import { server } from "../constants.js";

export const verifyToken = async (accessToken) => {
        try {
          const response = await axios.get(`${server}/admin/verify`, {
            headers :{
              Authorization :`Bearer${accessToken}`
            }
          }); 
          // console.log(response);
          
          
          if (response?.data.statusCode === 200) {
              return { isLoggedIn : true ,  sport : response.data.result.sport } 
          }
          return { isLoggedin: false, sport : ""};

        } catch (error) {
          console.log("Something went wrong while verifying accesstoken",error);
          return { isLoggedin: false, sport : ""};
        }   
}