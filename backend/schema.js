const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  date: { type: Date, default: Date },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  replies: [this],
});

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema],
  reactions: [String],
  createdAt: { type: Date, default: Date },
  updatedAt: { type: Date, default: Date },
  media: [String],
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  profilePicture: { type: String },
  username: { type: String },
  blogs: [blogSchema],
  following: [this],
});

const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User', userSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment, Blog, User };
