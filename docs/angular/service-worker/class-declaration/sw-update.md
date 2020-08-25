---
kind: ClassDeclaration
name: SwUpdate
module: service-worker
---

# SwUpdate

## description

Subscribe to update notifications from the Service Worker, trigger update
checks, and forcibly activate updates.

```ts
class SwUpdate {
  readonly available: Observable<UpdateAvailableEvent>;
  readonly activated: Observable<UpdateActivatedEvent>;

  checkForUpdate(): Promise<void>;
  activateUpdate(): Promise<void>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/update.ts#L22-L67)

## publicApi

## Properties

| Name      | Type  | Description                                                                               |
| --------- | ----- | ----------------------------------------------------------------------------------------- |
| available | `any` | Emits an `UpdateAvailableEvent` event whenever a new app version is available.            |
| activated | `any` | Emits an `UpdateActivatedEvent` event whenever the app has been updated to a new version. |

## Methods

### checkForUpdate

```ts
checkForUpdate(): Promise<void>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/update.ts#L52-L58)

### activateUpdate

```ts
activateUpdate(): Promise<void>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/update.ts#L60-L66)
