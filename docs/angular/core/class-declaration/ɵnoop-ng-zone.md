---
kind: ClassDeclaration
name: ɵNoopNgZone
module: core
---

# ɵNoopNgZone

## description

Provides a noop implementation of `NgZone` which does nothing. This zone requires explicit calls
to framework to perform rendering.

```ts
class NoopNgZone implements NgZone {
  readonly hasPendingMicrotasks: boolean = false;
  readonly hasPendingMacrotasks: boolean = false;
  readonly isStable: boolean = true;
  readonly onUnstable: EventEmitter<any> = new EventEmitter();
  readonly onMicrotaskEmpty: EventEmitter<any> = new EventEmitter();
  readonly onStable: EventEmitter<any> = new EventEmitter();
  readonly onError: EventEmitter<any> = new EventEmitter();

  run(fn: (...args: any[]) => any, applyThis?: any, applyArgs?: any): any;
  runGuarded(
    fn: (...args: any[]) => any,
    applyThis?: any,
    applyArgs?: any
  ): any;
  runOutsideAngular(fn: (...args: any[]) => any): any;
  runTask(
    fn: (...args: any[]) => any,
    applyThis?: any,
    applyArgs?: any,
    name?: string
  ): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L382-L406)

## Properties

| Name                 | Type                | Description |
| -------------------- | ------------------- | ----------- |
| hasPendingMicrotasks | `boolean`           |             |
| hasPendingMacrotasks | `boolean`           |             |
| isStable             | `boolean`           |             |
| onUnstable           | `EventEmitter<any>` |             |
| onMicrotaskEmpty     | `EventEmitter<any>` |             |
| onStable             | `EventEmitter<any>` |             |
| onError              | `EventEmitter<any>` |             |

## Methods

### run

```ts
run(fn: (...args: any[]) => any, applyThis?: any, applyArgs?: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L391-L393)

#### Parameters (#run-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| fn        | `(...args: any[]) => any` |             |
| applyThis | `any`                     |             |
| applyArgs | `any`                     |             |

### runGuarded

```ts
runGuarded(fn: (...args: any[]) => any, applyThis?: any, applyArgs?: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L395-L397)

#### Parameters (#runGuarded-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| fn        | `(...args: any[]) => any` |             |
| applyThis | `any`                     |             |
| applyArgs | `any`                     |             |

### runOutsideAngular

```ts
runOutsideAngular(fn: (...args: any[]) => any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L399-L401)

#### Parameters (#runOutsideAngular-parameters)

| Name | Type                      | Description |
| ---- | ------------------------- | ----------- |
| fn   | `(...args: any[]) => any` |             |

### runTask

```ts
runTask(fn: (...args: any[]) => any, applyThis?: any, applyArgs?: any, name?: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L403-L405)

#### Parameters (#runTask-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| fn        | `(...args: any[]) => any` |             |
| applyThis | `any`                     |             |
| applyArgs | `any`                     |             |
| name      | `string`                  |             |
