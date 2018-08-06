declare module "hal-protocols" {

  export interface IApiUtterance {
    sessionId: string;
    utterance: string;
  }

  export interface IApiNluOutput {
    sessionId: string;
    language: Languages;
    intents: IIntent[];
  }

  export interface IIntent {
    name: string;
    value: string[];
  }

  export interface IApiManagerOutput {
    language: Languages;
    sessionId: string;
    expect: string;
    expectationCount: number;
    received: IDialogScriptParamState[];
  }
  export type Languages = "english" | "german";

  export interface IScript {
    defaultLang: Languages;
    scripts: IDialogScript[];
  }

  export interface IDialogScript {
    name: string;
    params: IDialogScriptParam[];
  }

  export interface IDialogScriptParam {
    name: string;
  }

  export interface IDialogScriptParamState extends IDialogScriptParam {
    requestCount: number;
    value: string[];
  }

}
