import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DialogContentText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: '100%'
  },
}));

export default function CreateBoard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">Create Retro Board</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Create New Retro Board</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Select a kind of retrospective board topic.
            </DialogContentText>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-dialog-select-label">Select a board</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={age}
                    onChange={handleChange}
                    input={<Input />}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Went Well, To Improve, Action Items</MenuItem>
                    <MenuItem value={2}>Happy, Sad, Mad</MenuItem>
                    <MenuItem value={3}>Start, Stop, Continue</MenuItem>
                </Select>
                </FormControl>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Create
          </Button>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
