import React,{Component} from "react";
import "../index.css"

export default class AuthForm extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      username:"",
      password:"",
      profileImageUrl:""
    }
  }




handleChange=e=>{
  this.setState({
    [e.target.name]:e.target.value
  })
  console.log(e.target.value);
}

handleSubmit=e=>{
  e.preventDefault();
  const authType=this.props.signUp?"signup":"signin";
  this.props.onAuth(authType,this.state).then(()=>{
   console.log("LOGGED IN");

  })
}


render(){
const {email,username,password,profileImageUrl}=this.state;
const {heading,buttonText,signUp}=this.props;
return (
<div className="signup" >
<div className="row  justify-content-md-center text-center " >
  <div  className="col ">
     <form onSubmit={this.handleSubmit}>
          <h2>
             {heading}
          </h2>
          <label htmlFor="email">
            Email:
          </label>
           <input className="form-control"
             id="email"
             name="email"
             value={email}
             onChange={this.handleChange}
             type="text"
            />
           <label htmlFor="password">
              Password:
            </label>
             <input className="form-control"
               id="password"
               name="password"
               onChange={this.handleChange}
               type="password"
              />
            {signUp && (
               <div>

                 <label htmlFor="username">
                   Username:
                 </label>
                  <input className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    type="text"
                   />
                 <label htmlFor="image-url">
                     Image Url::
                   </label>
                    <input className="form-control"
                      id="image-url"
                      name="profileImageUrl"
                      onChange={this.handleChange}
                      type="text"
                      value={profileImageUrl}
                     />


               </div>


            )}
            <button type="submit" className="btn btn-warning  " style={{margin:"1rem"}}>
            {buttonText}
            </button>

     </form>


  </div>

</div>

</div>


)

}

}
