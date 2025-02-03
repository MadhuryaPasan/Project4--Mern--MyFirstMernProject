import axios from 'axios';
import { iData } from './interface';


const URL: string = "http://localhost:5000";
const URL_Backend: string = "/test";

export async function getAllDoc() {
    try {
        const response = await axios.get(`${URL}${URL_Backend}`);
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
    const response = await axios.get(`${URL}${URL_Backend}/${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        console.log("Error when fetching one doc");
        return null;
    }

}
export async function createDoc(data: iData) {

    //"http://localhost:5000/test"
    const response = await axios.post(`${URL}${URL_Backend}`, data);
    console.log("doc created");
    return response;


}
export async function updateDoc(id: string, data: iData) {

    //"http://localhost:5000/test/67a088edff9db26a522f21b1"
    const response = await axios.put(`${URL}${URL_Backend}/${id}`, data);
    console.log("doc updated");
    return response;

}
export async function deleteDoc(id: string) {

    //"http://localhost:5000/test/67a088edff9db26a522f21b1"
    const response = await axios.delete(`${URL}${URL_Backend}/${id}`);
    console.log("doc deleted");
    return response;

}