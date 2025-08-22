import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RideService {
  constructor (private prisma: PrismaService) {}

  create(createRideDto: CreateRideDto) {
    const { date, ...restOfData } = createRideDto
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

  update(id: number, updateRideDto: UpdateRideDto) {
    if (updateRideDto.date) {
      const { date, ...restOfData } = updateRideDto;
      return this.prisma.ride.update({
        where: { id },
        data: {
          ...restOfData,
          date: new Date(date),
        }
      })
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
  

