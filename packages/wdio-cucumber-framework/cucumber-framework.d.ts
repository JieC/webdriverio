import { SourceLocation, ScenarioResult } from "cucumber";

declare module "webdriverio" {
    interface HookFunctions extends CucumberHookFunctions {}
    interface Options {
        cucumberOpts?: CucumberOptions;
    }
}

declare module "@wdio/sync" {
    interface HookFunctions extends CucumberHookFunctions {}
    interface Options {
        cucumberOpts?: CucumberOptions;
    }
}

interface CucumberHookResult extends ScenarioResult {
    exception?: Error
}
interface CucumberHookObject {
    [key: string]: any;
}

interface CucumberHookFunctions {
    beforeFeature?(uri: string, feature: CucumberHookObject): void;
    beforeScenario?(uri: string, feature: CucumberHookObject, scenario: CucumberHookObject): void;
    beforeStep?(uri: string, feature: CucumberHookObject, scenario: CucumberHookObject, step: CucumberHookObject, sourceLocation: SourceLocation): void;
    afterStep?(uri: string, feature: CucumberHookObject, scenario: CucumberHookObject, step: CucumberHookObject, result: CucumberHookResult, sourceLocation: SourceLocation): void;
    afterScenario?(uri: string, feature: CucumberHookObject, scenario: CucumberHookObject, result: CucumberHookResult, sourceLocation: SourceLocation): void;
    afterFeature?(uri: string, feature: CucumberHookObject): void;
}

interface CucumberOptions {
    require?: string[];
    backtrace?: boolean;
    requireModule?: (string | object)[];
    dryRun?: boolean;
    failFast?: boolean;
    format?: string[];
    colors?: boolean;
    snippets?: boolean;
    source?: boolean;
    profile?: string[];
    strict?: boolean;
    tagExpression?: string;
    timeout?: number;
    ignoreUndefinedDefinitions?: boolean;
}
