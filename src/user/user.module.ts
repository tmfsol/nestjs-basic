import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EmployeeService } from 'src/user/employee.service';
import { StoreModule } from 'src/store/store.module';

console.log(1222222222, StoreModule);

function fff(userServiceUseClass: any, userServiceUseValue: any) {
  console.log(123456, userServiceUseValue);
  console.log(123457, userServiceUseClass);

  return 1;
}

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    EmployeeService,
    {
      provide: 'USER_SERVICE_USE_CLASS',
      useClass: UserService,
    },

    {
      provide: 'USER_SERVICE_USE_VALUE',
      useValue: {
        name: 'tandm',
        age: 18,
      },
    },

    {
      provide: 'USER_SERVICE_USE_FACTORY',
      useFactory: fff,
      inject: [
        { token: 'USER_SERVICE_USE_CLASS', optional: true },
        { token: 'USER_SERVICE_USE_VALUE', optional: true },
      ],
    },
  ],
})
export class UserModule {}
