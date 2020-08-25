---
kind: InterfaceDeclaration
name: AbstractType
module: core
---

# AbstractType

## description

Represents an abstract class `T`, if applied to a concrete class it would stop being
instantiatable.

```ts
interface AbstractType<T> {
  prototype: T;

  // inherited from Function
  prototype: any;
  readonly length: number;
  arguments: any;
  caller: Function;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/type.ts#L33-L35)

## publicApi

## Properties

| Name      | Type | Description |
| --------- | ---- | ----------- |
| prototype | `T`  |             |
