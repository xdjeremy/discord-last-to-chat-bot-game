const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot || !(msg.channel.id == '728912408344526889')) return;
    global.lastMessenger = msg.id;

    setTimeout(function () {
        if (global.lastMessenger == msg.id) {
            msg.channel.send('<@' + msg.author.id + '> Won');

            msg.channel.overwritePermissions([{
                id: '718475918162657362',
                deny: ['SEND_MESSAGES'],
            }, ], 'Lockdown');
        }
    }, 60000)

});

client.login(process.env.TOKEN);