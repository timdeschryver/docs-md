---
kind: ClassDeclaration
name: ApplicationInitStatus
module: core
---

# ApplicationInitStatus

## description

A class that reflects the state of running {@link APP_INITIALIZER} functions.

```ts
class ApplicationInitStatus {
  public readonly donePromise: Promise<any>;
  public readonly done = false;

  runInitializers();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_init.ts#L38-L90)

## publicApi

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| donePromise | `Promise<any>` |             |
| done        | `false`        |             |

## Methods

### runInitializers

```ts
runInitializers();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_init.ts#L56-L89)
