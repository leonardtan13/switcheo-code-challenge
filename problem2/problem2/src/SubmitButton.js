import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    SubmitButton: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SubmitButton = ({title}) => {
    const classes = useStyles()
    const [clicked, setClicked] = useState(false)
    const [snackBarOpen, setSnackBarOpen] = useState(false)

    const handleClick = () => {
        setClicked(true)
        setTimeout( () => {
            setClicked(false)
            setSnackBarOpen(true)
        }, 1500)
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false)
    }

    return (
        <>
        <Button className={classes.SubmitButton} onClick={handleClick} disabled={clicked} variant="contained">
            {clicked ? <CircularProgress size={20} color="secondary" /> : title}
        </Button>
        <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success">
          Tokens sent!
        </Alert>
      </Snackbar>
        </>
    )
}

export default SubmitButton