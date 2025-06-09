import {ref} from "vue";
import axios from "axios"
const API_URL = "http://localhost:3000/users";



export const useUserApi = () => {
    const users = ref([]);

    const fetchUser = async () =>{
        try{
            const response = await axios.get(API_URL);
            users.value = response.data;
        }
        catch(e){
            console.error("Error fetching users: ", e);
        }
    }

    const createUser = async (user) =>{
        try{
            await axios.post(API_URL, user);
        }catch(e){
            console.error("Error fetching users: ", e)
        }
    }
    return {users, fetchUser, createUser};
}