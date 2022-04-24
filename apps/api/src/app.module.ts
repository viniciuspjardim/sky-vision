import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { StatusModule } from './status/status.module'

@Module({
  imports: [UsersModule, StatusModule],
  providers: [],
})
export class AppModule {}
