import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSecurityService } from './user-security.service';
import { CreateUserSecurityDto } from './dto/create-user-security.dto';
import { UpdateUserSecurityDto } from './dto/update-user-security.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Security')
@Controller('user-security')
export class UserSecurityController {
  constructor(private readonly userSecurityService: UserSecurityService) {}

  @Post()
  create(@Body() createUserSecurityDto: CreateUserSecurityDto) {
    return this.userSecurityService.create(createUserSecurityDto);
  }

  @Get()
  findAll() {
    return this.userSecurityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSecurityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSecurityDto: UpdateUserSecurityDto) {
    return this.userSecurityService.update(+id, updateUserSecurityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSecurityService.remove(+id);
  }
}
