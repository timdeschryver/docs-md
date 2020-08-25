---
kind: ClassDeclaration
name: Testability
module: core
---

# Testability

## description

The Testability service provides testing hooks that can be accessed from
the browser and by services such as Protractor. Each bootstrapped Angular
application on the page will have an instance of Testability.

```ts
class Testability implements PublicTestability {
  increasePendingRequestCount(): number;
  decreasePendingRequestCount(): number;
  isStable(): boolean;
  whenStable(doneCb: Function, timeout?: number, updateCb?: Function): void;
  getPendingRequestCount(): number;
  findProviders(using: any, provider: string, exactMatch: boolean): any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L57-L227)

## publicApi

## Methods

### increasePendingRequestCount

#### description (#increasePendingRequestCount-description)

Increases the number of pending request

```ts
increasePendingRequestCount(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L105-L109)

#### deprecated (#increasePendingRequestCount-deprecated)

pending requests are now tracked with zones.

### decreasePendingRequestCount

#### description (#decreasePendingRequestCount-description)

Decreases the number of pending request

```ts
decreasePendingRequestCount(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L115-L122)

#### deprecated (#decreasePendingRequestCount-deprecated)

pending requests are now tracked with zones

### isStable

#### description (#isStable-description)

Whether an associated application is stable

```ts
isStable(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L127-L129)

### whenStable

#### description (#whenStable-description)

Wait for the application to be stable with a timeout. If the timeout is reached before that
happens, the callback receives a list of the macro tasks that were pending, otherwise null.

```ts
whenStable(doneCb: Function, timeout?: number, updateCb?: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L198-L207)

#### Parameters (#whenStable-parameters)

| Name     | Type       | Description                                                               |
| -------- | ---------- | ------------------------------------------------------------------------- |
| doneCb   | `Function` | The callback to invoke when Angular is stable or the timeout expires      |
| timeout  | `number`   | Optional. The maximum time to wait for Angular to become stable. If not   |
| updateCb | `Function` | Optional. If specified, this callback will be invoked whenever the set of |

### getPendingRequestCount

#### description (#getPendingRequestCount-description)

Get the number of pending requests

```ts
getPendingRequestCount(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L213-L215)

#### deprecated (#getPendingRequestCount-deprecated)

pending requests are now tracked with zones

### findProviders

#### description (#findProviders-description)

Find providers by name

```ts
findProviders(using: any, provider: string, exactMatch: boolean): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L223-L226)

#### Parameters (#findProviders-parameters)

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| using      | `any`     | The root element to search from |
| provider   | `string`  | The name of binding variable    |
| exactMatch | `boolean` | Whether using exactMatch        |
