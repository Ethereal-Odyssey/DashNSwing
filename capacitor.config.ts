import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.github.etherealodyssey.dashnswing",
  appName: "Dash 'N' Swing",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
