import React, {useState} from "react";
import "../../../styles/Footer/Contact/contact.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/935c79d0-3786-11ed-8ff6-d1ee553f3964";

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };

    if (submitted) {
        return (
          <>
            <div id = "thankyou-box">
                <div>Thank you!</div>
                <div>We'll be in touch soon.</div>
            </div>
          </>
        );
      }

    return (
        <>
            <div id = "contact-section">
                <div id = "contact-form">
                    <h1> Lets get in touch. </h1>
                    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                        <div><input type="text" placeholder="Your name" name="name" required /></div>
                        <div><input type="email" placeholder="Email" name="email" required /></div>
                        <div><textarea placeholder="Your message" name="message" rows={10} required /></div>
                        <div><button type="submit">Send</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;