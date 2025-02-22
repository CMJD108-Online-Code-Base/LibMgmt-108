import axios from 'axios'
const baseUrl = "http://localhost:8086/booklib/api/v1/members";


const AddMemberData = async(book :any) =>{
  try{
    const response = await axios.post(
      baseUrl,
        book
      );
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
   
}

const DeleteMember = async(bookId :string) =>{
  //  get the books
  try{
    const response  =  await axios.delete(
        `${baseUrl}?memberId=${bookId}`);
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to delete the data",error);
      throw error
  }
   
}

const GetMembers = async() =>{
  //  get the books
  try{
    const response  =  await axios.get(`${baseUrl}/getallmembers`);
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
      
}
const UpdateMember = async(member :any) =>{
  //  get the books
  try{
    const response  =  await axios.patch(
        `${baseUrl}?memberId=${member.memberId}`,
        member
        );
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
     
}
export {AddMemberData, DeleteMember, GetMembers, UpdateMember}