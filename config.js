const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041944220";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_26_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvbzNNelBERzZFUGhpa2R5ZmRBR2cwaUlEU1p4dGZJZlkyOE9OeEhPUzNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4LWRld29qclRqR2pXNWFfSXJhcVhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmYTc0MTQ0LWZlYWItNDQzOS1iMzk0LWU3ZWFjY2Y2YWRlZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAyMjEsXG4gICAgICAyMTQsXG4gICAgICAyNDEsXG4gICAgICAxOTgsXG4gICAgICAxNDksXG4gICAgICAxMTYsXG4gICAgICAyMjksXG4gICAgICAxMTIsXG4gICAgICAyNTUsXG4gICAgICAxOTgsXG4gICAgICAxNjcsXG4gICAgICAxOSxcbiAgICAgIDE0OSxcbiAgICAgIDczLFxuICAgICAgMjQ2LFxuICAgICAgOTgsXG4gICAgICAxMzksXG4gICAgICAyMzksXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICA3NyxcbiAgICAgIDIwMyxcbiAgICAgIDIzMixcbiAgICAgIDQyLFxuICAgICAgMTAzLFxuICAgICAgMjIzLFxuICAgICAgMTUxLFxuICAgICAgMjIwLFxuICAgICAgMTU0LFxuICAgICAgMTAzLFxuICAgICAgMjM0LFxuICAgICAgMTIxLFxuICAgICAgNTgsXG4gICAgICAxNDAsXG4gICAgICAyNDgsXG4gICAgICAxODYsXG4gICAgICAyMDksXG4gICAgICA5MixcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTVkJSWEtONVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTk0NDIyMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn5VbW11IEVlbWFuXCIsXG4gICAgXCJsaWRcIjogXCIxNjI2MjQ5NzcyNjQ3MzM6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2YvL3RZRkVLdWZ2TGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCYndNWVFCSzYxT0dPRVplM1hiVGQybjUyK3ZPMFFIbm9rcytaUEFJUWlZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlA3enBZSE16SWw1S084WXc2emgxaHl0eU9wMjBhaElKV3BvQm92SUVSK0NkT1lJVHprOWdLdVorZm9Vd04wck5UM1lLODd6Rytud3NxdjJ1eW51TkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIksvUkFiMHVjRlQzWEZRNjhBTG5mSjZHVFhzdjdDR0JCR3EvR0NsM2picHNqeHV4QmpZaXNaOGk5ZXV2NFVwemh3SDV6YkMxZ2YzU1JmWjVlWGFaSkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDE5NDQyMjA6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjk0MzE1MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
