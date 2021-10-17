import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

function AddMovie({add}) {
    const [newMovie,setNewMovie]=useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange =(event) =>{
    let  {name,value}=event.target;
        setNewMovie(el=>({...el,[name]:value}));
    }

    return (
    <>
        <Button    style={{color:"black" , backgroundColor:"greenyellow" }}
         variant="primary" onClick={handleShow}>
        Add Movie
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>title :</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display:'flex', flexDirection:'column'}} >
          title :<input name='title' onChange={handleChange} />
          year :<input name='year' onChange={handleChange} />
          poster :<input name='poster' onChange={handleChange} />
          rate :<input name='rate' onChange={handleChange}/>
          </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{add(newMovie);handleClose()}}>
            Save
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
  }


export default AddMovie
