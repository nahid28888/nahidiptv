module.exports = async (req, res) => {
    const { token } = req.query;

    // ১. টোকেন চেক (সরাসরি কোডের ভেতর)
    if (!token) return res.status(403).send("Error: Token missing!");

    // তোমার এক্টিভ টোকেন লিস্ট
    const allowedTokens = ["nahid3link", "rahat3link"];

    if (!allowedTokens.includes(token)) {
        return res.status(403).send("Invalid Token or Account Blocked!");
    }

    // ২. তোমার প্লেলিস্ট ডেটা (সরাসরি কোডের ভেতর বসিয়ে দিলাম)
    // এখানে তোমার m3u ফাইলের সব লিংকগুলো নিচের মতো করে বসিয়ে দাও
    const playlistData = `#EXTM3U
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/ananda-tv.png" group-title="bangla",ANANDA TV
https://edge2.roarzone.net:8447/roarzone/edge5/ananda-tv/index.m3u8?token=2350fde503b77fe19ec883982f262e557eb2d32c-7eabcc5d78fbb419fc6887eeffd338b2-1779338613-1779327813
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/asian-tv.png" group-title="bangla",ASIAN TV
https://edge2.roarzone.net:8447/roarzone/edge5/asian-tv/index.m3u8?token=c43bae1126a23cab28b8cd3ac97a2b47f34dbdd5-d37ccae0ded19c878cb1f3bb7abb9a50-1779338615-1779327815
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/atn-bangla.png" group-title="bangla",ATN BANGLA
    // ৩. রেসপন্স পাঠানো
    res.setHeader('Content-Type', 'audio/x-mpegurl');
    return res.status(200).send(playlistData);
};
