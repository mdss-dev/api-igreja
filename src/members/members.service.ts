import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.prismaService.member.create({
      data: createMemberDto,
    });
  }

  findAll() {
    return this.prismaService.member.findMany();
  }

  findOne(id: string) {
    return this.prismaService.member.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.prismaService.member.update({
      where: { id },
      data: updateMemberDto,
    });
  }

  remove(id: string) {
    return this.prismaService.member.delete({
      where: { id },
    });
  }
}
