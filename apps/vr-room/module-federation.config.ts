import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'vr-room',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
