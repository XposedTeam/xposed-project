import { Controller, Request, Post, UseGuards, Get, Body, Param, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('login')
    login(@Body() userdata: any) {
      return this.authService.login(userdata);
    }
    
    @Post('registerAdmin')
    registerAdmin(){
      return this.authService.registerAdmin()
    }

    @Get('decodeToken/:token')
    decodeToken(@Param('token') token: string){
      return this.authService.getDecoded(token)
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {}

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req, @Res() res) {
      return this.authService.googleLogin(req, res)
    }

    // @Post('signUp')
    // async signUp() {
    //   return this.authService.signUp();
    // }
    
    @Post('updateOtp')
    verifyOtp(@Request() req){
      return this.authService.otpVerified(req.body.id)
    }
}
