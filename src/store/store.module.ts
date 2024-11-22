import { DynamicModule, Module } from '@nestjs/common';

import { StoreService } from 'src/store/store.service';

export interface StoreRootConfig {
  dirname: string;
}

export interface StoreFeatureConfig {
  filename: string;
}

export interface StoreConfig extends StoreRootConfig, StoreFeatureConfig {}

@Module({})
export class StoreModule {
  private static storeRootConfig = {
    dirname: 'store',
  };
  private static storeFeatureConfig = {
    filename: 'data.json',
  };

  static register(storeConfig?: StoreConfig): DynamicModule {
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: 'STORE_CONFIG_TOKEN',
          useValue: {
            ...StoreModule.storeRootConfig,
            ...StoreModule.storeFeatureConfig,
            ...storeConfig,
          },
        },
      ],
      exports: [StoreService],
    };
  }

  // static forRoot(storeRootConfig?: StoreRootConfig): DynamicModule {
  //   StoreModule.storeRootConfig = {
  //     ...StoreModule.storeRootConfig,
  //     ...storeRootConfig,
  //   };

  //   return {
  //     module: StoreModule,
  //     providers: [
  //       StoreService,
  //       {
  //         provide: 'STORE_ROOT_CONFIG_TOKEN',
  //         useValue: StoreModule.storeRootConfig,
  //       },
  //     ],
  //     exports: [StoreService, 'STORE_ROOT_CONFIG_TOKEN'],
  //   };
  // }

  // static forFeature(storeFeatureConfig?: StoreFeatureConfig): DynamicModule {
  //   StoreModule.storeFeatureConfig = {
  //     ...StoreModule.storeFeatureConfig,
  //     ...storeFeatureConfig,
  //   };

  //   return {
  //     module: StoreModule,
  //     providers: [
  //       StoreService,
  //       {
  //         provide: 'STORE_FEATURE_CONFIG_TOKEN',
  //         useValue: StoreModule.storeFeatureConfig,
  //       },
  //     ],
  //     exports: [StoreService, 'STORE_ROOT_CONFIG_TOKEN'],
  //   };
  // }
}
