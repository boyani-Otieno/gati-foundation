import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../images/full-team.jpeg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_v41ile5",
        "template_rbzm1tk",
        form.current,
        {
          publicKey: "PXsguSKj47C94MnW6",
        }
      )
      .then(
        () => {
          setStatus(
            "Thank you! Your message has been sent successfully."
          );

          setSending(false);

          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);

          setStatus(
            "Something went wrong. Please try again."
          );

          setSending(false);
        }
      );
  };

  return (
    <>
      <section className="contact mb">

        <Back
          name="Contact Us"
          title="Get Help & Friendly Support"
          cover={img}
        />

        <div className="container">

          <form
            ref={form}
            className="shadow"
            onSubmit={sendEmail}
          >

            <h4>Fillup The Form</h4>

            <br />

            <div>

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write your message..."
              required
            ></textarea>

            <button
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit Request"}
            </button>

            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </section>
    </>
  );
};

export default Contact;