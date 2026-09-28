document.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement) || form.id !== "rsvp-form") {
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
