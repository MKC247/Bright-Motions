import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Socials = () => {
      return(
        <div className="socailsContainer">
            <InstagramIcon sx={{margin:'0.5rem', cursor: 'pointer'}} />
            <TwitterIcon sx={{margin:'0.5rem', cursor: 'pointer'}} />
            <FacebookOutlinedIcon sx={{margin:'0.5rem', cursor: 'pointer'}} />
        </div>
      )
}
export default Socials;