import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserSecurityDto } from './dto/create-user-security.dto';
import { UpdateUserSecurityDto } from './dto/update-user-security.dto';
import { UserSecurity } from './entities/user-security.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { UserDetail } from '../user-details/entities/user-detail.entity';

@Injectable()
export class UserSecurityService {
  constructor(@InjectRepository(UserSecurity) private readonly userSecRepository: Repository<UserSecurity>) {}

  create(createUserSecurityDto: CreateUserSecurityDto) {
    return 'This action adds a new userSecurity';
  }

  async createAdmin(){
    let pass = encodePassword('@Admin1234')
     try {
        let data = this.userSecRepository.create(
          {
            email: 'wfsl-admin@gmail.com',
            password: pass,
            otp: '123456'
          }
        )
        return await this.userSecRepository.save(data)
     } catch (error) {
        return error
     }
  }

  async createUser(data: any){
    try {
       let saveData = this.userSecRepository.create(
         {
           email: data.email,
         }
       )
       return await this.userSecRepository.save(saveData)
    } catch (error) {
       return error
    }
  }

  async findOneByEmail(email: string){
     try {
        return await this.userSecRepository.createQueryBuilder('user-security')
        .select([
          'user-security'
        ])
        .where('user-security.email =:email', { email })
        .getOne()
     } catch (error) {
        return error
     }
  }

  findAll() {
    return `This action returns all userSecurity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSecurity`;
  }

  update(id: number, updateUserSecurityDto: UpdateUserSecurityDto) {
    return `This action updates a #${id} userSecurity`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSecurity`;
  }
}
