/// <reference path="../../typings/index.d.ts" />

// Types for various development options.

// A global boolean that turns on or off devmode in the client.
declare let __DEV__: boolean;

// A hack for the Redux DevTools Chrome extension.
interface Window {
    devToolsExtension?: () => Function;
}

interface WebpackRequireEnsureCallback {
    (req: WebpackRequire): void
}

interface WebpackRequire {
    (id: string): any;
    (paths: string[],
        callback: (...modules: any[]) => void
    ): void;
    ensure(ids: string[],
        callback: WebpackRequireEnsureCallback,
        chunkName?: string
    ): void;
    context(directory: string,
        useSubDirectories?: boolean,
        regExp?: RegExp
    ): WebpackContext;
}

interface WebpackContext extends WebpackRequire {
    keys(): string[];
}

declare var require: WebpackRequire;

declare var module: {
    hot: { accept: Function };
}
