const axios = require('axios');

module.exports = async (req, res) => {
    const { token } = req.query;

    if (!token) return res.status(403).send("Error: Token missing!");

    try {
        const githubDbUrl = "https://raw.githubusercontent.com/nahid28888/nahidiptv/main/users.json"; 
        const dbResponse = await axios.get(githubDbUrl);
        const users = dbResponse.data;

        if (!users[token]) return res.status(403).send("Invalid Token!");
        if (users[token].status === 'blocked') return res.status(403).send("Account Blocked!");

        const playlistUrl = "https://raw.githubusercontent.com/nahid28888/nahidiptv/main/playlist.m3u";
        const playlistResponse = await axios.get(playlistUrl);
        
        res.setHeader('Content-Type', 'audio/x-mpegurl');
        return res.status(200).send(playlistResponse.data);

    } catch (error) {
        return res.status(500).send("Server Error!");
    }
};
