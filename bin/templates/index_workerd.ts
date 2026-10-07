// This file serves only as a template and will be copied
// by the build script into the build directory.
// The imports in this file are relative to the target build
// directory so will show up as errors here.

// @ts-ignore we are ignoring this because TS is not aware
// of wasm?module import that will later be transformed by bundler
import wasmModule from "./opaque_bg.wasm?module";
import init from "./opaque";
export const ready = init({ module_or_path: wasmModule }).then(() => {
  // this .then callback only serves to drop the return value of the promise
  // so that the type of our export is Promise<void>
});
export * as client from "./client";
export * as server from "./server";
