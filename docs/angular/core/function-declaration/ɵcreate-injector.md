---
kind: FunctionDeclaration
name: ɵcreateInjector
module: core
---

# ɵcreateInjector

## description

Create a new `Injector` which is configured using a `defType` of `InjectorType<any>`s.

```ts
function createInjector(
  defType: /* InjectorType<any> */ any,
  parent: Injector | null = null,
  additionalProviders: StaticProvider[] | null = null,
  name?: string
): Injector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/r3_injector.ts#L79-L86)

## publicApi

## Parameters

| Name                | Type               | Description |
| ------------------- | ------------------ | ----------- |
| defType             | `any`              |             |
| parent              | `Injector`         |             |
| additionalProviders | `StaticProvider[]` |             |
| name                | `string`           |             |
