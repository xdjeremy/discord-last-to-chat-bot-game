const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.get(`728912408344526889`).send(`Text`)
});

client.on('message', msg => {
    if (msg.author.bot || !msg.channel.id == '728912408344526889') return;
    global.lastMessenger = msg.author.id;

    setTimeout(function () {
        if (global.lastMessenger == msg.author.id) {
            msg.channel.send('<@' + msg.author.id + '> Won');

            msg.channel.overwritePermissions([{
                id: '718475918162657362',
                deny: ['SEND_MESSAGES'],
            }, ], 'Lockdown');
        }
    }, 120000)

});

client.login(process.env.TOKEN);