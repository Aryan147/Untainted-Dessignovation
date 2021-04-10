//jshint esversion:6
function Input(props) {
  return (
        <div className="input">
          <label for={props.name}>{props.name}</label>
          <input type={props.type} id={props.name} placeholder={"Enter "+props.name}/><br/>
        </div>
  );
}

export default Input;
