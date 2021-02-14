const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// ============== //
// === SCHEMA === //
// ============== //
const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true }, // We will use this as the username
	local: {
		username: { type: String, unique: true, required: true },
		password: { type: String, unique: false, required: true }
	},
	key: {
		type: String,
		required: true,
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
const User = mongoose.model('User', userSchema)

module.exports = User