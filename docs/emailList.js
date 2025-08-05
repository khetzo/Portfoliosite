const form = document.getElementById("contactForm");
const formContainer = document.getElementById("Email-inTouch");
const emailListing = document.getElementById("EmailListing");


const messageListContainer = document.getElementById("messageListContainer");
const messageList = document.getElementById("messageList");
const responseMessage = document.getElementById("responseMessage");

let editingIndex = null;
const messages = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  if (editingIndex !== null) {
    // Update existing message
    messages[editingIndex] = { name, email, message };
    editingIndex = null;
  } else {
    // Add new message
    messages.push({ name, email, message });
  }

  renderMessages();
  form.reset();
  formContainer.style.display = "none";
  emailListing.style.display = "block";
  messageListContainer.style.display = "block";
  responseMessage.textContent = "Your email has been added to the list. You'll get a response soon.";
});

function renderMessages() {
  messageList.innerHTML = "";
  messages.forEach((msg, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="info"><strong>${msg.name}</strong> (${msg.email})</div>
        <div class="msg-content">${msg.message}</div>
        <span class="edit-btn" title="Edit">✏️</span>
      `;
    li.querySelector(".edit-btn").addEventListener("click", () => {
      editingIndex = index;
      form.name.value = msg.name;
      form.email.value = msg.email;
      form.message.value = msg.message;

      formContainer.style.display = "block";
      messageListContainer.style.display = "none";
      responseMessage.textContent = "";
    });
    messageList.appendChild(li);
  });
}