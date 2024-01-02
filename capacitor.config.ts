import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.github.etherealodyssey.dashnswing',
  appName: 'ethereal-odyssey',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
