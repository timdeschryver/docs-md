---
kind: ClassDeclaration
name: StaticSymbolResolver
module: compiler
---

# StaticSymbolResolver

## description

This class is responsible for loading metadata per symbol,
and normalizing references between symbols.

Internally, it only uses symbols without members,
and deduces the values for symbols with members based
on these symbols.

```ts
class StaticSymbolResolver {
  resolveSymbol(staticSymbol: StaticSymbol): ResolvedStaticSymbol;
  getImportAs(
    staticSymbol: StaticSymbol,
    useSummaries: boolean = true
  ): StaticSymbol | null;
  getResourcePath(staticSymbol: StaticSymbol): string;
  getTypeArity(staticSymbol: StaticSymbol): number | null;
  getKnownModuleName(filePath: string): string | null;
  recordImportAs(sourceSymbol: StaticSymbol, targetSymbol: StaticSymbol);
  recordModuleNameForFileName(fileName: string, moduleName: string);
  invalidateFile(fileName: string): StaticSymbol[];
  ignoreErrorsFor<T>(cb: () => T);
  getStaticSymbol(
    declarationFile: string,
    name: string,
    members?: string[]
  ): StaticSymbol;
  hasDecorators(filePath: string): boolean;
  getSymbolsOf(filePath: string): StaticSymbol[];
  getSymbolByModule(
    module: string,
    symbolName: string,
    containingFile?: string
  ): StaticSymbol;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L62-L535)

## Methods

### resolveSymbol

```ts
resolveSymbol(staticSymbol: StaticSymbol): ResolvedStaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L77-L97)

#### Parameters (#resolveSymbol-parameters)

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| staticSymbol | `StaticSymbol` |             |

### getImportAs

#### description (#getImportAs-description)

getImportAs produces a symbol that can be used to import the given symbol.
The import might be different than the symbol if the symbol is exported from
a library with a summary; in which case we want to import the symbol from the
ngfactory re-export instead of directly to avoid introducing a direct dependency
on an otherwise indirect dependency.

```ts
getImportAs(staticSymbol: StaticSymbol, useSummaries: boolean = true): StaticSymbol|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L108-L132)

#### Parameters (#getImportAs-parameters)

| Name         | Type           | Description                                      |
| ------------ | -------------- | ------------------------------------------------ |
| staticSymbol | `StaticSymbol` | the symbol for which to generate a import symbol |
| useSummaries | `boolean`      |                                                  |

### getResourcePath

#### description (#getResourcePath-description)

getResourcePath produces the path to the original location of the symbol and should
be used to determine the relative location of resource references recorded in
symbol metadata.

```ts
getResourcePath(staticSymbol: StaticSymbol): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L139-L141)

#### Parameters (#getResourcePath-parameters)

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| staticSymbol | `StaticSymbol` |             |

### getTypeArity

#### description (#getTypeArity-description)

getTypeArity returns the number of generic type parameters the given symbol
has. If the symbol is not a type the result is null.

```ts
getTypeArity(staticSymbol: StaticSymbol): number|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L147-L160)

#### Parameters (#getTypeArity-parameters)

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| staticSymbol | `StaticSymbol` |             |

### getKnownModuleName

```ts
getKnownModuleName(filePath: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L162-L164)

#### Parameters (#getKnownModuleName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| filePath | `string` |             |

### recordImportAs

```ts
recordImportAs(sourceSymbol: StaticSymbol, targetSymbol: StaticSymbol);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L166-L170)

#### Parameters (#recordImportAs-parameters)

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| sourceSymbol | `StaticSymbol` |             |
| targetSymbol | `StaticSymbol` |             |

### recordModuleNameForFileName

```ts
recordModuleNameForFileName(fileName: string, moduleName: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L172-L174)

#### Parameters (#recordModuleNameForFileName-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| fileName   | `string` |             |
| moduleName | `string` |             |

### invalidateFile

#### description (#invalidateFile-description)

Invalidate all information derived from the given file and return the
static symbols contained in the file.

```ts
invalidateFile(fileName: string): StaticSymbol[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L182-L195)

#### Parameters (#invalidateFile-parameters)

| Name     | Type     | Description            |
| -------- | -------- | ---------------------- |
| fileName | `string` | the file to invalidate |

### ignoreErrorsFor

```ts
ignoreErrorsFor<T>(cb: () => T);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L198-L206)

#### Parameters (#ignoreErrorsFor-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| cb   | `() => T` |             |

### getStaticSymbol

#### description (#getStaticSymbol-description)

getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
All types passed to the StaticResolver should be pseudo-types returned by this method.

```ts
getStaticSymbol(declarationFile: string, name: string, members?: string[]): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L246-L248)

#### Parameters (#getStaticSymbol-parameters)

| Name            | Type       | Description                                                |
| --------------- | ---------- | ---------------------------------------------------------- |
| declarationFile | `string`   | the absolute path of the file where the symbol is declared |
| name            | `string`   | the name of the type.                                      |
| members         | `string[]` | a symbol for a static member of the named type             |

### hasDecorators

#### description (#hasDecorators-description)

hasDecorators checks a file's metadata for the presence of decorators without evaluating the
metadata.

```ts
hasDecorators(filePath: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L257-L266)

#### Parameters (#hasDecorators-parameters)

| Name     | Type     | Description                                  |
| -------- | -------- | -------------------------------------------- |
| filePath | `string` | the absolute path to examine for decorators. |

#### returns (#hasDecorators-returns)

true if any class in the file has a decorator.

### getSymbolsOf

```ts
getSymbolsOf(filePath: string): StaticSymbol[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L268-L277)

#### Parameters (#getSymbolsOf-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| filePath | `string` |             |

### getSymbolByModule

```ts
getSymbolByModule(module: string, symbolName: string, containingFile?: string): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/static_symbol_resolver.ts#L516-L524)

#### Parameters (#getSymbolByModule-parameters)

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| module         | `string` |             |
| symbolName     | `string` |             |
| containingFile | `string` |             |
