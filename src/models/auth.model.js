const dataAuth = [];
let id = 1;
import prisma from "../lib/prisma.js";


async function registerModel(fullname, email, password) {
    const newUser = await prisma.user.create({  
        data: {
            fullname,
            email,
            password
        }
    });
    return newUser;
}

async function loginModel(email) {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    return user;
}

export default {
    registerModel,
    loginModel,
    dataAuth
};