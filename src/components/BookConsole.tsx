import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { GetBooks } from '../service/Books/GetBooks';

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
                          <Button variant="outline-success">Edit</Button>  
                          <Button variant="outline-danger">Delete</Button>  
                    </div>
                   </td>
                    
                  </tr>  
              ))}
      </tbody>
    </Table>
</>
    )
}