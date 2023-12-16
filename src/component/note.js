import React from 'react';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Note = (props) =>{
    const deleteitem = () =>{
       props.delete(props.id);
    }
    return(
      <>
       <div className='note'>
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <Button onClick={deleteitem} className='btn'><DeleteOutlineIcon className='deleteIcon' /></Button>
       </div>
      </>
    );
}

export default Note;