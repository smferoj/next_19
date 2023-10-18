import prisma from "./prismaClient";
export const queryData = async (searchParams)=>{

    let query = searchParams;
    try {
    const qureyOutput = await prisma.users.findMany({
     where:{
        firstName:query
     }
    });
    return qureyOutput;
    } catch (error) {
        console.log(error)
    }finally{
        prisma.$disconnect();
    }
    // const queryOutput = 'hello world'
    // return queryOutput;
}

//   const qureyOutput = await prisma.users.findMany();
//prisma.users.findMany({
    // select:{
    //     firstName:true,
    //     lastName:true
    // }


    //  const qureyOutput = await prisma.users.findMany({
        // select:{
        //     firstName:true,
        //     lastName:true
        // },
        // where:{
        //  lastName:'feroj'
        // }
        // //  firstName:{
        //     startsWith: "M"
        // }