import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
	username: string,
	email: string,
	password: string,
	id: string,
});

const User = mongoose.model('User', UserSchema);
export default User;
