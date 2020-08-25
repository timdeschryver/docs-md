---
kind: FunctionDeclaration
name: provideMockActions
module: testing
---

# provideMockActions

```ts
function provideMockActions(
  factoryOrSource: (() => Observable<any>) | Observable<any>
): Provider;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/effects/testing/src/testing.ts#L7-L20)

## Parameters

| Name            | Type                     | Description      |
| --------------- | ------------------------ | ---------------- |
| factoryOrSource | `(() => Observable<any>) | Observable<any>` |  |

## Overloads

```ts
function provideMockActions(source: Observable<any>): Provider;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/effects/testing/src/testing.ts#L5-L5)

### Parameters

| Name   | Type              | Description |
| ------ | ----------------- | ----------- |
| source | `Observable<any>` |             |

```ts
function provideMockActions(factory: () => Observable<any>): Provider;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/effects/testing/src/testing.ts#L6-L6)

### Parameters

| Name    | Type                    | Description |
| ------- | ----------------------- | ----------- |
| factory | `() => Observable<any>` |             |
