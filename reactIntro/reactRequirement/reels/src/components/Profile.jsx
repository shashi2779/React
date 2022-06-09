import React, { useState,useContext} from 'react'
import "./profile.css"
import { AuthContext } from "../context/AuthContext";

function Profile() {
  let contextObj = useContext(AuthContext);
  let [loading, setLoading] = useState("");
  
  return (
    <>
      {contextObj == null ? <div>Need to login</div> :
        <div>logged in user is {contextObj.uid}</div>

      // loading == true ? <div>getting data</div> :
      // <>
      //   <div className="nav"></div>
      //   <div className="main">
      //     <img src="https://i.pinimg.com/474x/98/ab/79/98ab7926ab0b5c76fa76330c60047207.jpg" alt="" className="pImg" />
      //     <div className="details">
      //       <div className="content">Name:xyz</div>
      //       <div className="content">No of Posts:<span>Posts</span></div>
      //       <div className="content">Email:<span>email.com</span></div>
      //     </div>
      //   </div>
      // </>
  }
    </>
  )
}

export default Profile