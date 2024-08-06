import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedDomains = env.ALLOWED_UI_DOMAINS.split(',');

  const corsOptions: CorsOptions = {
    origin: allowedDomains,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('Note Management Backend API')
    .setDescription('This is the Note Management Backend API that exposes REST services')
    .setVersion('1.0')
    .addTag('note-management-backend-api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(env.PORT);
}
bootstrap();
