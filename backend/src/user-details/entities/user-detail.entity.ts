import { UserSecurity } from "../../user-security/entities/user-security.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserDetail {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column()
    fname: string

    @Column()
    mname: string

    @Column()
    lname: string

    @Column()
    type: number

    @Column()
    status: boolean

    @OneToOne(type => UserSecurity) 
    @JoinColumn({referencedColumnName: "id"}) 
    userSec: number;

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
