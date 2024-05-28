import React, {useRef, useState} from 'react'
import classes from "./Form.module.css"
import emailjs from "@emailjs/browser";


const Response = () =>{
  return(
    <p>Thank you! Your message has been sent successfuly</p>
  );
}

const Form = () => {
  const[response, showResponse] = useState (false, true)
  const form = useRef()
  const sendEmail = (e) => {e.preventDefault();

    emailjs.sendForm("service_zrdzd7r", "template_69g0ged", form.current, "4zTsbBQiiap6TyhjZ")
    .then(
    (response) => {
      console.log("response.text")
      console.log("Thank you! Your message has been sent successfuly.")
    },
    (error) => {
      console.log(error.text);
      console.log("Message not sent")
    }

    );

  form.current.reset();
  showResponse(true);
};

  setTimeout(() => { showResponse(false); }, 5000);
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
        <div className={classes.innerText}>
            <h2>Get In Touch To See How We Can Help.</h2>
            </div>
            <div className={classes.innerForm}>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="full_name" placeholder="FullName"/><br/>
                    <input type="email" name="email" placeholder="Email Address "/><br/>
                    <input type="phone number" name="phone" placeholder="Phone Number"/><br/>
                    <input type="message" name="message" className={classes.textArea} placeholder="Message"></input><br/>
                    <button>Send Message</button>
                    <div className={classes.row}>{response ? <Response/> : null }</div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form
