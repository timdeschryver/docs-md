---
kind: ClassDeclaration
name: NgModuleResolver
module: compiler
---

# NgModuleResolver

## description

Resolves types to {@link NgModule}.

```ts
class NgModuleResolver {
  isNgModule(type: any);
  resolve(type: Type, throwIfNotFound = true): NgModule | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ng_module_resolver.ts#L18-L38)

## Methods

### isNgModule

```ts
isNgModule(type: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ng_module_resolver.ts#L21-L23)

#### Parameters (#isNgModule-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### resolve

```ts
resolve(type: Type, throwIfNotFound = true): NgModule|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ng_module_resolver.ts#L25-L37)

#### Parameters (#resolve-parameters)

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| type            | `Type`    |             |
| throwIfNotFound | `boolean` |             |
