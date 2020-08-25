---
kind: ClassDeclaration
name: StaticReflector
module: compiler
---

# StaticReflector

## description

A static reflector implements enough of the Reflector API that is necessary to compile
templates statically.

```ts
class StaticReflector implements CompileReflector {
  ROUTES!: StaticSymbol;

  componentModuleUrl(typeOrFunc: StaticSymbol): string;
  invalidateSymbols(symbols: StaticSymbol[]);
  resolveExternalReference(
    ref: o.ExternalReference,
    containingFile?: string
  ): StaticSymbol;
  findDeclaration(
    moduleUrl: string,
    name: string,
    containingFile?: string
  ): StaticSymbol;
  tryFindDeclaration(
    moduleUrl: string,
    name: string,
    containingFile?: string
  ): StaticSymbol;
  findSymbolDeclaration(symbol: StaticSymbol): StaticSymbol;
  public tryAnnotations(type: StaticSymbol): any[];
  public annotations(type: StaticSymbol): any[];
  public shallowAnnotations(type: StaticSymbol): any[];
  public propMetadata(type: StaticSymbol): { [key: string]: any[] };
  public parameters(type: StaticSymbol): any[];
  hasLifecycleHook(type: any, lcProperty: string): boolean;
  guards(type: any): { [key: string]: StaticSymbol };
  getStaticSymbol(
    declarationFile: string,
    name: string,
    members?: string[]
  ): StaticSymbol;
  public simplify(
    context: StaticSymbol,
    value: any,
    lazy: boolean = false
  ): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L43-L867)

## Properties

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| ROUTES | `StaticSymbol` |             |

## Methods

### componentModuleUrl

```ts
componentModuleUrl(typeOrFunc: StaticSymbol): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L84-L87)

#### Parameters (#componentModuleUrl-parameters)

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| typeOrFunc | `StaticSymbol` |             |

### invalidateSymbols

#### description (#invalidateSymbols-description)

Invalidate the specified `symbols` on program change.

```ts
invalidateSymbols(symbols: StaticSymbol[]);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L93-L103)

#### Parameters (#invalidateSymbols-parameters)

| Name    | Type             | Description |
| ------- | ---------------- | ----------- |
| symbols | `StaticSymbol[]` |             |

### resolveExternalReference

```ts
resolveExternalReference(ref: o.ExternalReference, containingFile?: string): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L105-L123)

#### Parameters (#resolveExternalReference-parameters)

| Name           | Type                  | Description |
| -------------- | --------------------- | ----------- |
| ref            | `o.ExternalReference` |             |
| containingFile | `string`              |             |

### findDeclaration

```ts
findDeclaration(moduleUrl: string, name: string, containingFile?: string): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L125-L128)

#### Parameters (#findDeclaration-parameters)

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| moduleUrl      | `string` |             |
| name           | `string` |             |
| containingFile | `string` |             |

### tryFindDeclaration

```ts
tryFindDeclaration(moduleUrl: string, name: string, containingFile?: string): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L130-L133)

#### Parameters (#tryFindDeclaration-parameters)

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| moduleUrl      | `string` |             |
| name           | `string` |             |
| containingFile | `string` |             |

### findSymbolDeclaration

```ts
findSymbolDeclaration(symbol: StaticSymbol): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L135-L147)

#### Parameters (#findSymbolDeclaration-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| symbol | `StaticSymbol` |             |

### tryAnnotations

```ts
public tryAnnotations(type: StaticSymbol): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L149-L157)

#### Parameters (#tryAnnotations-parameters)

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| type | `StaticSymbol` |             |

### annotations

```ts
public annotations(type: StaticSymbol): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L159-L163)

#### Parameters (#annotations-parameters)

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| type | `StaticSymbol` |             |

### shallowAnnotations

```ts
public shallowAnnotations(type: StaticSymbol): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L165-L169)

#### Parameters (#shallowAnnotations-parameters)

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| type | `StaticSymbol` |             |

### propMetadata

```ts
public propMetadata(type: StaticSymbol): {[key: string]: any[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L219-L249)

#### Parameters (#propMetadata-parameters)

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| type | `StaticSymbol` |             |

### parameters

```ts
public parameters(type: StaticSymbol): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L251-L293)

#### Parameters (#parameters-parameters)

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| type | `StaticSymbol` |             |

### hasLifecycleHook

```ts
hasLifecycleHook(type: any, lcProperty: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L338-L351)

#### Parameters (#hasLifecycleHook-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| type       | `any`    |             |
| lcProperty | `string` |             |

### guards

```ts
guards(type: any): {[key: string]: StaticSymbol};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L353-L375)

#### Parameters (#guards-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### getStaticSymbol

#### description (#getStaticSymbol-description)

getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
All types passed to the StaticResolver should be pseudo-types returned by this method.

```ts
getStaticSymbol(declarationFile: string, name: string, members?: string[]): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L443-L445)

#### Parameters (#getStaticSymbol-parameters)

| Name            | Type       | Description                                                |
| --------------- | ---------- | ---------------------------------------------------------- |
| declarationFile | `string`   | the absolute path of the file where the symbol is declared |
| name            | `string`   | the name of the type.                                      |
| members         | `string[]` |                                                            |

### simplify

```ts
public simplify(context: StaticSymbol, value: any, lazy: boolean = false): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_reflector.ts#L459-L834)

#### Parameters (#simplify-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| context | `StaticSymbol` |             |
| value   | `any`          |             |
| lazy    | `boolean`      |             |
