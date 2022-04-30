import { Injectable } from '@nestjs/common'
import { prismaClient } from '../database/prisma-client'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const user = await prismaClient.user.create({ data: createUserDto })
    return user
  }

  async findAll() {
    const users = await prismaClient.user.findMany()
    return users
  }

  async findOne(id: string) {
    const user = await prismaClient.user.findUnique({ where: { id } })
    return user
  }

  async findOneByEmail(email: string) {
    const user = await prismaClient.user.findUnique({ where: { email } })
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await prismaClient.user.update({
      where: { id },
      data: updateUserDto,
    })

    return user
  }

  async remove(id: string) {
    const user = await prismaClient.user.delete({ where: { id } })
    return user
  }
}
