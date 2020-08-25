---
kind: InterfaceDeclaration
name: Inject
module: core
---

# Inject

## description

Type of the Inject metadata.

```ts
interface Inject {
  token: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/metadata.ts#L45-L50)

## publicApi

## Properties

| Name  | Type  | Description                                                                       |
| ----- | ----- | --------------------------------------------------------------------------------- |
| token | `any` | A [DI token](guide/glossary#di-token) that maps to the dependency to be injected. |
