import { Module } from '@nestjs/common'
import { StatusController } from './status/status.controller'

@Module({
  imports: [],
  controllers: [StatusController],
  providers: [],
})
export class AppModule {}
