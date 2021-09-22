import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Zoom from '@material-ui/core/Zoom';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions';
const useStyles = makeStyles({
    root: {
        marginTop: '2%',
        marginBottom: '1%',
        borderRadius: '25px',
        padding: '3%',
        width: '90%',
        margin: 'auto',
        boxShadow: "0px 4px 15px 3px rgba( 155, 164, 193, .8 )",
    },
    button: {
        marginTop: 16,
        color: 'white',
        borderRadius: '20px',
        backgroundColor: 'rgba(33,150,243)',
        '&:hover': {
            backgroundColor: 'rgba(0,105,192)',
            opacity: 1,
        }
    },
});

const Form = ({ title, setTitle, addItem, editItem, edit, error, setError }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        const title = event.target.value;
        
        setTitle(title);
        if(title.length === 0){
            setError("Add an activity!");
        }else{
            setError("");
        }
    }

    const handleClick = () => {
        if(title.length === 0){
            setError("Come on, add something already");
            return;
        }
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }
    return (
        <Container maxWidth="sm" className={classes.root}>
            <Grid container alignItems="center">
                <Grid style={{backgroundColor: 'white'}} item xs={12}>
                    <TextField value={title} onChange={handleChange}
                    error={!!error} helperText={error} fullWidth label="Add your tasks here!" multiline variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.button} variant="contained" onClick={handleClick}>
                        {edit ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: () => dispatch(actionTypes.editItem()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);