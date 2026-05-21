const axios = require('axios');
let liveConnections = {}; 

module.exports = async (req, res) => {
    const { token } = req.query;
    if (!token) return res.status(403).send("Error: Token missing!");

    try {
        // --- তোমার গিটহাবের users.json ফাইলের আসল Raw লিংকটি এখানে বসাবে ---
        const githubDbUrl = "https://raw.githubusercontent.com/তোমার-গিটহাব-ইউজারনেম/3link-iptv/main/users.json"; 
        const dbResponse = await axios.get(githubDbUrl);
        const users = dbResponse.data;

        if (!users[token]) return res.status(403).send("Invalid Token!");
        if (users[token].status === 'blocked') return res.status(403).send("Account Blocked!");

        if (!liveConnections[token]) liveConnections[token] = 0;
        if (liveConnections[token] >= users[token].max_connections) {
            return res.status(403).send("Error: Multi-Device detected! 1 Link 2 TV te cholbe na.");
        }

        liveConnections[token] += 1;
        setTimeout(() => { if (liveConnections[token] > 0) liveConnections[token] -= 1; }, 30000); 

        // --- তোমার সেই মেইন BDIX প্লেলিস্টের Raw লিংকটি এখানে থাকবে ---
        const playlistUrl = "https://raw.githubusercontent.com/abusaeeidx/Mrgify-BDIX-IPTV/main/playlist.m3u";
        const playlistResponse = await axios.get(playlistUrl);
        
        res.setHeader('Content-Type', 'audio/x-mpegurl');
        return res.status(200).send(playlistResponse.data);
    } catch (error) {
        return res.status(500).send("Server Error!");
    }
};
