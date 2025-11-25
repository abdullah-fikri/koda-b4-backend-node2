const dataAuth = [];
let id = 1;

function registerModel(fullName, email, password){
    const newUser = {
        id: id++,
        fullName,
        email,
        password
    };
    dataAuth.push(newUser);
    return newUser;
}

function loginModel(email, password){
    return dataAuth.find(el => el.email === email && el.password === password);
}

module.exports = {
    registerModel,
    loginModel,
    dataAuth
};