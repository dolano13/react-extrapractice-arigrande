import React from 'react';
import calendar_icon from '../../images/icons/calendar.png';
import location_icon from '../../images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
        <Zoom duration={500}>
          <div className='vn_item'>
            <div className='vn_outer'>
              <div className='vn_inner'>
                <div className='vn_icon_square bck_red'></div>
                <div className='vn_icon' style={{
                  background:`url(${calendar_icon})`}}>
                </div>
                <div className='vn_title'> Event Date & Time</div>
                <div className='vn_description'>June 1, 2019 <br/> @ 8:00pm</div>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom duration={500} delay={500}>
          <div className='vn_item'>
            <div className='vn_outer'>
              <div className='vn_inner'>
                <div className='vn_icon_square bck_yellow'></div>
                <div className='vn_icon' style={{
                  background:`url(${location_icon})`}}>
                </div>
                <div className='vn_title'> Event Location</div>
                <div className='vn_description'>American Airlines Arena <br/> Miami, FL</div>
              </div>
            </div>
          </div>
        </Zoom>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;