import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  sayHi() {
    console.log('Hi, I am EmployeeService!');
  }
}
