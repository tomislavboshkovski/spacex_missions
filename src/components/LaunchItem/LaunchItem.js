import React from 'react';
import Moment from 'react-moment';
import CustomLink from '../CustomLink';
import './style.css';

const LaunchItem = props => {
  return (
    <div className="grid-container">
      <div style={{ 
        backgroundImage: `url(${props.launch.links.flickr_images[0]})`, maxWidth:'345px',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%'
      }}>
        <h4 className="header" style={{color:'black', fontWeight:'bold'}}>{props.launch.mission_name}</h4>
        <p className="text" style={{backgroundColor:'grey', color:'black'}}>
          <Moment format="MMMM Do YYYY, h:mm:ss a">{props.launch.launch_date_local}</Moment>
        </p>
        <p className="text" style={{backgroundColor:'grey', color:'black'}}>Description: {props.launch.launch_site.site_name_long}</p>
        <CustomLink to={`/launch/${props.launch.id}`} label="Rocket Details" className="btn btn-primary"></CustomLink>
      </div>
    </div>
  )
}

export default LaunchItem;