//jshint esversion:6
import img from './main.png';
import Login from './Login.js';
import Register from './Register.js';

function App() {
  return (
    <div>
        <div className="header">
          <span className="logo">Untainted</span>
          <a href="#" className="btn btn-outline" style={{float:"right"}}>Login</a>
        </div>
        <div className="main">
          <div className="slogan">
            <div className="slogan-text">
              <div>Let your <span style={{color:"#FFD700"}}>donations</span> reach the right hands</div>
              <div><a href="#" className="btn btn-dark">Register Now!</a></div>
            </div>
            <div className="image">
              <img src={img} alt=""/>
            </div>
          </div>
        </div>
        <div className="About">
          <div className="heading">About Us</div>
          <div className="aboutus">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="Form">
          <Login />
        </div>
        <div className="Form" style={{backgroundColor:"#ffe180"}}>
          <Register />
        </div>
        <div style={{fontWeight:"100",padding:"16px",textAlign:"Center"}}>
          <a href="https://github.com/Aryan147/Untainted" target="_blank" className="link-line">Created by team JigFixtures</a>
        </div>
    </div>
  );
}

export default App;
