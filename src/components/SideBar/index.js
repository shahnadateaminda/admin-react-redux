import React, { useState, useEffect } from 'react';
import { ListItem, Collapse, List, makeStyles, MenuList } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import ListIcon from '@material-ui/icons/List';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ReorderIcon from '@material-ui/icons/Reorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
 
  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    //  '& .Mui-selected': {
    //         backgroundColor: theme.palette.primary.main,
    //         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //             color: theme.palette.common.white,
    //         },
    //         '& .MuiListItemIcon-root': {
    //             '& .MuiIconButton-root': {
    //                 color: theme.palette.common.white,
    //             }
    //         }
    //     },
  }
}));


const MainListItems = (props) => {
  const classes = useStyles();
  const [menu, setMenu] = useState([])
  const [open, setOpen] = React.useState(false);
  const [itemIndex, setitemIndex] = useState(-1)

  useEffect(() => {
    if (menu.length == 0) {
      setMenu(MenuList)
    }
  }, [menu])


  const SelectPath = (path,i) => {
    props.history.push(path)
    setitemIndex(i)
  }
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.list}>
      <ListItem button  
        selected={itemIndex ===0}
        onClick={() => SelectPath('/dashboard',0)} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText primary="Hubs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}
              selected={itemIndex ===1}
            onClick={() => SelectPath('/dashboard/hubs',1)}>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Hub list" />
          </ListItem>
          <ListItem button className={classes.nested}
            selected={itemIndex ===2}
            onClick={() => SelectPath('/dashboard/users',2)}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Users list" />
          </ListItem>
          <ListItem button className={classes.nested}
            selected={itemIndex ===3}
            onClick={() => SelectPath('/dashboard/orders',3)}>
            <ListItemIcon>
              <ReorderIcon />
            </ListItemIcon>
            <ListItemText primary="Order list" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button
        selected={itemIndex ===4}
        onClick={() => SelectPath('/dashboard/orders', 4)}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
      </ListItem>
     </List>
  )
}
export default MainListItems;