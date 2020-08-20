module.exports={
	name:'d',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
		const db=require("quick.db")
    if(!args[0])return message.channel.send(new Discord.MessageEmbed().setAuthor('تحذير').setDescription("ادخل اسم المشروع الذي تريدني اخرجوا من ذاكرتي :bulb:").setColor('RANDOM'));
    if(!db.get("uptime").includes(args[0]+" "+message.author.id))return message.reply("هذا المشروع ليس موجود بذاكرتي :brain:")
    db.set("uptime",db.get("uptime").filter(a=>a!=args[0]+" "+message.author.id));
    message.reply(args[0]+" :airplane: تم حذف المشروع");
   }
};