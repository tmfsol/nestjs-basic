import { Module } from '@nestjs/common';

import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [],
})
export class AppModule {}
