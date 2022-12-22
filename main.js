const noblox = require('noblox.js')
const chalk = require('chalk')
const redtext = chalk.bold.red
const greentext = chalk.green
const dimtext = chalk.dim.strikethrough
const warning = chalk.hex('#FFA500').inverse
async function startApp () {
  console.log(redtext("Roblox"))
  console.log(redtext("Group chat spammer"))
  console.log(dimtext("cant add ascii art because javascript is pain"))
  console.log(warning("WARN: you cant do that much groups without a proxy/vpn"))
  console.log("made by Alexplayrus1#0746")
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('put your cookie here >. ', async roblosecurity => {
  const currentUser = await noblox.setCookie(roblosecurity)
  console.log(greentext(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`))
  
  readline.question('put your victims userid here >. ', async victimid => {
    let vicusername = await noblox.getUsernameFromId(victimid)
    console.log(greentext(`picked the victim "${vicusername}" [${victimid}]`))
    readline.question('put the amount of groups >. ', async groupcount => {
      readline.close()
      console.log(`Creating ${groupcount} group(s) with ${vicusername} [${victimid}] and ${currentUser.UserName} [${currentUser.UserID}] in them...`)
      for (let i = 0; i < groupcount; i++) {
        noblox.startGroupConversation([victimid], i.toString())
        console.log(greentext(`Group ${i.toString()} created!`))
      }
    })
  })
});
}
startApp()