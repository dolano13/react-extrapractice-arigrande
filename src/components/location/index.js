import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14370.687265925053!2d-80.186969!3d25.7814014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13ad0552284f5b6c!2sAmericanAirlines+Arena!5e0!3m2!1sen!2sus!4v1558446834360!5m2!1sen!2sus" 
      width="100%" 
      height="500px" 
      frameBorder="0" 
      allowFullScreen></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
