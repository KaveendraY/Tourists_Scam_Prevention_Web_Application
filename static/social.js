function postMessage() {
    var message = document.getElementById("message").value;
    var container = document.getElementById("message-container");
    var newMessage = document.createElement("div");
    newMessage.innerHTML = message;
    container.appendChild(newMessage);
  }
  