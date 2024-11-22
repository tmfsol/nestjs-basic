import { Controller, Get, Inject } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly moduleRef: ModuleRef,

    // private readonly storeService: StoreService,

    private readonly userService: UserService,

    @Inject('USER_SERVICE_USE_CLASS')
    private readonly moduleServiceUseClass: UserService,

    @Inject('USER_SERVICE_USE_VALUE')
    private readonly moduleServiceUseValue: any,

    @Inject('USER_SERVICE_USE_FACTORY')
    private readonly moduleServiceUseFactory: number,
  ) {}

  @Get('/')
  sayHi() {
    const userService = this.moduleRef.get(UserService);
    userService.sayHi();
    this.userService.sayHi();

    return {};
  }

  @Get('/provider-use-class')
  providerUseClass() {
    const userServiceUseClass = this.moduleRef.get('USER_SERVICE_USE_CLASS');
    userServiceUseClass.sayHi();
    this.moduleServiceUseClass.sayHi();

    return {};
  }

  @Get('/provider-use-value')
  providerUseValue() {
    const userServiceUseValue = this.moduleRef.get('USER_SERVICE_USE_VALUE');

    console.log(userServiceUseValue);
    console.log(this.moduleServiceUseValue);

    return {};
  }

  @Get('/provider-use-factory')
  providerUseFactory() {
    const userServiceUseFactory = this.moduleRef.get(
      'USER_SERVICE_USE_FACTORY',
    );
    // this.storeService.save({ name: 'tandm', age: 18 });

    console.log(userServiceUseFactory);
    console.log(this.moduleServiceUseFactory);

    return {};
  }
}
