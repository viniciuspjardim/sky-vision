import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = 3310
  console.info(`🚀 Starting API on http://localhost:${PORT}`)
  await app.listen(PORT)
}
bootstrap()
