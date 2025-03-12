import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Starting server on port 3000');
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // TODO: limit to only the frontend domain
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
