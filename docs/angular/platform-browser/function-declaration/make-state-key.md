---
kind: FunctionDeclaration
name: makeStateKey
module: platform-browser
---

# makeStateKey

## description

Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.

Example:

```
const COUNTER_KEY = makeStateKey<number>('counter');
let value = 10;

transferState.set(COUNTER_KEY, value);
```

```ts
function makeStateKey<T = void>(key: string): StateKey<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L64-L66)

## publicApi

## Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| key  | `string` |             |
