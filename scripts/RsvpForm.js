document.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  if (form.id === "secret-code-form") {
    event.preventDefault();

    const secretCode = new FormData(form).get("secretCode");
    const errorMessage = document.getElementById("secret-code-error");

    if (secretCode !== "love mas") {
      errorMessage.hidden = false;
      return;
    }

    form.hidden = true;
    document.getElementById("rsvp-form").hidden = false;
    document.getElementById("RsvpHeader").textContent = "RSVP";
    const rsvpLink = document.querySelector('a[href="#RsvpHeader"]');

    if (rsvpLink) {
      rsvpLink.textContent = "RSVP";
    }
    return;
  }

  if (form.id !== "rsvp-form") {
    return;
  }

  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name").trim();
  const bringingPlusOne = formData.get("plusOne") === "yes";
  const recipients = "pageturnertradingco@outlook.com,3lizajayne@gmail.com";
  const subject = `RSVP from ${name}`;
  const bodyLines = [`Hello! My name is ${name}, and I am responding to the wedding invitation.`];

  bodyLines.push(bringingPlusOne
    ? "I will be bringing a plus one."
    : "I will not be bringing a plus one.");

  window.location.href = `mailto:${encodeURIComponent(recipients)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n\n"))}`;
});
