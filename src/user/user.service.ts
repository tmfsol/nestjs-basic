import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

import { EmployeeService } from 'src/user/employee.service';

@Injectable()
export class UserService {
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly employeeService: EmployeeService,

    // private readonly storeService: StoreService,
  ) {}
  sayHi() {
    // Trong nestjs, có 2 cách lấy service trong class đó là thông qua module ref, hoặc inject vào.

    // Cách 1:
    // const employeeService = this.moduleRef.get(EmployeeService);
    // return employeeService.sayHi();

    // Cách 2:
    this.employeeService.sayHi();

    // console.log(
    //   // Chia sẻ giữ các module
    //   this.storeService.save({
    //     name: '123',
    //     age: 18888,
    //   }),
    // );

    return {};
  }
}
