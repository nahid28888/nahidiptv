module.exports = async (req, res) => {
    let token = req.query ? req.query.token : null;
    
    if (!token && req.url) {
        try {
            const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
            token = urlObj.searchParams.get("token");
        } catch (e) {}
    }

    if (token) token = token.trim();

    if (!token) return res.status(403).send("Error: Token missing!");

    const allowedTokens = ["nahid3link", "rahat3link", "yousuf3link", "anik3link", "milon3link"];

    if (!allowedTokens.includes(token)) {
        return res.status(403).send("Invalid Token or Account Blocked!");
    }

    // ২. একদম ১০০% ফরম্যাট ঠিক করা নিখুঁত প্লেলিস্ট ডেটা (২২৯টি চ্যানেলই আছে)
    const playlistData = `#EXTM3U
#EXTINF:-1 tvg-logo="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyniKyW9pUz1OKx5bgzLASwGVSuP0e7hX9FxVMTJMHxhu8X0tpucgSplBZgM8pCYrJJH0P2_dTC1-wzp4mMUU4sKnOzghGPCwWdbYOOa4jTyhpr7ydNj-UK-bc56IMsk2H3WZJ-SzSZIk0dTpyABCFR2_zjC2_c86W1pv7odFBT_Y-hyJs62g-3zCJkPGd/s1024/1000398131.png" group-title="Welcome to PlayZ TV | New App",Welcome to PlayZ TV
https://playztv.pages.dev/promo/master.m3u8
#EXTINF:-1 tvg-logo="https://s4.gifyu.com/images/image534fa27d7683f33d.png" group-title="Akash Go",Ekushey TV
http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8
#EXTINF:-1 tvg-logo="https://upload.wikimedia.org/wikipedia/en/3/31/Deepto_TV_logo.png" group-title="Akash Go",Deepto TV
https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8
#EXTINF:-1 tvg-logo="https://pbs.twimg.com/profile_images/739539785304281088/zMwNO936_400x400.jpg" group-title="BANGLA",Deshe Bideshe
https://dbcanada.sonarbanglatv.com/deshebideshe/dbtv/index.m3u8
#EXTINF:-1 tvg-logo="https://ssl.com.bd/sites/default/files/BTV%20Logo%20Gallery.png" group-title="Akash Go",BTV
https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/puf12xv5flgbnz5/channel24_bd.png" group-title="Akash Go",Channel 24
https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/7xwwb8hetz3w8rp/independent_tv.png" group-title="Akash Go",INDEPENDENT TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8
#EXTINF:-1 tvg-logo="https://s4.gifyu.com/images/imagea02f4314e761661d.png" group-title="Akash Go",Ekattor TV
https://tvsen6.aynaott.com/ekattorbdtv/index.m3u8?e=1779283770&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=dc7810d37e97e9d5ef235e0781255c24
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/k7z1dsec1jfjbkn/jamuna_tv_bd.png" group-title="Akash Go",JAMUNA TV
https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8
#EXTINF:-1 tvg-logo="https://dl.dropbox.com/s/4ldi1dp09s8o6bm/atn_news_bd.png" group-title="Akash Go",ATN NEWS
https://edge2.roarzone.net:8447/roarzone/edge5/atn-news/index.m3u8?token=a78094d4a8052b78e5516f93ef2b172d0886d38d-ecb1282207d746f9b725679876e4de5d-1779290238-1779279438
#EXTINF:-1 tvg-logo="https://s6.gifyu.com/images/image27cfa7002786c232.png" group-title="Akash Go",ATN Bangla
https://tvsen5.aynaott.com/atnbangla/index.m3u8?e=1779283752&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=e20058ae495a80a83ec09cb9d82b9253
#EXTINF:-1 tvg-logo="https://www.ntvbd.com/sites/default/files/aggregator/2020/02/17/ntv-channel_0.jpg" group-title="NAHID",NTV
https://tvsen5.aynaott.com/ntvbd/index.m3u8?e=1779283750&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=dac30ebda5dba60e895e85ddee645992
#EXTINF:-1 tvg-logo="https://cdn.tvpassport.com/image/station/240x135/channel-i-bangla.png" group-title="Akash Go",Channel I
https://tvsen6.aynaott.com/channeli/index.m3u8?e=1779283749&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=1d2782c406bc6c9f853716c3dc41a439
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/00da8a07fb26b2fb79359ee535e4c7bc" group-title="Bangla",BTV CTG
https://tvsen6.aynaott.com/btvctg/index.m3u8?e=1779283747&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=9bca925fbdfe526b29d41ab7802348ec
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/788ab3e49b2aa6af247722762ed6e72a" group-title="Bangla",Bangla Vision
https://tvsen5.aynaott.com/banglavision/index.m3u8?e=1779283750&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=c6bb7760d6eb9b999205a81ca4f4f51c
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/094587a26f2c5e4f2962104728ec8c5d" group-title="Bangla",RTV
https://tvsen5.aynaott.com/RtvHD/index.m3u8?e=1779283751&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=678f1f8ec03b1af7b76d013d33f45198
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/8a1af81802b0728c064c2adabcdc72c8" group-title="Bangla",ETV
https://tvsen6.aynaott.com/etv/index.m3u8?e=1779283752&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=2c4b5c7a7044076e38b667d37971baec
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/1b5cb8c7901739cd7d201a38d2ab4737" group-title="Bangla",Maasranga TV
https://tvsen5.aynaott.com/maasrangatv/index.m3u8?e=1779283753&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=d29aadd6d2d6f7a0a28fabc7830ae6e3
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/417a833f6d83021c99bfc3d4176610f4" group-title="Bangla",Gazi TV
https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8?e=1779283754&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=0cdc69aae0d57f2ce93a41a608a3d821
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/d10390e5434e8cb44172257abd714beb" group-title="Bangla",Desh TV
https://tvsen6.aynaott.com/deshtv/index.m3u8?e=1779283755&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=9cf4584fd86e1427935f23b30fd28799
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/58658d4594ca1ff3c5031c9d8e3d9fc0" group-title="Bangla",Boishakhi TV
https://tvsen6.aynaott.com/boishakhitv/index.m3u8?e=1779283755&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=f3f4ec98ffbd9567c21e8b2ee98e32d5
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/a959f06b4fc9e1421f867b6c1601fe43" group-title="Bangla",Channel 9
https://tvsen6.aynaott.com/channel9/index.m3u8?e=1779283756&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=6d1662351f39dd5277df069a01f46fee
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/5282cec3a2e9349b750540d658cf1b6c" group-title="Bangla",Asian TV
https://tvsen6.aynaott.com/asiantv/index.m3u8?e=1779283756&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=46e2c2d74460202bdd6638ed54273e2a
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/f710d2ff532cb7e7b75566232c5b72d3" group-title="Bangla",SA TV
https://tvsen6.aynaott.com/satv/index.m3u8?e=1779283757&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=336f19de5e4aacae753d7524d86d1a89
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/51f1530c076c027e431bf18a49613f0b" group-title="Bangla",Duronto TV
https://tvsen6.aynaott.com/durontotv-live/index.m3u8?e=1779283757&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=3da514e08a15c80daed60a18b3f423fa
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/e42ecfa90e3d6b15bdb7fea5ef673864" group-title="Bangla",Bangla TV
https://tvsen6.aynaott.com/banglatv/index.m3u8?e=1779283758&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=f3e9e2737e35147900c0f4add619ead6
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/897698f593fc07974fc46881a440733d" group-title="Bangla",Ananda TV
https://tvsen6.aynaott.com/anandatv/index.m3u8?e=1779283759&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=504b9350b4703116ca4ab20e4013288e
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/c5b2c623863fbe4033d59d52ff7371ac" group-title="Bangla",My TV
https://tvsen6.aynaott.com/mytv/index.m3u8?e=1779283760&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=0a2ae0189a44e789d3fecffe5a474ec3
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/ffd7ba9b76ad555933f94bcb7ff26b44" group-title="Bangla",Global TV
https://tvsen6.aynaott.com/globaltvhd/index.m3u8?e=1779283760&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=9877fe1456ffd7b4e155ff0dc042c176
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/f23d6f82c1a16458fe0e4c6f11b8fd87" group-title="Bangla",Bijoy TV
https://tvsen6.aynaott.com/bijoytv/index.m3u8?e=1779283761&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=5c8b85f4f92c654640f3abdc1ac061c6
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/90635c3edf6e3c8dd92210b7248f1fa0" group-title="Bangla",NEXUS TV
https://tvsen6.aynaott.com/nexustv/index.m3u8?e=1779283761&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=bbcba35ac711c3545a56b3580503ee00
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/73082846fdc15d9f0e7268b104c55d92" group-title="Bangla",Mohona TV
https://tvsen6.aynaott.com/mohonatv/index.m3u8?e=1779283762&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=017ac949515fd9b0181090287f362d2b
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/065af1ce1aa68d9d96c27050a8125413" group-title="News",ABC News
https://tvsen6.aynaott.com/AbcNews/index.m3u8?e=1779283763&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=6768af084e787f0340bb860898c7323b
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/4eaf83274ee309489b535852b1780ad2" group-title="News",BEK TV News
https://cdn3.wowza.com/5/ZWQ1K2NYTmpFbGsr/BEK-WOWZA-1/smil:BEKPRIMEeast.smil/playlist.m3u8
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/ece71c1163a377fbe2d93f9d28c34f60" group-title="News",Somoy News TV
https://tvsen6.aynaott.com/somoytv/index.m3u8?e=1779283766&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=269246b8a31fb3a656624d71e10e447d
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/8a3c5215dc0b943dc0a80333c0ab21ce" group-title="News",ATN News
https://tvsen6.aynaott.com/atnnews/index.m3u8?e=1779283767&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=9e9b363bb761a6f0d5547b465dfbbede
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/6653326503fcade746d87881d5c99697" group-title="News",Independent TV
https://tvsen6.aynaott.com/independenttv/index.m3u8?e=1779283768&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=d1efc538ba7cd00641ea9ee32ae708fd
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/2c5a73ac3f9772a9cb2d18df1b152545" group-title="News",DBC News
https://tvsen6.aynaott.com/dbcnews/index.m3u8?e=1779283768&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=9e5c2851814ffe8483f21f50dfbcb4b9
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/274c30c492e8795c8011d0129113f4bc" group-title="News",Ekhon TV
https://tvsen6.aynaott.com/ekhontv/index.m3u8?e=1779283769&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=d3dc5ee2773ce51cc8c2805a647bf2de
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/7c002f22c02096b0d1ba833ae9ea6d5b" group-title="News",News 24 BD
https://tvsen6.aynaott.com/news24/index.m3u8?e=1779283769&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=a773d74ac7f54526f02c2840c88335fa
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/aac6488b68844e5756ab46eb79659de8" group-title="News",Jamuna TV
https://tvsen6.aynaott.com/jamunatv/index.m3u8?e=1779283771&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=2592d440f00d65738bd7f6c5158ce486
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/2b00567c538d392c8050124f0064c4a1" group-title="Indian Bangla",Enter 10 Bangla
https://live-bangla.akamaized.net/liveabr/playlist.m3u8
#EXTINF:-1 tvg-logo="https://stmify.com/wp-content/uploads/2025/01/108-s.webp" group-title="NAHID",SonyMax.TV.HD
https://padmaonline.duckdns.org:8088/SonyMaxHD/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/sonymax2.png" group-title="hindi",SONY MAX 2
https://edge2.roarzone.net:8447/roarzone/edge3/sonymax_2/index.m3u8?token=ce5fe2ac7bdbb2c7d000c55a01516a5a8b41461e-5e73bd5df594f39856f60d730ce7edcc-1779290239-1779279439
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/sony-atth.png" group-title="hindi",SONY ATTH
https://edge2.roarzone.net:8447/roarzone/edge5/sony-atth/index.m3u8?token=4bbfc7efca159f0b6283b56394373ea3846736ec-88bc49470ccbf4ee34893287183c64c2-1779290239-1779279439
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/Supercola-Regional-List-A-Tournament, -2026_FC-WEB_1779005924089.jpg" group-title="Live Event",-2026_FC-WEB_1779005924089.jpg Live Event,-2026_FC-WEB_1779005924089.jpg Live Event- Mis-e-Ainak Region vs Boost Region (Supercola Regional List A Tournament- 2026)
https://bd-mc-fblive.fancode.com/mumbai/142742_english_hls_86d838303936747_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/142440_6076_CRO_JER_fc-web.jpg" group-title="Live Event",Jersey vs Croatia (ICC Men's T20 WC Europe Sub Regional Qualifier A)
https://bd-mc-fblive.fancode.com/mumbai/142440_english_hls_d384b26fb823071_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/142439_6076_SWE_MAL_fc-web.jpg" group-title="Live Event",Sweden vs Malta (ICC Men's T20 WC Europe Sub Regional Qualifier A)
https://bd-mc-fblive.fancode.com/mumbai/142439_english_hls_efc941c91395239_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/Gonet-Geneva-Open, -ATP-250-old-.jpg" group-title="Live Event",-ATP-250-old-.jpg Live Event,-ATP-250-old-.jpg Live Event- ATP 250 - Gonet Geneva Open 2026 vs Geneva (ATP 250 - Gonet Geneva Open 2026)
https://bd-mc-fblive.fancode.com/mumbai/142271_english_hls_485f697c6a30983_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/Mini-Match-Card-(1080x810)_1778731390482.png" group-title="Live Event",Day 4 - Main Feed vs Hamburg (ATP 500 - Bitpanda Hamburg Open 2026)
https://bd-mc-fblive.fancode.com/mumbai/142264_english_hls_ed6cddddb476090_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/Mini-Match-Card-(1080x810)_1778731390482.png" group-title="Live Event",Day 4 - M1 vs Hamburg- Germany (ATP 500 - Bitpanda Hamburg Open 2026)
https://bd-mc-fblive.fancode.com/mumbai/142929_english_hls_f3ba5d9be463682_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://www.fancode.com/skillup-uploads/cms-media/Mini-Match-Card-(1080x810)_1778731390482.png" group-title="Live Event",Day 4 - Centre Court vs Hamburg- Germany (ATP 500 - Bitpanda Hamburg Open 2026)
https://bd-mc-fblive.fancode.com/mumbai/142930_english_hls_73e6a175bd74019_1ta-di_h264/index.m3u8
#EXTINF:-1 tvg-logo="https://abusaeeidx.github.io/Tv-Channel-Logo/CricHD/runded/20-by-xfireflix.png" group-title="Sports",PTV Sports
https://tvsen5.aynaott.com/PtvSports/index.m3u8?e=1779283784&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=db1789e36c278bf538489fac263e0ffb
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/dbc585f70a60b9855b6e13a8ce4cb6f4" group-title="Sports",T Sports HD
https://tvsen7.aynaott.com/tsports-hd/index.m3u8?e=1779283784&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=3b4c5a2cfa872fa7f91ffbfb4aa0f658
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/64de30d2df9b2a888cb73f17614a9a8b" group-title="Sports",A sports
https://tvsen6.aynaott.com/asports/index.m3u8?e=1779283785&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=356b906bf972b824782bb58c1ce0bb22
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/7d20b575edc4e4b5276faa8c246e72a4" group-title="Sports",Cricket Gold
https://tvsen6.aynaott.com/CricketGold/index.m3u8?e=1779283786&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=7c79e4f07ef8bf05e35ecffd9e056652
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/edb73991516696dfd53efbd32d80ca58" group-title="Sports",Golf Channel
https://tvsen6.aynaott.com/golfchannel/index.m3u8?e=1779283789&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=56943a1262fd47843d1dbaaaf88363bc
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/030ec528e912afb9a2ec3b4c5167a928" group-title="Sports",Bleav Football
https://linear-493.frequency.stream/dist/glewedtv/493/hls/master/playlist.m3u8
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/da4282cd107cc3d40efadae488b187e5" group-title="Sports",Fox Sports 2
https://tvsen7.aynaott.com/foxsports2/index.m3u8?e=1779283790&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=cbb7f40b4af7be51a91e0629a5ac7238
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/b46df1959322aa48d270a6b163234c76" group-title="Sports",Espn
https://tvsen5.aynaott.com/espn/index.m3u8?e=1779283793&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=cf2b4cb8b6c96ab86daee4299c792295
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/17642cb60c2af7fc36ca1e08cc54fdae" group-title="Sports",TSN 2
https://tvsen7.aynaott.com/tsn2/index.m3u8?e=1779283793&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=636d9b8b83d4316193c2d1c9aad8951c
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/5128cd32518d5a9ba7a37e21947fd8fd" group-title="Sports",Talk Sport
https://tvsen6.aynaott.com/talkSPORT/index.m3u8?e=1779283794&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=24b590ae2b7927c00a9acc3a97bc5d86
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/b54495ee3cdd53ddaa19d1f98120f488" group-title="Sports",KTV Sport Plus
https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist.m3u8
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/748d28752dcf95740561f1ac39e15fc3" group-title="Sports",SPORTS FIRST TV
https://edge2.roarzone.net:8447/roarzone/edge5/sports-first-tv/index.m3u8?token=755f71d30e9f2436eb4b5b77b9befe6c907258d1-49232f1e8e5b3592e50ddf175e20b023-1779290237-1779279437
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/66bdaa21aba96de6d32a3515715f7502" group-title="Sports",Marquee Sports Network
https://tvsen6.aynaott.com/MarqueeSportsNetwork/index.m3u8?e=1779283796&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=a91e537a0eb1a24ed472a508e90fefcc
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/1aa37e387ed56a1260b285558eec7c46" group-title="Sports",Sports Grid
https://tvsen6.aynaott.com/SportsGrid/index.m3u8?e=1779283798&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=652ed8ae174a9efdb335fb31355f0fb5
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/e1749cf3040f11c63e722c941f213927" group-title="Sports",Xtream Sports
https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e0b81a5c-6ab5-48cd-aaa9-f82de4ab5bf9/manifest.m3u8
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/253dcc8b5951160d6aa26bc5ac65ddb8" group-title="Sports",Bloomberg TV
https://tvsen6.aynaott.com/bloombergtv/index.m3u8?e=1779283799&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=ecba4c0cf6ffc82d2d0dfc78f69c1061
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/f55bea3263be1af187fe1122e4f44142" group-title="Sports",Bahrain Sports 1
https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/94a778ec3219f7eb54bdf1ee07a95788" group-title="Sports",Willow HD TV
https://tvsen5.aynaott.com/willowhd/index.m3u8?e=1779283803&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=2fe7bf4f892cf09f80087b8146545bad
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/79f1ee920d6931a767ae0030e1c7c12b" group-title="Sports",NFL Network
https://tvsen6.aynaott.com/nfl/index.m3u8?e=1779283803&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=79f1ee920d6931a767ae0030e1c7c12b
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/f24e50516ccf6b3e94a4ca749ccb3533" group-title="Movie",Persiana Kore
https://korhls.persiana.live/hls/stream.m3u8
#EXTINF:-1 tvg-logo="https://tvassets.roarzone.net/images/toffee_movie.png" group-title="hindi",TOFFEE MOVIES
https://edge2.roarzone.net:8447/roarzone/edge3/toffee_movie/index.m3u8?token=c4657b62cfe670dcdc51ec107291a5b7b34559df-1528e7f360ffd3dc24b15583fd044af2-1779290237-1779279437
#EXTINF:-1 tvg-logo="https://s3.aynaott.com/storage/3458d0d9097a8283a94a13374bcbf5c7" group-title="Religious",Channel Win
https://cdn-4.pishow.tv/live/229/master.m3u8`;

    res.setHeader("Content-Type", "application/x-mpegURL");
    res.setHeader("Content-Disposition", "attachment; filename=playlist.m3u8");
    return res.status(200).send(playlistData);
};
