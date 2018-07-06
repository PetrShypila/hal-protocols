declare module "alfred-protocols" {
  export type Languages = "english" | "german";

  export interface IScript {
    defaultLang: Languages;
    scripts: IDialogScript[];
  }

  export interface IUserRequest {
    sessionId: string;
    language: Languages;
    parameters: IInputParam[];
  }

  export interface IUserReply {
    language: Languages;
    sessionId: string;
    expected: string;
    expectationCount: number;
    received: IDialogScriptParamState[];
  }

  export interface IInputParam {
    name: string;
    value: string;
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
  }

}
