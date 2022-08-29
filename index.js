require('dotenv').config();

const { google } = require('googleapis');
const fs = require('fs');

const apiOptions = {
    version: 'v3',

    auth: 'AIzaSyClp3m-TNe3ZHZ5ebtJnVS4pwo22gUc7kI'
};

// Each API may support multiple versions. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const service = google.youtube({ version: 'v3', auth: 'AIzaSyBwYgDLU7lmtgA5h76qxAG931hbTUEmk4E', });

service.videos.insert({
    resource: {
        // Video title and description
        snippet: {
            title: 'weg',
            description: 'wegqe3g232'
        },
        // I don't want to spam my subscribers
        status: {
            privacyStatus: "private",
        },
    },
    // This is for the callback function
    part: "snippet,status",
    // part: 'snippet,contentDetails,statistics',

    media: fs.createReadStream('./videoplayback.mp4')
})