---
kind: InterfaceDeclaration
name: ValueSansProvider
module: core
---

# ValueSansProvider

## description

Configures the `Injector` to return a value for a token.
Base for `ValueProvider` decorator.

```ts
interface ValueSansProvider {
  useValue: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L17-L22)

## publicApi

## Properties

| Name     | Type  | Description          |
| -------- | ----- | -------------------- |
| useValue | `any` | The value to inject. |
