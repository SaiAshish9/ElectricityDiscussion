import  React from "react";

import {Link} from "react-router-dom"

import MessageTimeLine from "./MessageTimeline"

const Homepage=({currentUser})=>{
 if(!currentUser.isAuthenticated){

   return(
  <div className="home-hero">
  <h1 > Electricity Discusssion App</h1>
  <h4>We will make electricity so cheap that only the rich will burn candles.
</h4>
  <Link to="/signup" className="btn btn-warning ">
Sign up here...
  </Link>
</div>
)
}

return (
  <div>
   <MessageTimeLine profileImageUrl={currentUser.user.profileImageUrl}
      username={currentUser.user.username}/>
  </div>
)
}

export default Homepage;
