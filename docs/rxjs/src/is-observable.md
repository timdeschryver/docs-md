---
kind: FunctionDeclaration
name: isObservable
module: src
---

# isObservable

## description

Tests to see if the object is an RxJS {@link Observable}

```ts
function isObservable<T>(obj: any): obj is Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/isObservable.ts#L7-L9)

## Parameters

| Name | Type  | Description        |
| ---- | ----- | ------------------ |
| obj  | `any` | the object to test |
