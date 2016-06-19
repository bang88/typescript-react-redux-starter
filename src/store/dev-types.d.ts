/// <reference path="../../typings/index.d.ts" />

// Types for various development options.

// A global boolean that turns on or off devmode in the client.
declare let __DEV__: boolean;

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => Function;
}

// webpack-hot-loader sets some extra attributes on node's `module`if that
// module has been hot-loaded in the browser.
interface NodeModule {
  hot: { accept: Function };
}

interface Store<S> {
  asyncReducers: Object
}

//  declaration for webpack require function
// declare var require: {
//   // (path: string): T;
//   <T>(path: string): T;
//   (paths: string[], callback: (...modules: any[]) => void): any;
//   ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };


declare var require: {
  (id: string): any;
  resolve(id: string): string;
  cache: any;
  extensions: any;
  main: any;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

declare var module: {
  hot: any
}