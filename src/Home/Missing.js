import { Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Missing = () => {
  return (
    <>
    <Typography variant='h4' className='fwb mb2'>PAGE NOT FOUND</Typography>
    <Button variant='contained' color='error'><Link to="/" className='tdn fwb white'>GO BACK TO HOMEPAGE </Link></Button>
    </>
  )
}

export default Missing