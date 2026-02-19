const express = require('express');
const app = express();

app.use(express.json());

let activeUsers = [];

// Endpoint for Roblox to send data
app.post('/api/log', (req, res) => {
    const { username, timeOfExecution, jobId } = req.body;
    if (!username) return res.status(400).send("Missing data");

    activeUsers.push({ username, timeOfExecution, jobId });
    console.log(`Logged join for: ${username}`);
    res.status(200).json({ success: true });
});

// Endpoint for you to see the data
app.get('/api/users', (req, res) => {
    res.status(200).json(activeUsers);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
