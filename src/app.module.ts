import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RideModule } from './ride/ride.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, RideModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
