import axios from 'axios'
const baseUrl = "http://localhost:8086/booklib/api/v1/books";




const AddBookData = async(book :any) =>{
  //  save a book
  console.log("Save book.......................................",book)
  try{
    const response = await axios.post(
      baseUrl,
        book,
      );
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
   
}

const DeleteBook = async(bookId :string) =>{
  //  get the books
  try{
    const response  =  await axios.delete(
        `${baseUrl}?bookId=${bookId}`);
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to delete the data",error);
      throw error
  }
   
}

const GetBooks = async() =>{
  //  get the books
  try{
    const response  =  await axios.get(`${baseUrl}/getallbooks`);
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
      
}
const UpdateBook = async(book :any) =>{
  //  get the books
  try{
    const response  =  await axios.patch(
        `${baseUrl}?bookId=${book.bookId}`,
        book
        );
    console.log(response.data)
    return response.data;
    
  }catch(error){
      console.error("Failed to get the data",error);
      throw error
  }
     
}
export {AddBookData, DeleteBook, GetBooks, UpdateBook}