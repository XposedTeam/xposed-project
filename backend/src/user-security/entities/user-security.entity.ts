import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserSecurity {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column()
    email: string

    @Column({nullable: true, default: null})
    password: string

    @Column({nullable: true, default: null})
    otp: string

    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",     
     })
     datecreated: Date

    @UpdateDateColumn({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
     })
     dateupdated: Date

}
