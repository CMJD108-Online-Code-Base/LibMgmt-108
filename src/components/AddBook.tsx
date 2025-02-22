import {Modal,Button,Form,FloatingLabel} from "react-bootstrap";
import { useState, useEffect } from "react";

interface Book {
  bookId: string;
  bookName: string;
  author: string;
  edition: string;
  publisher: string;
  isbn: string;
  price: number;
  totalQty: number;
  avilableQty: number;
  // lastUpdateDate: string;
  // lastUpdateTime: string;
}

// interface BookEditProps {
//   show: boolean;
//   selectedRow: Book | null;
//   handleClose: () => void;
//   handleUpdate: (updatedBook: Book) => void;
// }

function AddBook({
  show,
  handleOnClose,
  handleAdd,
  addBook
}: any) {
  //state management
  const [newBook,setNewBook] = useState<Book>({
    bookId: "",
    bookName: "",
    author: "",
    edition: "",
    publisher: "",
    isbn: "",
    price: 0,
    totalQty: 0,
    avilableQty : 0,
    // lastUpdateDate: "",
    // lastUpdateTime: ""
  });  

   // add book data from the form
   const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
        const { name ,value} = e.target;
        setNewBook((prev) => ({...prev,[name]: value}))  
      
      }
   //handle the add book process with the back-end
   const handleOnSubmit = async () =>{
       try{
        const newBookDetails = await addBook(newBook);
        handleAdd(newBookDetails)
        handleOnClose()
       }catch(err){
           console.error("Failed to update the book",err)
       }        
   }

  return (
    <Modal show={show} onHide={handleOnClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form */}
        <Form>

          <FloatingLabel controlId="floatingInput" label="Title"className="mb-3">
            <Form.Control 
            type="text" 
            name="bookName"
            value={newBook.bookName}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Author"className="mb-3">
            <Form.Control 
            type="text" 
            name="author"
            value={newBook.author}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Edition"className="mb-3">
            <Form.Control 
            type="text" 
            name="edition"
            value={newBook.edition}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Publisher"className="mb-3">
            <Form.Control 
            type="text" 
            name="publisher"
            value={newBook.publisher}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="ISBN"className="mb-3">
            <Form.Control 
            type="text" 
            name="isbn"
            value={newBook.isbn}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Price"className="mb-3">
            <Form.Control 
            type="number" 
            name="price"
            value={newBook.price}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Total Qty"className="mb-3">
            <Form.Control 
            type="number" 
            name="totalQty"
            value={newBook.totalQty}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Avl Qty"className="mb-3">
            <Form.Control 
            type="number" 
            name="avilableQty"
            value={newBook.avilableQty}
            onChange={handleOnChange}
            />
          </FloatingLabel>

          {/* <FloatingLabel controlId="floatingInput" label="Last Updated Date"className="mb-3">
            <Form.Control 
            type="text" 
            name="lastUpdateDate"
            value={newBook.lastUpdateDate}
            onChange={handleOnChange}
            />
          </FloatingLabel> */}

          {/* <FloatingLabel controlId="floatingInput" label="Last Updated time"className="mb-3">
            <Form.Control 
            type="text" 
            name="lastUpdateTime"
            value={newBook.lastUpdateTime}
            onChange={handleOnChange}
            />
          </FloatingLabel> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleOnClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOnSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBook;
