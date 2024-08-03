import { reaction } from "@/types/reactions"

export class Comment {
  public id: string
  public content: string
  public author: string
  public createdAt: string
  public updatedAt: string
  public blog: string
  public reactions: any[]
  public replies: Comment[]
  constructor(
    id: string,
    content: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    blog: string,
    reactions: reaction[],
    replies: Comment[]
  ) {
    this.id = id
    this.content = content
    this.author = author
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.blog = blog
    this.reactions = reactions
    this.replies = replies
  }
}
