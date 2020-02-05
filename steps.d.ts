/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type searchFlight = typeof import('./pages\searchflight.js');
type PuppeteerHelper = import('./puppeteerhelper_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, searchFlight: searchFlight }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: searchFlight }
  interface Methods extends CodeceptJS.Puppeteer, PuppeteerHelper, CodeceptJS.ApiDataFactory {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
