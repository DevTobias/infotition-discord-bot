//* --------------- SERVER DEPENDENCIES --------------- *\\
const Discord = require('discord.js');

//* ---------------- BOT CONFIGURATION ---------------- *\\
const client = new Discord.Client();
// const config = require('./config/config.json');

// Add dotenv configuration
require('dotenv').config({
  path: './config/index.env',
});

//* ----------------- DISCORD COMMANDS ---------------- *\\

//* ------------------ DISCORD EVENTS ----------------- *\\
client.on('ready', () => {
  console.log('The client is ready!');
});

//* -------------------- START BOT -------------------- *\\
client.login(process.env.TOKEN);
