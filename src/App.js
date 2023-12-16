import React, { useState } from 'react';
import Header from './component/header'
import Footer from './component/footer'
import CreateNote from './component/createnote';
import Note from './component/note';

const App = () =>{
  const[note,setNote] = useState([])
  const addnote = (items) =>{
    setNote((prevalue)=>{
      return [...prevalue,items];
    })
  }

  const deletenote = (id) =>{
    setNote((oldnotes)=>
       oldnotes.filter((currData,index)=>{
           return id!==index;
       })
    )
  }

  return(
    <>
     <Header/>
     <CreateNote passNote={addnote}/>
     {note.map((val,index)=>{
      return <Note key={index} id={index} title={val.title} content={val.content} delete={deletenote}/>
     })}
     <Footer/>
    </>
  );
}

export default App;