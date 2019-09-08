const avatar = require('../images/avatar.png')
import myPosts from './myPosts'
import myPhotos from './myphotos'
import mySaved from './mySaved'


var me = {
	avatar: avatar,
	name: "Samuel Okoro",
	username:"MosaicSam",
	bio:'Traveling Mobile Tech Lead. Medellin, Colombia',
	metrics: {
		posts: 88,
		followers:183,
		following:81
	},
	posts:myPosts,
	photosOfMe:myPhotos,
	saved: mySaved
}

export default me;