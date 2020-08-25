---
kind: InterfaceDeclaration
name: R3NgModuleMetadata
module: compiler
---

# R3NgModuleMetadata

## description

Metadata required by the module compiler to generate a module def (`ɵmod`) for a type.

```ts
interface R3NgModuleMetadata {
  type: R3Reference;
  internalType: o.Expression;
  adjacentType: o.Expression;
  bootstrap: R3Reference[];
  declarations: R3Reference[];
  imports: R3Reference[];
  exports: R3Reference[];
  emitInline: boolean;
  containsForwardDecls: boolean;
  schemas: R3Reference[] | null;
  id: o.Expression | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_module_compiler.ts#L28-L91)

## Properties

| Name         | Type           | Description                                                                                |
| ------------ | -------------- | ------------------------------------------------------------------------------------------ |
| type         | `R3Reference`  | An expression representing the module type being compiled.                                 |
| internalType | `o.Expression` | An expression representing the module type being compiled, intended for use within a class |

definition itself.

This can differ from the outer `type` if the class is being compiled by ngcc and is inside
an IIFE structure that uses a different name internally. |
| adjacentType | `o.Expression` | An expression intended for use by statements that are adjacent (i.e. tightly coupled) to but
not internal to a class definition.

This can differ from the outer `type` if the class is being compiled by ngcc and is inside
an IIFE structure that uses a different name internally. |
| bootstrap | `R3Reference[]` | An array of expressions representing the bootstrap components specified by the module. |
| declarations | `R3Reference[]` | An array of expressions representing the directives and pipes declared by the module. |
| imports | `R3Reference[]` | An array of expressions representing the imports of the module. |
| exports | `R3Reference[]` | An array of expressions representing the exports of the module. |
| emitInline | `boolean` | Whether to emit the selector scope values (declarations, imports, exports) inline into the
module definition, or to generate additional statements which patch them on. Inline emission
does not allow components to be tree-shaken, but is useful for JIT mode. |
| containsForwardDecls | `boolean` | Whether to generate closure wrappers for bootstrap, declarations, imports, and exports. |
| schemas | `R3Reference[]` | The set of schemas that declare elements to be allowed in the NgModule. |
| id | `o.Expression` | Unique ID or expression representing the unique ID of an NgModule. |
