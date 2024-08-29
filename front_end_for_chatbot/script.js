function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chat-messages');
    
    var input= chatInput.value;
    var message= chatMessages.value;
 
    
    console.log(input);
    //console.log(message);
    
     if (input.trim() !== ''){
         displayMessage(input, 'user');
         
         setTimeout(function(){
             var aiResponse = generateAIResponse(input);
             displayMessage(aiResponse, 'ai');
                    
                    }, 1000);
     }
    
    
    /*
    if (input.trim() !== ''){
        var newMessage = document.createElement('div');
        newMessage.textContent = input;
        newMessage.style.padding= '10px';
        newMessage.style.margin = '5px 0';
        newMessage.style.backgroundColor = '#007bff';
        newMessage.style.color = 'white';
        newMessage.style.borderRadius = '4px';
        newMessage.style.alignSelf = 'flex-end'; // Aligns the message 
        
        chatMessages.appendChild(newMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight
        */
        
        chatInput.value = '';
        
    }
    
// Function to display a message in the chat box
function displayMessage(message, sender) {
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.padding = '10px';
    messageElement.style.margin = '5px 0';
    messageElement.style.borderRadius = '4px';

    if (sender === 'user') {
        messageElement.style.backgroundColor = '#007bff';
        messageElement.style.color = 'white';
        messageElement.style.alignSelf = 'flex-end'; // Aligns the message to the right
    } else if (sender === 'ai') {
        messageElement.style.backgroundColor = '#e0e0e0';
        messageElement.style.color = '#000';
        messageElement.style.alignSelf = 'flex-start'; // Aligns the message to the left
    }

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to simulate an AI response
function generateAIResponse(userMessage) {
    // Hardcoded responses for testing
    var responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a computer program, but I'm here to assist you!",
        "what's your name": "I'm your friendly AI assistant.",
        "bye": "Goodbye! Have a great day!"
    };

    // Convert user message to lowercase for case-insensitive matching
    var lowerCaseMessage = userMessage.toLowerCase();

    // Return the corresponding response or a default response
    return responses[lowerCaseMessage] || "I'm not sure how to respond to that, but I'm learning!";
}


// Add event listener to the chatInput field
document.getElementById('chatInput').addEventListener('keydown', function(event) {
    // Check if the Enter key (key code 13) was pressed
    if (event.key === 'Enter' || event.keyCode === 13) {
        // Prevent the default action of the Enter key (such as form submission)
        event.preventDefault();
        
        // Execute the sendMessage function
        sendMessage();
    }
});