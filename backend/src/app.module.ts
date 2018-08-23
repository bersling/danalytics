import {MiddlewaresConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';

import {UserModule} from './user/user.module';
import {WelcomeModule} from './welcome/welcome.module';
import {AnimalModule} from './animal/animal.module';
import {ConfigModule} from './config/config.module';
import {AuthModule} from './auth/auth.module';
import {AnimalListModule} from './animal-list/animal-list.module';
import {JWTMiddleware} from './auth/jwt.middleware';
import { ErrorMetricsModule } from './metrics/errors/error-metrics.module';

@Module({
  modules: [UserModule, AuthModule, AnimalModule, AnimalListModule, WelcomeModule, ConfigModule, ErrorMetricsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer) {
    consumer.apply(JWTMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
