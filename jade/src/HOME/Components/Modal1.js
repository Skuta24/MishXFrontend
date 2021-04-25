import React, { useState } from 'react';
import Modal from'./Modal1'
import Students from '../Home/Components/img/Students.png';

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  
  export default function  App() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>REGISTER | LOGIN</button>
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}> 
        <img className="Students" src= { Students } alt='Students'/>'
          STUDENTS
        </Modal>
      </div>
      </>
    )
  }