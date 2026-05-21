module.exports = async (req, res) => {
    const { token } = req.query;

    // ১. টোকেন চেক (সরাসরি কোডের ভেতর)
    if (!token) return res.status(403).send("Error: Token missing!");

    // তোমার এক্টিভ টোকেন লিস্ট
    const allowedTokens = ["nahid3link", "rahat3link"];

    if (!allowedTokens.includes(token)) {
        return res.status(403).send("Invalid Token or Account Blocked!");
    }

    // ২. তোমার প্লেলিস্ট ডেটা (তোমার দেওয়া nahid.txt ফাইলের সম্পূর্ণ ডেটা এখানে বসানো হলো)
    const playlistData = `#EXTM3U
#EXTINF:-1 tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyniKyW9pUz1OKx5bgzLASwGVSuP0e7hX9FxVMTJMHxhu8X0tpucgSplBZgM8pCYrJJH0P2_dTC1-wzp4mMUU4sKnOzghGPCwWdbYOOa4jTyhpr7ydNj-UK-bc56IMsk2H3WZJ-SzSZIk0dTpyABCFR2_zjC2_c86W1pv7odFBT_Y-hyJs62g-3zCJkPGd/s1024/1000398131.png" group-title="Welcome to PlayZ TV | New App",Welcome to PlayZ TV
https://playztv.pages.dev/promo/master.m3u8
#EXTINF:-1 tvg-logo="https://s4.gifyu.com/images/image534fa27d7683f33d.png" group-title="Akash Go",Ekushey TV
http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/3/31/Deepto_TV_logo.png" group-title="Akash Go",Deepto TV
https://bypass.asif-sust73.workers.dev/live/deepto.m3u8
#EXTINF:-1 tvg-logo="https://assets.bioscopelive.com/images/tv-logos/channel_i_logo.png" group-title="Akash Go",Channel I
https://bypass.asif-sust73.workers.dev/live/channel_i.m3u8
#EXTINF:-1 tvg-logo="https://www.ekattor.tv/templates/bpp-news/images/logo.png" group-title="Akash Go",Ekattor TV
https://bypass.asif-sust73.workers.dev/live/ekattor.m3u8
#EXTINF:-1 tvg-logo="https://searchlogovector.com/wp-content/uploads/2019/04/atn-news-logo-vector.png" group-title="Akash Go",ATN News
https://bypass.asif-sust73.workers.dev/live/atn_news.m3u8
#EXTINF:-1 tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7b3-FwI4W7fXGZ85G7kE8l94KAdMv0I4x52D4DAsV7fW9M9XvM9XvM9Xv/s1600/logo.png" group-title="Akash Go",Gazi TV
https://bypass.asif-sust73.workers.dev/live/gtv.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/8/82/Maasranga_TV_logo.png" group-title="Akash Go",Maasranga TV
https://bypass.asif-sust73.workers.dev/live/maasranga.m3u8
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/somoy-tv.png" group-title="bangla",SOMOY TV
https://edge2.roarzone.net:8447/roarzone/edge5/somoy-tv/index.m3u8?token=8a011fb50f16bf58fa8dbfc8ef4df6b49feaa958-316f499c82e6d9ce78b2737fba0b92f7-1779290227-1779279427
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/jamuna-tv.png" group-title="bangla",JAMUNA TV
https://edge2.roarzone.net:8447/roarzone/edge5/jamuna-tv/index.m3u8?token=362a904fae513813ca4beeb22fa59da507ec794d-7bc7cc96f7c13da6696ba75d50ae9ba1-1779290229-1779279429
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/independent.png" group-title="bangla",INDEPENDENT
https://edge2.roarzone.net:8447/roarzone/edge5/independent/index.m3u8?token=cb96fdfd537a6b245dd98bb9ff6198f1f510cdfb-064952671b5636cb8794883e4cd3b7cb-1779290230-1779279430
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/atn-news.png" group-title="bangla",ATN NEWS
https://edge2.roarzone.net:8447/roarzone/edge5/atn-news/index.m3u8?token=5b2fb8b28f73fbf5f2d6bd4663a76ef48003f56e-8260ca1cbeeb7c22501a18c64da8a213-1779290232-1779279432
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/news24.png" group-title="bangla",NEWS 24
https://edge2.roarzone.net:8447/roarzone/edge5/news24/index.m3u8?token=df78db6fb59ec7b5db30da6a9089902633005efc-9745100063f25df389b036bf6eb48625-1779290234-1779279434
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/ekattor.png" group-title="bangla",EKATTOR TV
https://edge2.roarzone.net:8447/roarzone/edge5/ekattor/index.m3u8?token=3227eb0e632cbdae3305aefb1ca26dbfb589df46-5f750b2ffbb4e01768404ff47f485db6-1779290235-1779279435
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/channel24.png" group-title="bangla",CHANNEL 24
https://edge2.roarzone.net:8447/roarzone/edge5/channel24/index.m3u8?token=001e4ec9de1011867160fe6f8279bc8fca99557a-977439bd30eb9df000305be0f745d045-1779290235-1779279435
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/channel-i.png" group-title="bangla",CHANNEL I
https://edge2.roarzone.net:8447/roarzone/edge5/channel-i/index.m3u8?token=49c258d4a982f146247c43d2db7cfa3748259d4c-9f6be4e35fdb1ea054fc2f7903db5d24-1779290237-1779279437
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/gtv.png" group-title="bangla",GTV
https://edge2.roarzone.net:8447/roarzone/edge5/gazi-tv/index.m3u8?token=165c5af1ab2d9f9172cc5903b2c32de400db7e18-08fe4ba758e78740d7e688ca799290e1-1779290237-1779279437
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/r-plus.png" group-title="bangla",STAR PLUS
https://edge2.roarzone.net:8447/roarzone/edge5/r-plus/index.m3u8?token=2295bad027c5749eebf3abf6b5b5edd57ddf7ddc-895856a9db8e05bd751614fb1ef7bf49-1779290239-1779279439
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/ananda-tv.png" group-title="bangla",ANANDA TV
https://edge2.roarzone.net:8447/roarzone/edge5/ananda-tv/index.m3u8?token=30ec53b2c6eafb39cabb123f1317ef9d18324532-e540c49735d46c64afda6bb96796fe87-1779290241-1779279441
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/asian-tv.png" group-title="bangla",ASIAN TV
https://edge2.roarzone.net:8447/roarzone/edge5/asian-tv/index.m3u8?token=756fdf8707bdc867290471b6ba42c11ee4b46f5b-1fb42841bfec356cbe0ebfe9f4560a89-1779290242-1779279442
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/atn-bangla.png" group-title="bangla",ATN BANGLA
https://edge2.roarzone.net:8447/roarzone/edge5/atn-bangla/index.m3u8?token=4943fcf3e8bc68525b68df7265a8df2d2d0b503e-ba4da8d6ec7b2db82c5f1115b80a42ee-1779290244-1779279444
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/banglavision.png" group-title="bangla",BANGLAVISION
https://edge2.roarzone.net:8447/roarzone/edge5/banglavision/index.m3u8?token=0b61d36551b9e075c35b5eb29e64ba61b17b6294-01a6136c7ec377be834e062ee0be6fe8-1779290246-1779279446
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/bijoy-tv.png" group-title="bangla",BIJOY TV
https://edge2.roarzone.net:8447/roarzone/edge5/bijoy-tv/index.m3u8?token=6ae8c54db07b7b250529402bc0e8823565ae8210-af1566cfc55e090df45dd0558cf7b6bc-1779290246-1779279446
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/boishakhi.png" group-title="bangla",BOISHAKHI TV
https://edge2.roarzone.net:8447/roarzone/edge5/boishakhi/index.m3u8?token=b483fe43a1a9e70f6d2f3b9c03767e722db345ea-236b2f6efba9d9be205f97bc4a62df88-1779290248-1779279448
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/btv.png" group-title="bangla",BTV WORLD
https://edge2.roarzone.net:8447/roarzone/edge5/btv-world/index.m3u8?token=e4eb6eb6dfc8d8b671bf5ebdb19df2d634289417-cbfd8e40188ef772b22ecf2d4e68e4ee-1779290250-1779279450
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/c-music.png" group-title="bangla",CHANNEL 9
https://edge2.roarzone.net:8447/roarzone/edge5/channel-9/index.m3u8?token=d027ee852ef726a978f89bc716e2be470db3625d-bebf065715564cc833fae68b31a59074-1779290251-1779279451
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/deepto.png" group-title="bangla",DEEPTO TV
https://edge2.roarzone.net:8447/roarzone/edge5/deepto/index.m3u8?token=a5554308ca3cf1516e87a2dfb4ffed5e751f885e-fb6ca93f77341e40ebffbf20cbdfa968-1779290253-1779279453
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/desh-tv.png" group-title="bangla",DESH TV
https://edge2.roarzone.net:8447/roarzone/edge5/desh-tv/index.m3u8?token=8c6f9ea34a1787ba87fcc6ff41764df751cdb1ec-dfc4b1d9bf5b820a8dbf0fb7152066fa-1779290255-1779279455
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/duronto.png" group-title="bangla",DURONTO TV
https://edge2.roarzone.net:8447/roarzone/edge5/duronto/index.m3u8?token=ec67c6ca7e2c9ef9120614f1c9d96b01b63009d1-fdf02eb2ca69ca7a82c40c8f5ed8ea47-1779290256-1779279456
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/etv.png" group-title="bangla",EKUSHEY TV
https://edge2.roarzone.net:8447/roarzone/edge5/ekushey-tv/index.m3u8?token=d78c009cf0184282c0095f9c450daeb0308d98fa-d6f7902d2459424613271118182ec806-1779290258-1779279458
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/maasranga.png" group-title="bangla",MAASRANGA TV
https://edge2.roarzone.net:8447/roarzone/edge5/maasranga/index.m3u8?token=36ce75cc5cc54bb3f135b1c97ce49931362e5b7b-2878bf9368ca520f922fb68f51dfa1fc-1779290260-1779279460
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/mohana.png" group-title="bangla",MOHANA TV
https://edge2.roarzone.net:8447/roarzone/edge5/mohana/index.m3u8?token=fc615d688094ae3b9b4af4f6f8df7f62dae8ccff-ec195861bf03f4be8d363d33261a8ef1-1779290261-1779279461
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/mysports.png" group-title="bangla",NTV
https://edge2.roarzone.net:8447/roarzone/edge5/ntv/index.m3u8?token=f5709b1fbf150eb0ae3b2f69cb0d53c7ec3fe2f3-c918342203fa8db1d596637bdf3497d3-1779290263-1779279463
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/sa-tv.png" group-title="bangla",SA TV
https://edge2.roarzone.net:8447/roarzone/edge5/sa-tv/index.m3u8?token=c2cb62eb86c55cb07412ca67a216db8f0f0891c6-1ae9b43fbff985834891152a514d0263-1779290265-1779279465
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/somoy-tv.png" group-title="bangla",SONALI TV
https://edge2.roarzone.net:8447/roarzone/edge5/sonali-tv/index.m3u8?token=9be116b47e53f1dbbe0d96d7410060cb10565096-73602127db83e6022e3ea861a40306ee-1779290266-1779279466
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/t-sports.png" group-title="bangla",T SPORTS
https://edge2.roarzone.net:8447/roarzone/edge5/t-sports/index.m3u8?token=a55af9a1e944b1c20e408ec2a66e40d8fe15ba36-cd2dfcf43cae134622b7a9f8ec94b219-1779290268-1779279468`; 

    // ৩. রেসপন্স পাঠানো
    res.setHeader('Content-Type', 'audio/x-mpegurl');
    return res.status(200).send(playlistData);
};
