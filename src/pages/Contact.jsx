import React from "react";
import "./Contact.scss";

function Contact() {
  const mailing = () => {
    let subject = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let mailToLink =
      "mailto:tmunatsi3@gmail.com?subject=" + subject + "&body=" + body;

    console.log(mailToLink);
    window.open(mailToLink);
  };

  // let subject = 55;
  // let body = "help";

  //document.write('<a href="' + loc + '">Google</a>');

  return (
    <div className="contactPage">
      <h1>
        <span className="main-heading">Contact Me</span>
      </h1>
      <form>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Your subject.."
        />

        <label htmlFor="body">Message</label>
        <textarea
          id="body"
          name="body"
          placeholder="Write something"
        ></textarea>

        <div className="submitButton" onClick={mailing}>
          Send Mail
        </div>
      </form>
    </div>
  );
}

export default Contact;
