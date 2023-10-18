import { createUser } from "@/utils/user/createUser";
const page = async () => {
  const createUserResult = await createUser();
  console.log(JSON.stringify(createUserResult, null, 2));
  return <div>page</div>;
};

export default page;
