document.addEventListener("DOMContentLoaded", function () {
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  function addMessage(message, isSent, commaRep = false) {
    const messageElement = document.createElement("div");
    messageElement.className = isSent ? "sent" : "received";
    var messageWithLineBreaks;
    // Replace newline characters with <br> tags for line breaks
    if (commaRep) {
      message = message.replace(/,/g, "\n");
    }
    var messageWithLineBreaks = message.replace(/\n/g, "<br>");

    messageElement.innerHTML = messageWithLineBreaks;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
  }
  const name = "FixD";
  const orbit =
    "If you are having problems with your car, you've come to the right place. To get help, choose one of the following options: brakes, tyres, engine, door lock, window, GPS, oil, air conditioning, headlights, and tailights";

  function greet() {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
      greeting = `Good morning, I am ${name}, your digital mechanic.`;
    } else if (hour < 18) {
      greeting = `Good afternoon, I am ${name}, your digital mechanic.`;
    } else {
      greeting = `Good evening, I am ${name}, your digital mechanic.`;
    }
    addMessage(greeting, false);
  }

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
      addMessage(message, true);
      messageInput.value = "";
    }
  }

  function correctionMessage(options) {
    const message = `Choose one of these options: \n ${options}`;
    setTimeout(function () {
      addMessage(message, false, true);
    }, 1000);
  }
  function sendButtonClick() {
    sendUserInput();
    handleUserInput(userInput);
  }
  function inputKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendUserInput();
    }
  }

  // Function to handle sending user input
  function sendUserInput() {
    const userInput = messageInput.value;
    sendMessage();
    handleUserInput(userInput);
  }
  function handleUserInput(userInput) {
    handleCommand(userInput);
  }

  //#region Brake Handlers
  // Function to handle the "brakes" scenario
  var handleBrakes = function () {
    // Assuming you have an input field with the id "user-input"
    sendButton.removeEventListener("click", sendButtonClick);
    messageInput.removeEventListener("keydown", inputKeyDown);

    // Listen for user input and handle it when the user presses Enter

    messageInput.addEventListener("keydown", keydownListenerBrake);
    sendButton.addEventListener("click", clickListenerBrake);
  };
  function sendBrakesIssue() {
    const userInput = messageInput.value.toLowerCase();
    addMessage(userInput, true); // Display user's input in the chat as a sent message
    handleBrakesResponse(userInput);
    messageInput.value = ""; // Clear the input field
  }
  const keydownListenerBrake = function (event) {
    if (event.key === "Enter") {
      sendBrakesIssue();
    }
  };
  const clickListenerBrake = function () {
    if (messageInput.value !== "") {
      sendBrakesIssue();
    }
  };
  // Function to handle the user's response to the "brakes" scenario
  function handleBrakesResponse(userResponse) {
    switch (userResponse) {
      case "slows down too fast":
        setTimeout(function () {
          addMessage("Ok. You should probably replace your brake pad", false);
        }, 1000);

        sendButton.addEventListener("click", sendButtonClick);
        messageInput.addEventListener("keydown", inputKeyDown);
        messageInput.removeEventListener("keydown", keydownListenerBrake);
        sendButton.removeEventListener("click", clickListenerBrake);
        break;
      case "slows down too slow":
        setTimeout(function () {
          addMessage("Ok. You should probably change your brake pad", false);
        }, 1000);

        sendButton.addEventListener("click", sendButtonClick);
        messageInput.addEventListener("keydown", inputKeyDown);
        messageInput.removeEventListener("keydown", keydownListenerBrake);
        sendButton.removeEventListener("click", clickListenerBrake);

        break;
      case "doesn't slow down at all":
        setTimeout(function () {
          addMessage(
            "Ok. That seems very dangerous. I advise you contact a professional mechanic in your area, to deal with this problem. Your car may need to be towed to the location as driving it in that state is far too dangerous",
            false
          );
        }, 1000);

        sendButton.addEventListener("click", sendButtonClick);
        messageInput.addEventListener("keydown", inputKeyDown);
        messageInput.removeEventListener("keydown", keydownListenerBrake);
        sendButton.removeEventListener("click", clickListenerBrake);

        break;
      default:
        setTimeout(function () {
          addMessage(
            "Sorry, I don't understand that. Please try again.",
            false
          );
        }, 1000);

        correctionMessage(
          "slows down too fast, slows down too slow, doesn't slow down at all"
        ); // Simulate a delay before displaying the follow-up question
        break;
    }
    setTimeout(function () {
      addMessage("Do you have any other problems?", false);
    }, 1000);
  }
  //#endregion

  //#region Engine Handler
  var handleEngine = function () {
    // Assuming you have an input field with the id "user-input"
    sendButton.removeEventListener("click", sendButtonClick);
    messageInput.removeEventListener("keydown", inputKeyDown);

    // Listen for user input and handle it when the user presses Enter

    messageInput.addEventListener("keydown", keydownListenerEngine);
    sendButton.addEventListener("click", clickListenerEngine);
  };
  function sendEngineIssue() {
    const userInput = messageInput.value.toLowerCase();
    addMessage(userInput, true); // Display user's input in the chat as a sent message
    handleEngineResponse(userInput);
    messageInput.value = ""; // Clear the input field
  }
  const keydownListenerEngine = function (event) {
    if (event.key === "Enter") {
      sendEngineIssue();
    }
  };
  const clickListenerEngine = function () {
    if (messageInput.value !== "") {
      sendEngineIssue();
    }
  };
  // Function to handle the user's response to the "brakes" scenario
  function handleEngineResponse(userResponse) {
    switch (userResponse) {
      case "it stalls":
        setTimeout(function () {
          addMessage(
            "You should probably go to the real professional mechanic",
            false
          );
        }, 1000);

        sendButton.addEventListener("click", sendButtonClick);
        messageInput.addEventListener("keydown", inputKeyDown);
        messageInput.removeEventListener("keydown", keydownListenerEngine);
        sendButton.removeEventListener("click", clickListenerEngine);
        break;
      case "it is making a scary sound":
        setTimeout(function () {
          addMessage(
            "It may be that your belt is rusted, so please visit a professional mechanic",
            false
          );
        }, 1000);

        sendButton.addEventListener("click", sendButtonClick);
        messageInput.addEventListener("keydown", inputKeyDown);
        messageInput.removeEventListener("keydown", keydownListenerEngine);
        sendButton.removeEventListener("click", clickListenerEngine);

        break;
      case "it is overheating":
        setTimeout(function () {
          addMessage(
            "Driving the car like that is very dangerous. You should probably visit a professional mechanic for that. In fact, it is quite necessary",
            false
          );
        }, 1000);

        sendButton.addEventListener("click", sendButtonClick);
        messageInput.addEventListener("keydown", inputKeyDown);
        messageInput.removeEventListener("keydown", keydownListenerEngine);
        sendButton.removeEventListener("click", clickListenerEngine);

        break;
      default:
        setTimeout(function () {
          addMessage(
            "Sorry, I don't understand that. Please try again.",
            false
          );
        }, 1000);

        correctionMessage(
          "slows down too fast, slows down too slow, doesn't slow down at all"
        ); // Simulate a delay before displaying the follow-up question
        break;
    }
    setTimeout(function () {
      addMessage("Do you have any other problems?", false);
    }, 1000);
  }

  //#endregion
  function handleCommand(userInput) {
    var lowerCaseInput = userInput.toLowerCase();

    switch (lowerCaseInput) {
      case "brakes":
        addMessage("Alright.", false);
        // Simulate asking the user for the specific problem with the brakes
        setTimeout(function () {
          addMessage(
            "What seems to be the problem with the brakes ? You have 3 options: slows down too fast, slows down too slow, or doesn't slow down at all:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        handleBrakes();
        break;
      case "tyres":
        addMessage("Alright.", false);

        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem with the tyres? You have 3 options: the pressure is low, it is flat, or the rim is rusted:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;
      // Handle other scenarios similarly
      case "engine":
        addMessage("Alright.", false);
        handleEngine();
        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is making a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question

        break;
      case "door lock":
        addMessage("Alright.", false);

        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;

      case "window":
        addMessage("Alright.", false);
        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;
      case "oil":
        addMessage("Alright.", false);
        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;

      case "GPS":
        addMessage("Alright.", false);
        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;

      case "air conditioning":
        addMessage("Alright.", false);
        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;

      case "headlights":
        addMessage("Alright.", false);

        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;
      case "tailights":
        addMessage("Alright.", false);
        // Simulate asking the user for the specific problem with the tyres
        setTimeout(function () {
          addMessage(
            "What seems to be the problem? You have 3 options: it stalls, it is makinzg a scary sound, or it is overheating:",
            false
          );
        }, 1000); // Simulate a delay before displaying the follow-up question
        break;
      case "exit":
        addMessage("Goodbye, have a nice day.", false);
        break;
      default:
        addMessage(
          "Sorry, I don't understand that command. Please try again. Please, make sure that you type exactly what is given in the options",
          false
        );

        correctionMessage(
          "brakes, tyres, engine, door lock, window, GPS, oil, air conditioning, headlights, and tailights"
        );

        break;
    }
  }
  sendButton.addEventListener("click", sendButtonClick);
  messageInput.addEventListener("keydown", inputKeyDown);

  // Simulate received message after 2 seconds
  setTimeout(function () {
    greet();
  }, 2000);

  // Simulate received message after 2 seconds
  setTimeout(function () {
    addMessage(orbit, false);
  }, 4000);

  handleCommand();
});
