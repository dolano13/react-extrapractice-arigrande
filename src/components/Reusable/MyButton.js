import React from 'react';
import Button from'@material-ui/core/Button';
import TicketIcon from '../../images/icons/ticket.png';
import { yellow } from '@material-ui/core/colors';

const MyButton = (props) => {
  return (
    <div>
      <Button href={props.link} variant='contained' size='small' style={{background:props.bck, color:props.color}}>
        <img src={TicketIcon} className="iconImage" alt="icon_button"/>
        {props.text}
      </Button>
    </div>
  );
};

export default MyButton;