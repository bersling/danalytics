import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser = require('body-parser');
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json());
  app.use(cors());
  const port = 4242;
  await app.listen(port);
  console.log(`listening on ${port}`);
}
bootstrap();
