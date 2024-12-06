import React from 'react'
import { useState } from 'react'

function Todoform() {

    const [text,setText] = useState("hello")

    
    

    const onSubmit=()=>{

    }
    const onInputchnage=(e)=>{
        setText(e.target.value)
    
    }
  return (
    <form className='form' onSubmit={onSubmit}>
        <input
        placeholder='Enter new Todo...'
        className='input'
        onChange={onInputchnage}
        />
    </form>
  )
}

export default Todoform