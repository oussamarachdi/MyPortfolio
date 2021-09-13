import React from 'react'
import emailjs from 'emailjs-com'

const ContactMe = () => {


    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ieam62n', 'template_u35awd7', e.target, 'user_kwrq7JnVAtBC5v3JcqX1A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return (
        <form className="form" onSubmit={sendEmail}>
            <div className="mb-3">
    <label for="NameInput" className="form-label">First Name</label>
    <input type="text" className="form-control" id="NameInput" placeholder="Name" name="name"/>
    </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Adress" name="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
   <div className="mb-3">
    <label for="subjectInput" className="form-label">Subject</label>
    <input type="text" className="form-control" id="subjectInput" placeholder="Subject" name="email" name='subject'/>
  </div>
  <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} name="message"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>

  <button className="btn-form" type="submit">Submit</button>
</form>
    )
}

export default ContactMe
