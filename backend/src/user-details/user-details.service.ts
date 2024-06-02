import { Injectable } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetail } from './entities/user-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserDetailsService {
  constructor(@InjectRepository(UserDetail) private readonly userDetailsRepository: Repository<UserDetail>) {}
  
  create(createUserDetailDto: CreateUserDetailDto) {
    return 'This action adds a new userDetail';
  }

  async createAdmin(userSecId: any){
      try {
          let data = this.userDetailsRepository.create(
            {
              fname: 'Administrator',
              mname: 'Admin',
              lname: 'Administrator',
              type: 1,
              status: true,
              userSec: userSecId
            }
         )
         return await this.userDetailsRepository.save(data)
      } catch (error) {
        return error
      }
  }

  async createUser(data: any){
      try {
        let saveData = this.userDetailsRepository.create(
          {
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            type: data.type,
            status: true,
            userSec: data.userSecId
          }
      )
      return await this.userDetailsRepository.save(saveData)
    } catch (error) {
      return error
    }
  }

  findAll() {
    return `This action returns all userDetails`;
  }

  findOne(id: number) {
    try {
      return this.userDetailsRepository.createQueryBuilder('user_detail')
      .where('user_detail.id =:id', { id })
      .getOne()
    } catch (error) {
       return error
    }
  }

  update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
    return `This action updates a #${id} userDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDetail`;
  }
}
