import React from "react";
import styles from './styles.module.css'; // Import custom styles

const formspreeUrl = "https://formspree.io/f/mgejdqgl";

export default function ContactForm() {
  const [isValidated, setIsValidated] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [danger, setDanger] = React.useState(false);
  const [dangerMessage, setDangerMessage] = React.useState("");
  const [formErrors, setFormErrors] = React.useState({ name: "", email: "", message: "" });

  async function postData(data) {
    const response = await fetch(formspreeUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, email, message } = form.elements;
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (name.value.trim() === "") {
      errors.name = "Name must be at least one character.";
      isValid = false;
    }
    if (!email.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
      errors.email = "Please enter a valid email.";
      isValid = false;
    }
    if (message.value.trim() === "") {
      errors.message = "Please provide a valid message.";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
      setIsValidated(true);
      return;
    }

    setSuccess(false);
    setDanger(false);
    setDangerMessage("");
    setIsValidated(false);

    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    setIsProcessing(true);
    try {
      const response = await postData(data);
      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText}, check formspreeUrl`
        );
      }
      setSuccess(true);
      form.reset();
      setFormErrors({ name: "", email: "", message: "" }); // Clear errors on success
    } catch (error) {
      setDangerMessage(error.message);
      setDanger(true);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className={styles.contactFormContainer}>
      <form
        noValidate
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className={styles.formControl}
          />
          {isValidated && formErrors.name && (
            <div className={styles.feedback}>
              <span>{formErrors.name}</span>
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            placeholder="someone@something.com"
            required
            className={styles.formControl}
          />
          {isValidated && formErrors.email && (
            <div className={styles.feedback}>
              <span>{formErrors.email}</span>
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            required
            className={styles.formControl}
          ></textarea>
          {isValidated && formErrors.message && (
            <div className={styles.feedback}>
              <span>{formErrors.message}</span>
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <button
            type="submit"
            disabled={isProcessing}
            className={styles.submitButton}
          >
            Submit {isProcessing && <span className={styles.spinner}></span>}
          </button>
        </div>
        {success && (
          <div className={styles.alertSuccess}>
            <strong>Success!</strong> We will contact you soon.
          </div>
        )}
        {danger && (
          <div className={styles.alertDanger}>
            <strong>Error:</strong> {dangerMessage}
          </div>
        )}
        {!formspreeUrl && (
          <div className={styles.alertDanger}>
            <strong>Error:</strong> You must provide a valid formspree url in data.js
          </div>
        )}
      </form>
    </div>
  );
}
