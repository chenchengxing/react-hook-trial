import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const LoginForm = ({
  onLoginSubmit,
}) => {
  const [ value, setValue ] = useState('')

  const handleClick = () => {
    onLoginSubmit(value)
  }
  const handleChange = e => {
    setValue(e.target.value)
  }
  
  return <div>
    <TextField 
      placeholder='username'
      value={value}
      onChange={handleChange}
    />
    <Button onClick={handleClick}>
      Submit
    </Button>
    
  </div>
}

export default LoginForm
