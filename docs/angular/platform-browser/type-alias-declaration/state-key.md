---
kind: TypeAliasDeclaration
name: StateKey
module: platform-browser
---

# StateKey

## description

A type-safe key to use with `TransferState`.

Example:

```
const COUNTER_KEY = makeStateKey<number>('counter');
let value = 10;

transferState.set(COUNTER_KEY, value);
```

```ts
export type StateKey<T> = string & { __not_a_string: never };
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L48-L48)

## publicApi
