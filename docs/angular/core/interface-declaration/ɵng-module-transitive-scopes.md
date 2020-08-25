---
kind: InterfaceDeclaration
name: ɵNgModuleTransitiveScopes
module: core
---

# ɵNgModuleTransitiveScopes

## description

Represents the expansion of an `NgModule` into its scopes.

A scope is a set of directives and pipes that are visible in a particular context. Each
`NgModule` has two scopes. The `compilation` scope is the set of directives and pipes that will
be recognized in the templates of components declared by the module. The `exported` scope is the
set of directives and pipes exported by a module (that is, module B's exported scope gets added
to module A's compilation scope when module A imports B).

```ts
interface NgModuleTransitiveScopes {
  compilation: { directives: Set<any>; pipes: Set<any> };
  exported: { directives: Set<any>; pipes: Set<any> };
  schemas: SchemaMetadata[] | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/ng_module.ts#L28-L32)

## Properties

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| compilation | `{ directives: any; pipes: any; }` |             |
| exported    | `{ directives: any; pipes: any; }` |             |
| schemas     | `SchemaMetadata[]`                 |             |
