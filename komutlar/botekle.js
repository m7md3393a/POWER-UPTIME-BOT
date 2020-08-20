module.exports={
	name:'u',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
		const db=require("quick.db")
    if(!args[0])return message.channel.send(new Discord.MessageEmbed().setAuthor('تحذير').setDescription(":slight_smile: أدخل اسم المشروع").setColor('RANDOM'));
    if(args[0].startsWith("http://")||args[0].startsWith("https://")||args[0].includes(".")||args[0].includes("/"))return message.reply(" لا يمكنك إضافة URL ضيف اسم المشروع فقط :x:");
    if(db.get("uptime").includes(args[0]+" "+message.author.id))return message.reply("هذا المشروع مرفق بالفعل :heartpulse:")
    db.push("uptime",args[0]+" "+message.author.id);
    message.reply(args[0]+"...<--:mag: برجاء الانتظار دقيقه واحده و مشروعك هيعمل بنجاح ان شاء الله");
    message.client.channels.cache.get("741202677295349841").send(`${message.client.guilds.cache.get("677938232142331935").member(message.author)||message.author.tag} `+args[0]+" تمت إضافة المشروع!.");
	}
};