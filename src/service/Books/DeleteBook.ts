import axios from 'axios'
const updateURL = "http://localhost:8086/booklib/api/v1/books"

export const DeleteBook = async(bookId :string) =>{
  //  get the books
  try{
    const response  =  await axios.delete(
        `${updateURL}?bookId=${bookId}`);
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to delete the data",error);
      throw error
  }
   

   
}