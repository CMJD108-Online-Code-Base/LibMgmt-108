import axios from 'axios'
const getBooksURL = "http://localhost:8086/booklib/api/v1/books/getallbooks"

export const GetBooks = async() =>{
  //  get the books
  try{
    const response  =  await axios.get(getBooksURL);
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
   

   
}