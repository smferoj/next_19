import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const createUser = async()=>{
    try {
        const results = await prisma.users.create({
            data:{
                firstName:"sm",
                middleName:"Feroj",
                lastName:"Mahmud",
                mobile:"0101010101",
                email:"sm.feroj@gmail.com",
                password:"123456",
                admin:true
            }
        });
        return results;
    } catch (error) {
        console.log(error);
    }
}




