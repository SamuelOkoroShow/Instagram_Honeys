const avatar = require('../images/avatar.png')
const avatar = require('../images/avatar.png')
const avatar = require('../images/avatar.png')
import myPosts from './myPosts'
import myPhotos from './myphotos'
import mySaved from './mySaved'


var users = [{
	avatar: avatar,
	name: "Brigitte Tohm",
	username:"brigittetohm",
	bio:'Absolutely awkward, caffine dependent geek',
	metrics: {
		posts: 545,
		followers:3164,
		following:995
	}
	posts:myPosts,
	photosOfMe:myPhotos,
	saved: mySaved
},{
	avatar: avatar,
	name: "Jakob Owens",
	username:"jakobowens",
	bio:'DIRECOR/EDITOR/ADVENTURER {"\n"} Bookingjop@gmail.com ',
	metrics: {
		posts: "684",
		followers:"27.3k",
		following:"486"
	}
	posts:myPosts,
	photosOfMe:myPhotos,
	saved: mySaved
}
]

export default users;