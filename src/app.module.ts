import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormSubModule } from './form-sub/form-sub.module';
import { TestingModule } from '@nestjs/testing';

@Module({
  imports: [FormSubModule, TestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
