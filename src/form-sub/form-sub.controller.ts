import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('form-sub')
export class FormSubController {
  @Post()
  receiveFormData(@Body() body, @Req() req: Request) {
    const resp = `
    <h1>Form Submitted!!!!</h1>
    <p>Here is what I received</p>
    <ul>
      <li> ${req.hostname}</li>
      <li> ${new Date().toLocaleDateString()}</li>
      <li> ${new Date().toLocaleTimeString()}</li>
      <li>${JSON.stringify(body)}</li>
    </ul>
    `;
    console.log('----------------------------');
    console.log(resp);
    console.log('-----------------------------');
    return resp;
  }
}
