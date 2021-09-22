import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 40,
    },
    appbar: {
        margin: 'auto',
        marginTop: '2%',
        borderRadius: "40px",
        backgroundColor: 'rgba(33,150,243)',
        boxShadow: "0px 2px 15px 5px rgba( 155, 164, 193, .8 )",
        width: '90%',
        display: 'flex',
        flexGrow: 1,
        
    },
    heading: {
        margin: "auto",
        textAlign: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ].join(','),
        
    },
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} variant="h4" align="center">ToDoIt</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;