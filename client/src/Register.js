//jshint esversion:6
import Input from './Form-elements/Input.js';
import Select from './Form-elements/Select.js';
function Register() {
  return (
    <div>
      <div style={{textAlign:"Center",fontSize:"48px"}}>Register</div>
        <form>
            <Input name="Username" />
            <Input name="Password" type="Password"/>
            <Select name="User Type" options={['NGO','Donor']} />
            <div style={{padding:"8px",textAlign:"center",padding:"16px"}}>
              <a href="#" className="link-line" style={{color:"#000"}}>Existing User? Log in!</a>
            </div>
            <div className="input" style={{margin:"12px"}}>
              <button className="btn btn-dark" style={{margin:"0 auto"}}>Register</button>
            </div>
        </form>
    </div>
  );
}

export default Register;
