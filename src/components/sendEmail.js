/** @format */

export const sendEmail = (name, userEmail, message) => {
  window.Email.send({
    SecureToken: process.env.REACT_APP_SMTP_KEY,
    To: process.env.REACT_APP_SMTP_USERNAME,
    From: process.env.REACT_APP_SMTP_USERNAME,
    Subject: "New message from your website",
    Body: `Name: ${name} <br/> Email: ${userEmail} <br/> Message: ${message}`,
  }).then((response) => {
    if (response === "OK") {
      alert(
        "Thank you for contacting us 😊😊! You will recieve a response shortly"
      );
    } else {
      alert(
        "There was an error sending your message 😢😢. Please try again later."
      );
    }
  });
};
