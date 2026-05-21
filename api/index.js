const axios = require('axios');

module.exports = async (req, res) => {
    const { token } = req.query;

    // ১. টোকেন সিকিউরিটি চেক
    if (!token) return res.status(403).send("Error: Token missing!");

    try {
        // ফাইলটি api ফোল্ডারের ভেতরে থাকায় আমরা লিংকটা পরিবর্তন করে দিলাম
        const githubDbUrl = "https://raw.githubusercontent.com/nahid28888/nahidiptv/main/api/users.json"; 
        const dbResponse = await axios.get(githubDbUrl);
        const users = dbResponse.data;

        if (!users[token]) return res.status(403).send("Invalid Token!");
        if (users[token].status === 'blocked') return res.status(403).send("Account Blocked!");

        // প্লেলিস্টের লিংকও api ফোল্ডারের ভেতরেরটা সেট করে দিলাম
        const playlistUrl = "https://raw.githubusercontent.com/nahid28888/nahidiptv/main/api/playlist.m3u";
        const playlistResponse = await axios.get(playlistUrl);
        
        res.setHeader('Content-Type', 'audio/x-mpegurl');
        return res.status(200).send(playlistResponse.data);

    } catch (error) {
        return res.status(500).send("Server Error: File path issue fixed!");
    }
};
