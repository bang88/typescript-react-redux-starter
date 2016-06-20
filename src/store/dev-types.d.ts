/// <reference path="../../typings/index.d.ts" />

// Types for various development options.

// A global boolean that turns on or off devmode in the client.
declare let __DEV__: boolean;

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => Function;
}

declare var require: {
  (id: string): any;
  resolve(id: string): string;
  cache: any;
  extensions: any;
  main: any;
  ensure: (paths: string[],
    callback: (require: <T>(path: string) => T) => void) => void;
};

declare var module: {
  hot: { accept: Function };
}
