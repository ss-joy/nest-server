import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get()
  sayOk() {
    return 'server is working';
  }
}
