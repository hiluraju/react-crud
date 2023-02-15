import { Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Missing = ({title}) => {
    return (
        <>
            <Typography variant='h4' className='fwb mb2'>{title}</Typography>
            <Button variant='contained' color='error'><Link to="/" className='tdn fwb white'>GO BACK TO HOMEPAGE</Link></Button>
        </>
    );
  
};

Missing.defaultProps = {
    title : 'PAGE NOT FOUND'
};



export default Missing;