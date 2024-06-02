import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from './utils/bcrypt';
import { UserSecurityService } from '../user-security/user-security.service';
import { UserDetailsService } from 'src/user-details/user-details.service';

@Injectable()
export class AuthService {
    constructor(
        private userSecService: UserSecurityService,
        private userDetailService: UserDetailsService,
        private jwtService: JwtService
      ) {}

      async login(userdata: any) {  
        const user_sec = await this.userSecService.findOneByEmail(userdata.email)
        if(user_sec){
        const matched = comparePassword(userdata.password, user_sec.password);
            if(matched){
                    const user = await this.userDetailService.findOne(user_sec.id)
                    const payload = { email: user.email, user: user };
                    
                    return {
                      token: this.jwtService.sign(payload),
                      user: user,
                    }; 
                    
            }
            else{
              return new HttpException('Password not match', HttpStatus.CONFLICT);
            }
       }
       else{
        return new HttpException('User Not Found', HttpStatus.NOT_FOUND);
       }
    }

      // async signUp() {
      //   // const cred = await this.usersService.create(user);
      //   // const token = Math.floor(100000 + Math.random() * 9000)
      //   // const emailUser = { email: cred.email, OTP: token, name: cred.userDetails.fname + " " + cred.userDetails.lname }

      //       this.mailService.sendUserConfirmation()
      //    }

    async registerAdmin(){
      try {
        let sec = await this.userSecService.createAdmin()
        let details = await this.userDetailService.createAdmin(sec.id)

        if(details){
          return {
              status: HttpStatus.CREATED,
              msg: 'Successfully created the admin'
          }
        }
        else{
          return {
              status: HttpStatus.BAD_REQUEST,
              msg: 'Error creating the admin'
          }  
        }
      } catch (error) {
        return error
      }
    }

    async googleLogin(req, res) {
      if (!req.user) {
        return res.status(400).json({ message: 'No user from Google' });
      }
    
      const user_sec = await this.userSecService.findOneByEmail(req.user.email)
      if(!user_sec){
        let secFormData = {
           email: req.user.email
        }
        let sec = await this.userSecService.createUser(secFormData)
        let formData = {
          id: sec.id,
          fname: req.user.firstName,
          mname: '',
          lname: req.user.lastName,
          type: 2,
          picture: req.user.picture,
          userSecId: sec.id
        }
        await this.userDetailService.createUser(formData)

        const payload = { email: req.user.email, user: formData };
   
        const token = this.jwtService.sign(payload);
        const stringUser = JSON.stringify(formData)

        // Redirect back to frontend with token as query parameter
        return res.redirect(process.env.CLIENT_URL + `?token=${token}&user=${stringUser}`);
        // return res.redirect( 'https://wfsl.vercel.app' + `?token=${token}&user=${stringUser}`)
      }
      else{
        let formData = {
          id:  user_sec.id,
          fname: req.user.firstName,
          mname: '',
          lname: req.user.lastName,
          type: 2,
          picture: req.user.picture,
        }

        const payload = { email: req.user.email, user: formData };
   
        const token = this.jwtService.sign(payload);
        const stringUser = JSON.stringify(formData)

        // Redirect back to frontend with token as query parameter
        return res.redirect(process.env.CLIENT_URL + `?token=${token}&user=${stringUser}`);
        // return res.redirect( 'https://wfsl.vercel.app' + `?token=${token}&user=${stringUser}`)
      }
    }

    getDecoded(token: string) {
      // const decodedJwtAccessToken = this.jwtService.decode(signedJwtAccessToken);
      return this.jwtService.decode(token);
    }
      
    async otpVerified(id: number){
        // const user = await this.usersService.findOne(id);
        //   if(user){
        //       this.usersService.updateOtp(id);
        //   }
    }
}
