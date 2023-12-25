import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MembersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
