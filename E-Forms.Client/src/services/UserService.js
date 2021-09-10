import React  from "react";
import axios from 'axios';


export const getAllUsers = async() => {
    const response = await axios.get(mainRoad);
    return await response.json();
}

export const createUser = async(data) => {
    const response = await axios.post(mainRoad, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

const mainRoad = 'https://localhost:44361/api/users'