import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) =>{
  const[expand,setExpand] = useState(false);
  const[items,setItems] = useState({
    title: '',
    content: ''
  });

  const addevent = (event) =>{
    const{name,value} = event.target;
    setItems((prevalue)=>{
      return{
        ...prevalue,
        [name]: value
      }
    })
  }

  const addNote = () =>{
    props.passNote(items);
    setItems({
      title: '',
      content: ''
    });
  }

  const expandit = () =>{
    setExpand(true);
  }

    return(
        <>
          <div className='main_note'>
            <form>
              <input type='text' name='title' value={items.title} placeholder='Title' autoComplete='off' onChange={addevent} onClick={expandit}/>
              {expand? <textarea rows='' name='content' value={items.content} placeholder='Write Your Content' onChange={addevent}></textarea> : null}
            </form>
            <Button onClick={addNote}><AddIcon className='plus-sign' /></Button>
          </div>
        </>
    );
}

export default CreateNote;