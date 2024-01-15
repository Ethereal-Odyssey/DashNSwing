import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.github.etherealodyssey.arc',
  appName: 'Arc',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
