import React, { Component } from 'react';
import MyButton from '../Reusable/MyButton';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {
  state={
    prices:[100,150,250],
    positions:['Balcony', 'Medium', 'Floor'],
    desc:["Thought I'd end up with Sean but he wasn't a match Wrote some songs about Ricky Now I listen and laugh", 
          "Even almost got married And for Pete, I'm so thankful Wish I could say, Thank you to Malcolm'Cause he was an ange",
          "Thank you, next"],
    linkto:['https://ariangrande.com','https://www.youtube.com/watch?v=QYh6mYIJG2Y', 'https://www.youtube.com/watch?v=QYh6mYIJG2Y'],
    delay:[500,0,500]
  }
  showBoxes=()=>(
    this.state.prices.map((box,i)=>(
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>${this.state.positions[i]}</span>
            </div>
            <div className='pricing_description'>
              {this.state.desc[i]}
            </div>
            <div className='pricing_buttons'>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='white'
                link={this.state.linkto[i]}/>
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )
  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
            <div className='pricing_wrapper'>
            {this.showBoxes()}
            </div> 
        </div>
        
      </div>
    );
  }
}

export default Pricing;