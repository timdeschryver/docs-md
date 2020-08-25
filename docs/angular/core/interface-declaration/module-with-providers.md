---
kind: InterfaceDeclaration
name: ModuleWithProviders
module: core
---

# ModuleWithProviders

## description

A wrapper around an NgModule that associates it with [providers](guide/glossary#provider "Definition"). Usage without a generic type is deprecated.

```ts
interface ModuleWithProviders<T> {
  ngModule: Type<T>;
  providers?: Provider[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/ng_module.ts#L90-L93)

## see

[Deprecations](guide/deprecations#modulewithproviders-type-without-a-generic)

## publicApi

## Properties

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| ngModule  | `Type<T>`    |             |
| providers | `Provider[]` |             |
