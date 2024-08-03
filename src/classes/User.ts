import { Blog } from "./Blog"

export class User {
  id: string
  name: string
  email: string
  profilePicture: string
  username: string
  blogs: Blog[]
  constructor(id: string, name: string, email: string, profilePicture: string, username: string, blogs: Blog[]) {
    this.id = id
    this.name = name
    this.email = email
    this.profilePicture = profilePicture
    this.username = username
    this.blogs = blogs
  }
}
