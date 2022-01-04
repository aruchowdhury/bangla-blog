import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email:</label>
        <input type="email" placeholder="newemail@email.com" />
        <label>Password:</label>
        <input type="password" />
        <button className="loginButton">LogIn</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Don't have account? Please Register.
        </Link>
      </button>
    </div>
  );
}
