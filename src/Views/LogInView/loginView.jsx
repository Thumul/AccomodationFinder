//CSS Imports
import "./loginView.scss";

//React Imports

//Component Imports
import LogIN from "../../Components/Login/login";

//Assets

const LogInView = (props) => {
  return (
    <div className="login-view">
      <div className="wrapper">
        <LogIN />
      </div>
    </div>
  );
};

export default LogInView;
