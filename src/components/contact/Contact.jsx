import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  /*====== TEMPLATE EMAILJS ========*/
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_y728mlr', //Service ID
        'template_mt0qckn', //Template ID
        form.current,
        '_nNeg05ZPRwRZFghx' //Public Key
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    /*====== END OF TEMPLATE EMAILJS ========*/
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>exemple@gmail.com</h5>
            <a href="mailto:exemple@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kalblitz</h5>
            <a href="https://m.me/exemple" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+330687551287</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+330687551287"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* EN OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
