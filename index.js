const express = require('express');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var path = require('path');
const App = express();
const url = 'https://sheets.googleapis.com/v4/spreadsheets/1T0gabZY6gI3FVwB_2neCU8rMD77Yw7EPqwSCAANMl04/values/A:C?key=AIzaSyA14V1IH_ZCL-MsmboOVY64LhfWoZ_jEKE';

App.get('/', async (req, res) => {   
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    if(Object.entries(req.query).length === 0) {
        return res.sendFile(path.resolve('main-page.html'));
    }

    else {

        let entries = req.query;

        if (entries.get_shows_json) {
            const fs = require('fs');
            fs.readFile('shows_data.json', 'utf8', (err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err)
                    return
                }
    
                 let json_content = JSON.parse(jsonString);
                 return res.status(200).json(json_content);
            });
        }

        else if (entries.get_sports_json) {
            const fs = require('fs');
            fs.readFile('sports_data.json', 'utf8', (err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err)
                    return
                }
    
                 let json_content = JSON.parse(jsonString);
                 return res.status(200).json(json_content);
            });
        }

        const fs = require('fs')
        fs.readFile('users_data.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }

            let json_content = JSON.parse(jsonString);

            if (entries.get_json) {
                return res.status(200).json(json_content);
            }

            if (entries.setHasAccessedBefore) {
                json_content.users[entries.user].hasAccessedBefore = true;

                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setShowCategory) {
                json_content.users[entries.user].showCategories.push(entries.setShowCategory);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setSportCategory) {
                json_content.users[entries.user].sportCategories.push(entries.setSportCategory);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setNewsCategory) {
                json_content.users[entries.user].news.push(entries.setNewsCategory);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setShowLiked) {
                json_content.users[entries.user].likedShows.push(entries.setShowLiked);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setSportLiked) {
                json_content.users[entries.user].likedSports.push(entries.setSportLiked);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setNewsLiked) {
                json_content.users[entries.user].likedNews.push(entries.setNewsLiked);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            if (entries.setFriend) {
                json_content.users[entries.user].friends.push(entries.setFriend);
                
                const fs = require('fs');
                const jsonString = JSON.stringify(json_content)
                fs.writeFile('users_data.json', jsonString, err => {});
            }

            return res.status(200).json([]);

        });
    }
});

var porta = process.env.PORT || 8080;
App.listen(porta);