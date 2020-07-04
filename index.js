const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.author.bot || !msg.channel.id == 728940889363447879) return;
    global.lastMessenger = msg.author.id;

    setTimeout(function () {
        if (global.lastMessenger == msg.author.id) {
            msg.channel.send('<@' + msg.author.id + '> Won');

            msg.channel.overwritePermissions([{
                id: '725621158652674099',
                deny: ['SEND_MESSAGES'],
            }, ], 'Lockdown');
        }
    }, 3000)

});

client.login(process.env.TOKEN);