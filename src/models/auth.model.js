const dataAuth = [];
let id = 1;
import prisma from "../lib/prisma.js";


async function registerModel(fullName, email, password) {
    const newUser = await prisma.user.create({  
        data: {
            fullName,
            email,
            password
        }
    });
    return newUser;
}

async function loginModel(email, password) {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (user && user.password === password) {
        return user;
    }
    return null;
}

export default {
    registerModel,
    loginModel,
    dataAuth
};