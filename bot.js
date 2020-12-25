require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);
client.on("ready", ()=>{ console.log("I'm Ready to serve");});
client.on('message', checkMsg);


var say = ["sup", "yo", "hello", "hi", "come on"];

function createSpam(name, n){
    let s = "";
    
    let time = 10;
    n = parseInt(n);
    if (typeof n == 'number') time = Math.min(100, n);
    for(let i=0; i<time; i++){
        let index = Math.floor(Math.random()*say.length);
        s += say[index]+" " + name +"\n";
    }
    return s;
}

function checkMsg(msg){
    let msgs = msg.content.split(" ");
    console.log(msgs);
    if (msgs[0] === "spam"){
        if (msgs[1]){
            let name = msgs[1];
            let n = '10';
            if (msgs[2]) n= msgs[2];
            msg.channel.send(createSpam(name, n));
        }else{
            msg.reply("Whom you want to spam??!");
        }

    }

}