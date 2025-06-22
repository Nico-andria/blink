function sendMail() {
  const params = {
    email: document.querySelector("email").value,
    subject: document.querySelector("subject").value,
    message: document.querySelector("message").value,
  };
  emailjs
    .send("service_kx9552o", "template_deagwpn", params)
    .then(console.log(params), alert("Email Sent!"))
    .catch((error) => {
      console.log("Error sending email", error);
      alert("Failed to send email. Please try again");
    });
}
