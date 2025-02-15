import axios from 'axios'
const addUrl = "http://localhost:8086/booklib/api/v1/books"

export const AddBookData = async(book :any) =>{
  //  save a book
  console.log("Save book.......................................",book)
  try{
    const response = await axios.post(
        addUrl,
        book
      );
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
   

   
}