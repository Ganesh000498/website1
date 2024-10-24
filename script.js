const chatBox = document.getElementById("chat-box");

function processInput() {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        displayMessage(userInput, 'user');
        displayResponse(userInput);
        document.getElementById("user-input").value = ''; // Clear input
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function displayResponse(userInput) {
    let response;
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("education") || lowerInput.includes("college")) {
        response = "I am currently pursuing a Bachelor of Technology in Computer Engineering at Madras Institute of Technology.";
    }
  else if(lowerInput.includes("hi") || lowerInput.includes("hello"))
      response=" Welcome to my website\nyou can ask anything about my skills,education,interests etc."
  else if (lowerInput.includes("skills")) {
        response = "I have skills in programming languages like C, C++, Python, and Java, as well as web development with HTML, CSS, and JavaScript.";
    } else if (lowerInput.includes("who are you") || lowerInput.includes("website owner")) {
        response = "I'm a chatbot designed to provide information about the website owner and their projects.";
    } else if (lowerInput.includes("projects") || lowerInput.includes("work")) {
        response = "I am currently working on several personal projects, including web applications and software development.";
    } else if (lowerInput.includes("interests") || lowerInput.includes("hobbies")) {
        response = "I have a keen interest in technology, coding, and exploring new programming languages and frameworks.";
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach")) {
        response = "You can contact me through the contact section of the website!";
    } else {
        response = "I'm sorry, I didn't understand that. You can ask me about my education, skills, projects, or interests.";
    }

    displayMessage(response, 'bot');
}
