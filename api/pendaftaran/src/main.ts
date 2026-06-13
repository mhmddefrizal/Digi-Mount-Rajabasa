import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // tambahkan prefix 'api'
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 3002;
  await app.listen(port, 'localhost');

  console.log(
    `Service Pendaftaran sedang berjalan di: http://localhost:${port}/api`,
  );
}
void bootstrap();
