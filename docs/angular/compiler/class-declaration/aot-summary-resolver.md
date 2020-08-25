---
kind: ClassDeclaration
name: AotSummaryResolver
module: compiler
---

# AotSummaryResolver

```ts
class AotSummaryResolver implements SummaryResolver<StaticSymbol> {
  isLibraryFile(filePath: string): boolean;
  toSummaryFileName(filePath: string, referringSrcFileName: string);
  fromSummaryFileName(fileName: string, referringLibFileName: string);
  resolveSummary(staticSymbol: StaticSymbol): Summary<StaticSymbol> | null;
  getSymbolsOf(filePath: string): StaticSymbol[] | null;
  getImportAs(staticSymbol: StaticSymbol): StaticSymbol;
  getKnownModuleName(importedFilePath: string): string | null;
  addSummary(summary: Summary<StaticSymbol>);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L42-L132)

## Methods

### isLibraryFile

```ts
isLibraryFile(filePath: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L52-L57)

#### Parameters (#isLibraryFile-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| filePath | `string` |             |

### toSummaryFileName

```ts
toSummaryFileName(filePath: string, referringSrcFileName: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L59-L61)

#### Parameters (#toSummaryFileName-parameters)

| Name                 | Type     | Description |
| -------------------- | -------- | ----------- |
| filePath             | `string` |             |
| referringSrcFileName | `string` |             |

### fromSummaryFileName

```ts
fromSummaryFileName(fileName: string, referringLibFileName: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L63-L65)

#### Parameters (#fromSummaryFileName-parameters)

| Name                 | Type     | Description |
| -------------------- | -------- | ----------- |
| fileName             | `string` |             |
| referringLibFileName | `string` |             |

### resolveSummary

```ts
resolveSummary(staticSymbol: StaticSymbol): Summary<StaticSymbol>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L67-L77)

#### Parameters (#resolveSummary-parameters)

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| staticSymbol | `StaticSymbol` |             |

### getSymbolsOf

```ts
getSymbolsOf(filePath: string): StaticSymbol[]|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L79-L84)

#### Parameters (#getSymbolsOf-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| filePath | `string` |             |

### getImportAs

```ts
getImportAs(staticSymbol: StaticSymbol): StaticSymbol;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L86-L89)

#### Parameters (#getImportAs-parameters)

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| staticSymbol | `StaticSymbol` |             |

### getKnownModuleName

#### description (#getKnownModuleName-description)

Converts a file path to a module name that can be used as an `import`.

```ts
getKnownModuleName(importedFilePath: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L94-L96)

#### Parameters (#getKnownModuleName-parameters)

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| importedFilePath | `string` |             |

### addSummary

```ts
addSummary(summary: Summary<StaticSymbol>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/summary_resolver.ts#L98-L100)

#### Parameters (#addSummary-parameters)

| Name    | Type                    | Description |
| ------- | ----------------------- | ----------- |
| summary | `Summary<StaticSymbol>` |             |
