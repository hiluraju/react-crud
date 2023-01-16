import { Button,ButtonGroup } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ButtonGroup variant='contained' color='secondary'>
            <Button><Link to="/login" className='tdn fwb white'> DASHBOARD </Link></Button>
            <Button><Link to="/admin" className='tdn fwb white'> ADMIN PANEL </Link></Button>
            <Button><Link to="/" className='tdn fwb white'> LOGOUT </Link></Button>
    </ButtonGroup>
  )
}

export default Nav