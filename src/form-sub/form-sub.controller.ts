import { Body, Controller, Post } from '@nestjs/common';

@Controller('form-sub')
export class FormSubController {
  @Post()
  receiveFormData(@Body() body) {
    const resp = `
    <h1>Form Submitted!!!!</h1>
    <p>Here is what I received</p>
         ${JSON.stringify(body)}
    `;

    return resp;
  }
}
