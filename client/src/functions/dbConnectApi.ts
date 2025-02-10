import axios from 'axios';
import { iData , iUser } from './interface';


const URL: string = "http://localhost:5000";
const URL_POST: string = "/test";
const URL_USER: string = "/user";

export async function getAllDoc() {
    try {
        const response = await axios.get(`${URL}${URL_POST}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error("Error when fetching all doc:", error);
    }
    return null;

}
export async function getOneDoc(id: string) {
    //"http://localhost:5000/test/67a088edff9db26a522f21b1"
    const response = await axios.get(`${URL}${URL_POST}/${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        console.log("Error when fetching one doc");
        return null;
    }

}
export async function createDoc(data: iData) {

    //"http://localhost:5000/test"
    const response = await axios.post(`${URL}${URL_POST}`, data);
    console.log("doc created");
    return response;


}
export async function updateDoc(id: string, data: iData) {

    //"http://localhost:5000/test/67a088edff9db26a522f21b1"
    const response = await axios.put(`${URL}${URL_POST}/${id}`, data);
    console.log("doc updated");
    return response;

}
export async function deleteDoc(id: string) {

    //"http://localhost:5000/test/67a088edff9db26a522f21b1"
    const response = await axios.delete(`${URL}${URL_POST}/${id}`);
    console.log("doc deleted");
    return response;

}



//ueser





export async function getOneUser(id: string) {
    //"http://localhost:5000/user/67a088edff9db26a522f21b1"
    const response = await axios.get(`${URL}${URL_USER}/${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        console.log("Error when fetching one doc");
        return null;
    }

}
export async function createUser(data: iUser) {

    //"http://localhost:5000/user"
    const response = await axios.post(`${URL}${URL_USER}`, data);
    console.log("doc created");
    return response;


}
export async function updateUser(id: string, data: iUser) {

    const response = await axios.put(`${URL}${URL_USER}/${id}`, data);
    console.log("doc updated");
    return response;

}