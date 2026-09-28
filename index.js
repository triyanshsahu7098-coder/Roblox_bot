// ==========================================
// AUTOMATIC PACKAGE INSTALLER FOR RENDER
// ==========================================
const { execSync } = require('child_process');

try {
    require('express');
    require('axios');
} catch (e) {
    console.log("Modules missing! Installing packages automatically via mobile script...");
    execSync('npm install express axios', { stdio: 'inherit' });
    console.log("Installation finished successfully!");
}

// ==========================================
// MAIN BOT LOGIC
// ==========================================
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// AAPKA 100% COMPLETE DATA YAHAN HAI
// ==========================================
const WEBHOOK_URL = "https://discord.com"; 
const BOT_COOKIE = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CAEQAhoGCAIQBBgBIhwKBGR1aWQSFDEyMDg0MDg5NTczMTgzMDYwMzQ5IhgKBXVuYW1lEg9CbGF6ZVZvcnRleDcwOTgiEgoDdWlkEgsxMDk3OTYxMTYxMSgD.UJ8wePTre49OaXr-H0ctaf7moBGrxARwZOcnVpvKGzQZ8fL3GDTiJ0h2tcGTnzFGw81Rfh47aJ-T29MLLVOC8fz6RXkgeZTzrVPfWA-EYXxov9ACYy_PzH1F2-ZO9grI5QsAf5885swbX9nrbp9na4zFPlQS8GsasPCJ0LBXF5tjL4CS_UsrkQjo2AVDcTkQjtBZZtFomEf6dexLd9GYPWQljWKnf6sgjN7glWYIqGyyssXxwzi1fNXt9M_875xAgf0QEbeSt3zPx7fXhySkD9ImZ606QGDjPOdB4ASocOnAE2QFNf_jyMl6GjgBo3fZuR31JX4hG__MImIECiG6pxoZ28NQsMQUXSWtjVBvaJJ_dKGpt25Me2BEW4KbMSSSxAUx463Bl18_8b5ncw51SQqr7WEr0yxlDzFZnv7DQXDu-m5JGmgom51or2bpsqtRd2WFVxKu72-1eCyLu0EuiFeJSGvIT3Uo1ahb1dyVf7ExFpJObpf62gkc5eFCm-Q_nJ3omJn--y9cAjnB2ugU6-CUi-6K2KR3SB4SZql1t0sUZ7vnsWd6-tDO3j6qlw8ZtVGrQGakjxxHOfI0vYgcuTTfgwvaVqRiZEn_jU8P5rJ7iSXiFuvca491wHZa2_pjKpvX_yh2GWWWTnzurtfOD9HwsZ86wHpyiFk1BTRpynL5v-h-gVemSbVw3PeHTaLA0tZobusdEd2mZm-K9vwVSuCz8bD_DPiuceyX2C6AijqtGcMiYbZbnyEhxvvYww4_8VU4mCnVxURmFv3kukQMurrcqPiJwHJUCD4ICxZMLQMkujh7j5cVZWNmHe9XL93wRV3xdgPK6X8D6BJsK6KVZw3oAWoQH7NyD78l5UQy0ioVa75Nck0Mtiz0NbFoy7URkyRT0Yfhwg8r0CuUkDd8a23mEl_ngxR3RHZRcn2epZM.ovAQJuh67TR0iDbAjt9GuPn24dA"; 
const PLACE_ID = "17166603188"; 

app.get('/', (req, res) => {
    res.send('Log Bot is Active and Running!');
});

async function monitorServer() {
    try {
        const response = await axios.get(`https://roblox.com{PLACE_ID}/servers/Public`, {
            headers: { 'Cookie': `.ROBLOSECURITY=${BOT_COOKIE}` }
        });
        
        if (response.data && response.data.data.length > 0) {
            await axios.post(WEBHOOK_URL, {
                content: `ℹ️ **Server Monitor:** Flarx Lane server par aapke dost active hain!`
            });
        }
    } catch (error) {
        console.error("Error monitoring server:", error.message);
    }
}

setInterval(monitorServer, 300000); 

app.listen(PORT, () => {
    console.log(`Server successfully started on port ${PORT}`);
});
