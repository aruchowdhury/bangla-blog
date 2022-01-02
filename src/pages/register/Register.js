import "./register.css";

export default function Login() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username:</label>
        <input type="text" placeholder="Your username" />
        <label>Email:</label>
        <input type="email" placeholder="newemail@email.com" />
        <label>Password:</label>
        <input type="password" />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        Already have an account? Please Login.
      </button>
    </div>
  );
}
