import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormSubModule } from './form-sub/form-sub.module';

@Module({
  imports: [FormSubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
