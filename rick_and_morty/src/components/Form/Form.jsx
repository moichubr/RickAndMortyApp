import style from "./Form.module.css";
import LandingText from "../Landing/LandingText";
import React from "react";
import validate from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    event.preventDefault()
    // const property = event.target.name;
    // const value = event.target.value;

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  
  function handleSubmit (event) {
    event.preventDefault()
    login(userData)
  }

  return (
    <>
      <LandingText />

      <form className={style.form}>
        <div className={style.username}>
          <label className={style.label}>Username:</label>
          <input
            placeholder="hola@mail.com"
            className={style.input}
            value={userData.email}
            name="email"
            onChange={handleInputChange}
          />
          {errors.email ? <span className= {style.span}><b>{errors.email}</b></span> : null}
        </div>

        <div className={style.password}>
          <label className={style.label}>Password:</label>
          <input
            className={style.input}
            type="text"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
          />
          {errors.password ? <span className={style.span}><b>{errors.password}</b></span> : null}
        </div>

        <button className={style.login} type="submit" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </>
  );
};

export default Form;
