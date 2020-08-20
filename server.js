const Discord=require("discord.js");
const db=require("quick.db");
const fs = require('fs');
const client=new Discord.Client();
require("express")().listen(2000);
client.on("ready",()=>{
  if(!db.get("uptime"))db.set("uptime",[])
  console.log("Started! "+client.user.tag);
  var uptime=a=>require("request").defaults({headers:{'User-Agent':require('random-useragent').getRandom()}}).get("https://"+a.split(" ")[0]+".glitch.me/");
  client.user.setPresence({status:"online",activity:{name:"!.help | !.u project name"}})
  const a=client.channels.cache.get("744652520416215100"); /// id روم
  if(!a)return;
  a.send("<a:white_check_mark:719863435470438422>  يتم تحديث جميع المشاريع!");
  setInterval(()=>{try{db.fetch("uptime").forEach(uptime)}catch{};a.send("<a:white_check_mark:719863435470438422>  يتم تحديث جميع المشاريع!");},30000);
});
const cooldowns=new Discord.Collection();
client.on("message",message=>{
  if(!message.content.startsWith("!."))return;
  const args=message.content.slice("!.".length).trim().split(/ +/);
  const commandName=args.shift().toLowerCase();
  if(!client.commands.has(commandName)) return;
  const command=client.commands.get(commandName);
  if (!cooldowns.has(command.name)) {
	  cooldowns.set(command.name,new Discord.Collection());
  }
  const now=Date.now();
  const timestamps=cooldowns.get(command.name);
  const cooldownAmount=(command.cooldown||0)*0;
  if(timestamps.has(message.author.id)){
    const expirationTime=timestamps.get(message.author.id)+cooldownAmount;
	  if (now<expirationTime) {
		  const timeLeft=(expirationTime-now)/0;
		  return message.reply(`Bu komutu ${timeLeft.toFixed(0)} saniye sonra kullanabilirsin.`);
	  }
	}
  var owner=["690614028979929149","551487158934962176"];
  if(!owner.includes(message.author.id))timestamps.set(message.author.id,now);
  if(!owner.includes(message.author.id))setTimeout(()=>timestamps.delete(message.author.id),cooldownAmount);
  try{
    command.execute(message,args);
  }catch(e){console.log(e)}
});

client.commands=new Discord.Collection();
const commandFiles=fs.readdirSync('./komutlar').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){const command=require(`./komutlar/${file}`);client.commands.set(command.name,command);}
client.login("NzQxMTM2ODg5ODg4ODk5MTc0.XyzLhA.lGTVW_U_AQkiRFMoDgsX4WvCtak");/// هنا توكين البوت يا سكر