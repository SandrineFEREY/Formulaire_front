document.addEventListener("DOMContentLoaded", () => {
  console.log("page chargée !!");

  document
    .getElementById("contact-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      console.log(data);
      // const response = await axios.post("https://702d7b55.ngrok.io", data);
      // console.log(response);
    });
});
