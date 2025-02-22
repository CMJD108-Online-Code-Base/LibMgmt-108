import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import EditBook from './EditBook';
import AddBook from './AddBook';
import { AddBookData, UpdateBook, GetBooks, DeleteBook } from '../../service/Books/BookData'

export function BookConsole(){

  interface Book {
    bookId:string;
    bookName:string;
    author:string;
    edition:string;
    publisher:string;
    isbn:string;
    price:number
    totalQty:number;
    avilableQty:number;
    lastUpdateDate:string;
    lastUpdateTime:string;
  }

  const [bookData,setBookData] = useState<Book[]>([])
  const [selectedRow,SetSelectedRow] = useState<Book |null>(null)
  const [showEditBookForm,setShowEditBookForm] = useState(false) // handle show the edit book form
  const [showAddBookForm,setShowAddBookForm] = useState(false) // handle show the add book form

   //add useEffect to load table data
   useEffect(()=>{
     const laodData = async () =>{
        const bookDetails = await GetBooks()
        console.log(bookDetails)
        setBookData(bookDetails)
     };
     laodData();
   },[]) 

   const tHeads: string [] = [
      "Book Id",
      "Name",
      "Author",
      "Edition",
      "Publisher",
      "ISBN",
      "Price",
      "Total Qty",
      "Avilable Qty",
      "Last Update Date",
      "Last Update Time",
      "Action"
   ];
   //handle edit function
   const handleEdit = (row : Book) =>{
     console.log("handle Edit",row)
     SetSelectedRow(row)
     setShowEditBookForm(true)
   }

   const handleClose = () =>  setShowEditBookForm(false);
   const handleUpdate = (updatedBook : Book) => {
     const updatedBooks = bookData.map((book) =>
        book.bookId === updatedBook.bookId ? updatedBook : book
     );
     setBookData(updatedBooks)
   }
   //handle delete
   const handleDelete = async (bookId:string) =>{
    try{
      await DeleteBook(bookId)
      setBookData(bookData.filter((book)=> book.bookId !== bookId)) 
    }catch(err){
      console.error("Delete book failed with ",err)
    } 
  
   }
   const handleAdd = (newBook :Book) =>{
    setBookData((prevData) => [...prevData,newBook])
   }

    return (
<>
<div className="d-flex justify-content-end p-3">
  <Button variant="outline-primary" onClick={() => setShowAddBookForm(true)}>Add</Button>  
</div>
    <Table striped bordered hover>
      <thead>
        <tr>
            {tHeads.map((headings) =>(
                <th>{headings}</th>
            ))}
        </tr>
      </thead>
      <tbody>
              {bookData.map((row)=> (
                   <tr key={row.bookId}>
                   {Object.values(row).map((cell,index) =>(
                     <td key={index}>{cell}</td>
                   ))}
                   <td>
                     <div className="d-flex gap-2">
                          <Button variant="outline-success" onClick={() =>  handleEdit(row)}>Edit</Button>  
                          <Button variant="outline-danger" onClick={() => handleDelete(row.bookId)}>Delete</Button>  
                    </div>
                   </td>
                    
                  </tr>  
              ))}
      </tbody>
    </Table>
    <EditBook
    show = {showEditBookForm}
    selectedRow = {selectedRow}
    handleClose = {handleClose}
    handleUpdate = {handleUpdate}
    updateBooks = {UpdateBook}
    />
    <AddBook
      show={showAddBookForm}
      handleOnClose={() => setShowAddBookForm(false)} //pass the function as prop
      handleAdd = {handleAdd}
      addBook={AddBookData}
    />
</>
    )
}