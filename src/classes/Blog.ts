import { reaction } from "@/types/reactions"
import { Comment } from "./Comment"
import { User } from "./User"

export class Blog {
  id: string
  title: string
  content: string
  author: User
  comments: Comment[]
  reactions: reaction[]
  createdAt: string
  updatedAt: string
  media?: string[]
  constructor(
    id: string,
    title: string,
    content: string,
    author: User,
    comments: Comment[],
    reactions: reaction[],
    createdAt: string,
    updatedAt: string
  ) {
    this.id = id
    this.title = title
    this.content = content
    this.author = author
    this.comments = comments
    this.reactions = reactions
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
