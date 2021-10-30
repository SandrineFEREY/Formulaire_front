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
      const response = await axios.post("http://localhost:3000/", data);
      console.log(response);
      if (response.status !== 200) {
        alert("Erreur: Le formulaire n'a pas été envoyé.");
      } else {
        console.log("Votre formulaire a bien été envoyé !");
      }
    });
});
