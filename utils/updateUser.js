
import prisma from "./prismaClient";

// export const updateUser =async()=>{
//     try {
//       const result = await prisma.users.update({
//         where:{
//             id:2
//         },
//         data:{
//             validate:true
//         }
//       })  
//       return result;
//     } catch (error) {
//         return(error)
//     }
// }
export const updateTodo =async()=>{
    try {
      const result = await prisma.todo.update({
        where:{
            id:1
        },
        data:{
            completed:false
        }
      })  
      return result;
    } catch (error) {
        return(error);
    }
}