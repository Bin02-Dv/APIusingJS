const express = require('express');
const app = express();
const PORT = 3000;

const users = [];

// Middleware to parse JSON bodies
app.use(express.json());

// Example route: GET request
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

// Example route: GET with parameters
// app.get('/api/user/:id', (req, res) => {
//   const userName = req.params.user;
//   res.json({ message: `User Requested: ${userName}` });
// });

// Route to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Route to add a new user
app.post('/api/user', (req, res) => {
    const { name, age } = req.body;
    
    // Create a new user object
    const newUser = {
      id: users.length + 1,  // Generate a new ID based on the array length
      name,
      age
    };
  
    // Add the new user to the in-memory array
    users.push(newUser);
  
    // Send a response confirming the user creation
    res.status(201).json({ message: 'User created!', user: newUser });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
