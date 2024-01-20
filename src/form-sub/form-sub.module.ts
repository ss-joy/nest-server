import { Module } from '@nestjs/common';
import { FormSubController } from './form-sub.controller';

@Module({
  controllers: [FormSubController],
})
export class FormSubModule {}
