import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions';

const useStyles = makeStyles({
    container: {
        padding: 16
    },
    checkbox: {
        color: 'rgba(119,221,119)',
        fill: 'rgba(119,221,119)',
    },
    listitem: {
        boxShadow: "0px 4px 25px 3px rgba( 155, 164, 193, .4 )",
        borderRadius: '25px',
        marginBottom: '2%',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'rgba(33,150,243)',
            opacity: 1,
            color: 'white',
        }
    }
});

const CustomColorCheckbox = withStyles({
    root: {
      color: "#13c552",
      marginRight: '2%',
      "&$checked": {
        color: "#13c552"
      }
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />);

function TodoList({ todoList, setTitle, setItem, setEdit, deleteItem }) {
    const classes = useStyles();

    const handleEdit = (item) => {
        setTitle(item.value);
        setEdit();
        setItem(item);
    }

    const handleDelete = (item) => {
        setItem(item);
        deleteItem();
    }
    return (
        <Container className={classes.container} maxWidth="md">
            {!todoList.length
                ?
                <Typography variant="h5" color="black"></Typography>
                :
                (<List>
                    {todoList.map(item => {
                        return (
                            <ListItem className={classes.listitem} key={item.id} button>
                                <CustomColorCheckbox/>
                                <ListItemText primary={item.value} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton style={{color: 'rgba(255,105,97)'}} edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>)
            }
        </Container>
    )

}
const mapStateToProps = (state) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setItem: (item) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);