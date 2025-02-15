import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { GetBooks } from '../service/Books/GetBooks';
import EditBook from './EditBook';

export function BookConsole(){

  interface Book {
    bookId:string;
    booName:string;
    author:string;
    edition:string;
    publisher:string;
    isbn:string;
    price:number
    totalQty:number;
    avilableQty:string;
    lastUpdateDate:string;
    lastUpdateTime:string;
  }

  const [bookData,setBookData] = useState<Book[]>([])
  const [selectedRow,SetSelectedRow] = useState<Book |null>(null)
  const [showEditBookForm,SetShowEditBookForm] = useState(false) // handle shwo the edit book form

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
     SetShowEditBookForm(true)
   }

   const handleClose = () =>  SetShowEditBookForm(false);
   const handleUpdate = (updatedBook : Book) => {
      alert("Updated book")
      console.log("Updated book",updatedBook)
   }

    return (
<>
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
                          <Button variant="outline-danger">Delete</Button>  
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
    />
</>
    )
}