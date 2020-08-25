---
kind: ClassDeclaration
name: StaticSymbolCache
module: compiler
---

# StaticSymbolCache

## description

A cache of static symbol used by the StaticReflector to return the same symbol for the
same symbol values.

```ts
class StaticSymbolCache {
  get(declarationFile: string, name: string, members?: string[]): StaticSymbol;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol.ts#L29-L43)

## Methods

### get

```ts
get(declarationFile: string, name: string, members?: string[]): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol.ts#L32-L42)

#### Parameters (#get-parameters)

| Name            | Type       | Description |
| --------------- | ---------- | ----------- |
| declarationFile | `string`   |             |
| name            | `string`   |             |
| members         | `string[]` |             |
