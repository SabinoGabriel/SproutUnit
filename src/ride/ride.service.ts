import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RideService {
  constructor(private prisma: PrismaService) {}

  async create(createRideDto: CreateRideDto) {
    const { date, ...restOfData } = createRideDto;
    const userId = createRideDto.userId;
    const exist = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!exist) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return this.prisma.ride.create({
      data: {
        ...restOfData,
        date: new Date(date),
      },
    });
  }

  findAll() {
    return this.prisma.ride.findMany();
  }

  findOne(id: number) {
    return this.prisma.ride.findUnique({
      where: { id },
    });
  }

  findByUserId(userId: number) {
    return this.prisma.ride.findMany({
      where: { userId },
    });
  }

  update(id: number, updateRideDto: UpdateRideDto) {
    if ('id' in updateRideDto) {
      return {
        message: 'Não é possível alterar o responsável pela viagem',
        error: 'void',
        // eslint-disable-next-line prettier/prettier
        statusCode: 200
      };
    }
    if ('userId' in updateRideDto) {
      throw new BadRequestException(
        'Não é possível alterar o responsável pela viagem',
      );
    }
    if (updateRideDto.date) {
      const { date, ...restOfData } = updateRideDto;
      return this.prisma.ride.update({
        where: { id },
        data: {
          ...restOfData,
          date: new Date(date),
        },
      });
    }

    return this.prisma.ride.update({
      where: { id },
      data: updateRideDto,
    });
  }

  remove(id: number) {
    return this.prisma.ride.delete({
      where: { id },
    });
  }
}
