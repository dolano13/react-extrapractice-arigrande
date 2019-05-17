import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={()=> props.onClose(false)}>
         <List compnent="nav">
            <ListItem button onClick={()=>console.log('featired')}>
              Event Countdown
            </ListItem>
            <ListItem button onClick={()=>console.log('featired')}>
              Venue Info
            </ListItem>
            <ListItem button onClick={()=>console.log('featired')}>
              Highlights
            </ListItem>
            <ListItem button onClick={()=>console.log('featired')}>
              Pricing
            </ListItem>
            <ListItem button onClick={()=>console.log('featired')}>
              Location
            </ListItem>
          </List> 
      </Drawer>
    </div>
  );
};

export default SideDrawer;
