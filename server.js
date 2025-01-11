// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});

const getMessage = (day) => {
  switch(day){
    case 1: return 'Happy Monday! Start your week with energy!';
    case 2: return 'Happy Tuesday! Halfway to the weekend!';
    case 3: return 'Happy Wednesday! Almost there!';
    case 4: return 'Happy Thursday! Almost Friday!';
    case 5: return 'It\'s Friday! The weekend is near!';
    case 6: return 'Happy Saturday! Enjoy your day!';
    case 7: return 'Happy Sunday! Relax and recharge!';
  }
}

app.get("/assistant/greet",(req,res) => {
  let name = req.query.name;
  let day = new Date().getDay();
  let response = {
    welcomeMessage : `Hello, ${name}! Welcome to our assistant app!`,
    dayMessage : getMessage(day)
  }

  res.send(response)
  
})