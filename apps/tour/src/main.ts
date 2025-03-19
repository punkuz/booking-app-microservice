import { NestFactory } from '@nestjs/core';
import { TourModule } from './tour.module';

async function bootstrap() {
  const app = await NestFactory.create(TourModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
