const axios = require('axios');
let liveConnections = {}; 

module.exports = async (req, res) => {
    const { token } = req.query;
    const urlPath = req.url;

    // ১. টোকেন চেক
    if (!token) return res.status(403).send("Error: Token missing!");

    try {
        // ইউজার ডাটাবেজ আনা
        const githubDbUrl = "https://raw.githubusercontent.com/nahid28888/nahidiptv/main/users.json"; 
        const dbResponse = await axios.get(githubDbUrl);
        const users = dbResponse.data;

        if (!users[token]) return res.status(403).send("Invalid Token!");
        if (users[token].status === 'blocked') return res.status(403).send("Account Blocked!");

        // ২. মাল্টি-ডিভাইস লক সিস্টেম
        if (!liveConnections[token]) liveConnections[token] = 0;
        if (liveConnections[token] >= users[token].max_connections) {
            return res.status(403).send("Error: Multi-Device detected!");
        }

        // ৩. মেইন প্লেলিস্ট রিকোয়েস্ট (এখানেই তোমার সোর্স লিংক কাস্টমারের কাছ থেকে হাইড হবে)
        const playlistUrl = "https://raw.githubusercontent.com/nahid28888/nahidiptv/main/playlist.m3u";
        const playlistResponse = await axios.get(playlistUrl);
        let originalM3u = playlistResponse.data;
        
        const host = req.headers.host;
        const lines = originalM3u.split('\n');
        let secureM3u = "";

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.startsWith('#EXTINF:')) {
                secureM3u += line + "\n";
                let nextLine = lines[i+1] ? lines[i+1].trim() : "";
                if (nextLine && nextLine.startsWith('http')) {
                    // চ্যানেল আইডি বা নাম বের করা
                    let tvgIdMatch = line.match(/tvg-id="([^"]+)"/) || line.match(/tvg-name="([^"]+)"/);
                    let channelId = tvgIdMatch ? tvgIdMatch[1] : `ch${i}`;
                    
                    // আসল লিংক বদলে ভার্সেলের মাস্কিং লিংক বসানো
                    secureM3u += `https://${host}/stream/${encodeURIComponent(channelId)}?token=${token}\n`;
                    i++; 
                }
            } else if (line.startsWith('#EXTM3U')) {
                secureM3u += line + "\n";
            }
        }
        
        res.setHeader('Content-Type', 'audio/x-mpegurl');
        return res.status(200).send(secureM3u);

    } catch (error) {
        return res.status(500).send("Server Error!");
    }
};
