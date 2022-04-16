import { Controller, Get } from '@nestjs/common'

@Controller('status')
export class StatusController {
  @Get()
  status() {
    return {
      message: 'ok',
    }
  }
}
