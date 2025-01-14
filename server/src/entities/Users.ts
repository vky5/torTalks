import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";

@Entity('Users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar", nullable: false })
  username: string;
  
  @Column({ type: "varchar" })
  name: string;
  
  @Column({ type: "varchar", nullable: false })
  password: string;
  
  @Column({ type: "timestamp", nullable: false })
  createdAt: Date;
  
  @BeforeInsert()
  setDate(){
    return this.createdAt = new Date();
  }
}
