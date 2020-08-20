module.exports={
	name:'help',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
    
    const embed = new Discord.MessageEmbed()
    .setTitle("قائمة التعليمات")
    .setColor("RANDOM")
    .setDescription("!.u  --> تقوم بإضافة اسم البرجكت <-- \n !.p  --> قائمه المشاريع اللي انت ضايفها <-- \n !.d  --> تقوم بحذف المشروع اللي انت عايزه من عن طريق اسمه <--")
    message.channel.send(embed)
  }}