import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  const scrollToElement =(Element) =>{
      scroller.scrollTo(Element, {
        duration:1000, 
        delay: 100,
        smooth:true,
        offset: -100
      });
    props.onClose(false)
  }
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={()=> props.onClose(false)}>
         <List compnent="nav">
            <ListItem button onClick={()=>scrollToElement('Countdown')}>
              Event Countdown
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('Venue')}>
              Venue Info
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('Highlights')}>
            Highlights
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('Price')}>
              Pricing
            </ListItem>
            <ListItem button onClick={()=>scrollToElement('Map')}>
              Location
            </ListItem>
          </List> 
      </Drawer>
    </div>
  );
};

export default SideDrawer;
