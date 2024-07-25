import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true
    }
  ))

  const options = new DocumentBuilder()
  .setTitle('User Database')
  .setDescription('User Database API')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document);

  fs.writeFileSync('swagger-config.json', JSON.stringify(document, null, 2));
  await app.listen(3003, () => console.info('app listening on port: ', 3003));
}
bootstrap();
