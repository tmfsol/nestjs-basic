import { Inject, Injectable } from '@nestjs/common';
import { appendFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { StoreFeatureConfig, StoreRootConfig } from 'src/store/store.module';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_ROOT_CONFIG_TOKEN')
    private readonly storeRootConfig: StoreRootConfig,

    @Inject('STORE_FEATURE_CONFIG_TOKEN')
    private readonly storeFeatureConfig: StoreFeatureConfig,
  ) {
    if (!existsSync(this.storeRootConfig.dirname)) {
      mkdirSync(this.storeRootConfig.dirname);
    }
  }

  save(data: any) {
    appendFileSync(
      join(this.storeRootConfig.dirname, this.storeFeatureConfig.filename),
      JSON.stringify(data),
    );
  }
}
