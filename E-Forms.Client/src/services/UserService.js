export const getAllUsers = async() => {
    const response = await fetch({MainRoad});
    return await response.json();
}

export const createUser = async(data) => {
    const response = await fetch('api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

const MainRoad = 'https://localhost:44361/api/users'