const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			aliases: ['profile-picture', 'profile-pic', 'pfp', 'av'],
			group: 'other',
			memberName: 'avatar',
			description: 'Responds with a user\'s avatar.',
			args: [
				{
					key: 'user',
					prompt: 'Which user would you like to get the avatar of?',
					type: 'user',
					default: msg => msg.author
				}
			]
		});
	}

	run(msg, { user }) {
		const embed = new MessageEmbed()
			.setTitle(user.tag)
			.setImage(user.displayAvatarURL({ dynamic: true }))
			.setColor(0x00AE86);
		return msg.embed(embed);
	}
};
