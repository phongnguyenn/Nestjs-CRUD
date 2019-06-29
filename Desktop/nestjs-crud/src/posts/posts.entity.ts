import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity()
export class Posts {
  @ObjectIdColumn()
  _id: string
  @Column()
  title: string
  @Column()
  content: string
}