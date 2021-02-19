const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// ============== //
// === SCHEMA === //
// ============== //
const userSchema = new Schema({
	firstName: { type: String, required: false },
	lastName: { type: String, required: false },
	verified: { type: Boolean, required: true, default: false },
	temp_token: { type: String, required: false },
	email: { type: String, unique: true, required: true},
	local: {
		username: { type: String, unique: true, required: true },
		password: { type: String, unique: false, required: true },
		email: { type: String, unique: true, required: true}
	},
	key: {
		type: String,
		default: "COPPER",
		enum: ["COPPER", "SILVER", "GOLD"]
	},
	date: { type: Date, default: Date.now }
});

// ======================== //
// === HELPER FUNCTIONS === //
// ======================== //
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
};

userSchema.pre('save', function (next) {
	if (!this.local.password) {
		next()
	} else {
		this.local.password = this.hashPassword(this.local.password)
		next()
	}
});

// ============== //
// === EXPORT === //
// ============== //
const User = mongoose.model('User', userSchema);

module.exports = User