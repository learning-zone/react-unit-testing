import React from 'react'
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';


const styles = () => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '20px',
  },
  title: {
    flexGrow: 1,
  },
});

const ButtonAppBar = (props) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' data-test='menu-icon'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} data-test='menu-title'>React Unit Testing with Jest and Enzyme</Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default withStyles(styles)(ButtonAppBar);