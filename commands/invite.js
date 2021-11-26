const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message) {
    return message.member
      .send(
        `Invite links are now deprecated! Instead click my avatar and click "Add to Server" ERR:0x1
    `
      )
      .catch(console.error);
  }
};
