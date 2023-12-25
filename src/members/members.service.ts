import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.prismaService.members.create({
      data: createMemberDto,
    });
  }

  findAll() {
    return this.prismaService.members.findMany();
  }

  findOne(id: string) {
    return this.prismaService.members.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.prismaService.members.update({
      where: { id },
      data: updateMemberDto,
    });
  }

  remove(id: string) {
    return this.prismaService.members.delete({
      where: { id },
    });
  }
}
