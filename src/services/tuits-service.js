import axios from 'axios'; 

// const TUIT_API = "http://localhost:4000/api/:tuits";     // location of HTTP services
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
console.log("API_BASE:", API_BASE);
console.log("API_API:", TUITS_API);
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);  // send HTTP POST request to server
    return response.data;           // data contains response'status we will ignore for now
}

export const findTuits  = async ()     => {         // async tags this function as asynchronous
    const response = await axios.get(TUITS_API);     // send HTTP GET request to TUITS_API
    const tuits = response.data;                    // extract JSON array from response from server
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);    // send HTTP DELETE request to server and append tid to URL
    return response.data;           // data contains response'status we will ignore for now 
}


export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit); // send HTTP PUT request to server and append tid to URL
    return response.data; 
}          
