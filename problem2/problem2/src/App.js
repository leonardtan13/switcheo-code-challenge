import './App.css';
import TextField from '@material-ui/core/TextField'
import SubmitButton from './SubmitButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  FormField: {
    margin: '25px 0 25px 0'
  },
});

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <form className="TokenForm">
          <TextField className={classes.FormField} required label='ETH address' />
          <TextField className={classes.FormField}  required type='number' label='Amount to send' />
          <TextField className={classes.FormField}  required type='number' label='OTP authentication' />
          
          <SubmitButton title="SEND TOKENS"></SubmitButton>
      </form>
    </div>
  );
}

export default App;
