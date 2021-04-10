//jshint esversion:6
import Input from './Form-elements/Input.js';
import Select from './Form-elements/Select.js';
function Login() {
  return (
    <div>
      <div style={{textAlign:"Center",fontSize:"48px"}}>Login</div>
        <form>
            <Input name="Username" />
            <Input name="Password" type="Password"/>
            <Select name="User Type" options={['NGO','Donor']} />
            <div style={{padding:"8px",textAlign:"center",padding:"16px"}}>
              <a href="#" className="link-line">New to our community? Sign up!</a>
            </div>
            <div className="input" style={{margin:"12px"}}>
              <button className="btn btn-color" style={{margin:"0 auto"}}>Login</button>
            </div>
        </form>
    </div>
  );
}

export default Login;
