const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE";
const BOT_COOKIE = "YOUR_BOT_ROBLOSECURITY_COOKIE_HERE";
const PLACE_ID = "YOUR_ROBLOX_GAME_PLACE_ID_HERE";

// Keeps the cloud service from falling asleep
app.get('/', (req, res) => {
    res.send('Log Bot Service is Running Successfully!');
});

// Loop that checks your server status and forwards details to Discord
async function monitorServer() {
    try {
        const response = await axios.get(`https://roblox.com{PLACE_ID}/servers/Public`, {
            headers: { 'Cookie': `.ROBLOSECURITY=${BOT_COOKIE}` }
        });
        
        // If servers are active, the bot logs system data to Discord
        if (response.data && response.data.data.length > 0) {
            await axios.post(WEBHOOK_URL, {
                content: `ℹ️ **Server Monitor:** There are active players on your server right now.`
            });
        }
    } catch (error) {
        console.error("Error fetching server data:", error.message);
    }
}

// Checks the server every 5 minutes
setInterval(monitorServer, 300000);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
