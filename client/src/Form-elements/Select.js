//jshint esversion:6
function Select(props) {

const options=[];
  if(props.options!==undefined){
  for(let i=0;i<props.options.length;i++){
      options.push(<option key={props.options[i]} value={props.options[i]}>{props.options[i]}</option>);
  }}

  return (
      <div className="input">
          <label for={props.name}>{props.name}</label>
          <select id={props.name}>
            {options}
          </select>
        </div>
  );
}

export default Select;
