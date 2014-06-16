var mongoose =  require('mongoose');

var teamSchema =  new mongoose.Schema({
	address: String,
	draws: Number,
	foundedYear: Number,
	goalsAgainst: Number,
	goalsDiff: String,
	goalsFor: Number,
	group: String,
	groupPoints: Number,
	groupRank: Number,
	homeStadium: String,
	id: String,
	logo: String,
	losses: Number,
	matchesPlayed: Number,
	name: String,
	stadiumCapacity: Number,
	type: String,
	website: String,
	wins: Number
});

var TeamModel = mongoose.model('Team', teamSchema);

module.exports = TeamModel;