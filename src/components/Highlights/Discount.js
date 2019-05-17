import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Reusable/MyButton';

class Discount extends Component {
  state={
    discountStart:0,
    discountEnd:23,
  }
percentage=()=>{
  if(this.state.discountStart< this.state.discountEnd){
    this.setState({
      discountStart: this.state.discountStart + 1
    })
  }
}
componentDidUpdate() {
  setTimeout(()=>{
    this.percentage()
  },30)
}

  render() {
    return (
      <div className='center_wrapper'>
      <div className='discount_wrapper'>
    <Fade onReveal={()=>this.percentage()}>
        <div className='discount_percentage'>
          <span>{this.state.discountStart}%</span>
          <span>Off</span>
        </div>
    </Fade>
    <Slide>
        <div className='discount_description'>
          <h3>Purchase tickets by May 20th</h3>
          <p>You like my hair? Gee, thanks, just bought it
            I see it, I like it, I want it, I got it (Yeah)
            I want it, I got it, I want it, I got it
            I want it, I got it, I want it, I got it
            You like my hair? Gee, thanks, just bought it
            I see it, I like it, I want it, I got it (Yeah)</p>
            <MyButton text='Purchase Tickets' bck='#ffa800' color='white' link='https://google.com'/>
        </div>
      </Slide>
      </div> 

    </div>
    );
  }
}

export default Discount;