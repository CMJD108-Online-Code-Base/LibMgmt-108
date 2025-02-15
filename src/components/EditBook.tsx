import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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

interface BookEditProps{
    show: boolean;
    selectedRow : Book | null;
    handleClose: () => void;
    handleUpdate:(updatedBook: Book) => void
}

function EditBook({show,selectedRow,handleClose,handleUpdate} : BookEditProps) {
  return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default EditBook;