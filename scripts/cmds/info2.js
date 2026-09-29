const fs = require("fs");
const path = require("path");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "info2",
    version: "5.0.0",
    author: "SIYAM-HASAN", // এই নাম পরিবর্তন করলে বট বন্ধ হয়ে যাবে
    role: 0,
    category: "owner"
  },

  onStart: async function ({ message }) {
    const botName = "𝐀𝐑𝐈𝐘𝐀𝐍 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓";
    const prefix = global.GoatBot?.config?.prefix || "!";
    const commands = global.GoatBot?.commands?.size || 200;

    const now = moment().tz("Asia/Dhaka");
    const time = now.format("hh:mm:ss A");
    const date = now.format("DD MMMM YYYY");

    const uptime = process.uptime();
    const h = Math.floor(uptime / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    const s = Math.floor(uptime % 60);

    
    const links = [
      "https://files.catbox.moe/nd3nk5.mp4",
      "https://files.catbox.moe/462c6q.webm"
    ];

    /* ✅ TOGGLE SYSTEM WITH UNIVERSAL FORMAT HANDLER */
    if (typeof global.info2ImageIndex === "undefined") {
      global.info2ImageIndex = 0;
    }

    const selectedImage = links[global.info2ImageIndex % links.length];
    global.info2ImageIndex = (global.info2ImageIndex + 1) % links.length;

    let attachment;
    if (selectedImage) {
      try {
        const urlClean = selectedImage.split('?')[0].toLowerCase();
        if (urlClean.endsWith(".mp4") || urlClean.endsWith(".mov") || urlClean.endsWith(".mkv") || urlClean.includes("video")) {
          attachment = await global.utils.getStreamFromURL(selectedImage, "video.mp4");
        } else if (urlClean.endsWith(".gif") || urlClean.includes("gif")) {
          attachment = await global.utils.getStreamFromURL(selectedImage, "animated.gif");
        } else {
          attachment = await global.utils.getStreamFromURL(selectedImage, "image.jpg");
        }
      } catch (err) {
        console.error("Media Load Error:", err);
        attachment = undefined;
      }
    }

    return message.reply({
      body: `╔═══════════════╗
   👑 ARIYAN SABBIR 👑
╚═══════════════╝

╭〔 🤖 BOT PANEL 〕╮
│ 🤖 BOT NAME ➤ ARIYAN CHAT BOT
│ ⚡ PREFIX ➤ ${prefix}
│ 📦 COMMANDS ➤ ${commands}
╰────────────────╯

╭〔 👤 OWNER INFO 〕╮
│ 👑 NAME ➤ ARIYAN SABBIR
│ 🎂 AGE ➤ 19+
│ 🚻 GENDER ➤ MALE
│ 🕋 RELIGION ➤ ISLAM
│ 📘 STUDY ➤ BOLMUNAH
│ 💞 STATUS ➤ PURE SINGLE
│ 🧑‍🎓 WORK ➤ JOB
╰────────────────╯

╭〔 📍 LOCATION 〕╮
│ 🏠 DISTRICT ➤ BRAMMONBARIA
│ 🌍 COUNTRY ➤ BANGLADESH
╰────────────────╯

╭〔 🎯 HOBBY 〕╮
│ 🎮 ➤ GAMING
╰────────────────╯

╭─〔 🌐 CONTACT 〕─╮
│ 📞 WHATSAPP ➤ 01937278213
│ 🎵 TIKTOK ➤ @nirob__diary
│ ✈️ TELEGRAM ➤ @Its_Ariyan_x
│ 🔗 FACEBOOK ➤ https://www.facebook.com/ItsAriyanSabbir
╰────────────────╯

╭〔 ⏳ SYSTEM 〕╮
│ 🕒 TIME ➤ ${time}
│ 📅 DATE ➤ ${date}
│ ⏱️ UPTIME ➤ ${h}h ${m}m ${s}s
╰────────────────╯

╔════════════════╗
      ✨ ATTITUDE ✨
╚════════════════╝
➤ 😎 নিজের নিয়মে চলি
➤ 🔥 কপি না, অরিজিনাল
➤ 🖤 সম্মান দিলে সম্মান পাবা
➤ 💯 Real Life, Real Vibes

╭─〔 🔥 BRAND 〕─╮
│ 👑 ARIYAN SABBIR
│ ✔️ ONLY ORIGINAL
╰────────────────╯`,
  
      attachment: attachment
    });
  }
};
