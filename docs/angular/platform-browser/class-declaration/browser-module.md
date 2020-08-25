---
kind: ClassDeclaration
name: BrowserModule
module: platform-browser
---

# BrowserModule

## description

Exports required infrastructure for all Angular apps.
Included by default in all Angular apps created with the CLI
`new` command.
Re-exports `CommonModule` and `ApplicationModule`, making their
exports and providers available to all apps.

```ts
class BrowserModule {
  static withServerTransition(params: {
    appId: string;
  }): ModuleWithProviders<BrowserModule>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser.ts#L103-L130)

## publicApi

## Methods

### withServerTransition

#### description (#withServerTransition-description)

Configures a browser-based app to transition from a server-rendered app, if
one is present on the page.

```ts
static withServerTransition(params: {appId: string}): ModuleWithProviders<BrowserModule>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser.ts#L120-L129)

#### Parameters (#withServerTransition-parameters)

| Name   | Type                 | Description                                                   |
| ------ | -------------------- | ------------------------------------------------------------- |
| params | `{ appId: string; }` | An object containing an identifier for the app to transition. |

#### returns (#withServerTransition-returns)

The reconfigured `BrowserModule` to import into the app's root `AppModule`.
