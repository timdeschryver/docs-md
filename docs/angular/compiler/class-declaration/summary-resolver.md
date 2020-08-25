---
kind: ClassDeclaration
name: SummaryResolver
module: compiler
---

# SummaryResolver

```ts
class SummaryResolver<T> {
  abstract isLibraryFile(fileName: string): boolean;
  abstract toSummaryFileName(
    fileName: string,
    referringSrcFileName: string
  ): string;
  abstract fromSummaryFileName(
    fileName: string,
    referringLibFileName: string
  ): string;
  abstract resolveSummary(reference: T): Summary<T> | null;
  abstract getSymbolsOf(filePath: string): T[] | null;
  abstract getImportAs(reference: T): T;
  abstract getKnownModuleName(fileName: string): string | null;
  abstract addSummary(summary: Summary<T>): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L17-L26)

## Methods

### isLibraryFile

```ts
abstract isLibraryFile(fileName: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L18-L18)

#### Parameters (#isLibraryFile-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### toSummaryFileName

```ts
abstract toSummaryFileName(fileName: string, referringSrcFileName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L19-L19)

#### Parameters (#toSummaryFileName-parameters)

| Name                 | Type     | Description |
| -------------------- | -------- | ----------- |
| fileName             | `string` |             |
| referringSrcFileName | `string` |             |

### fromSummaryFileName

```ts
abstract fromSummaryFileName(fileName: string, referringLibFileName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L20-L20)

#### Parameters (#fromSummaryFileName-parameters)

| Name                 | Type     | Description |
| -------------------- | -------- | ----------- |
| fileName             | `string` |             |
| referringLibFileName | `string` |             |

### resolveSummary

```ts
abstract resolveSummary(reference: T): Summary<T>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L21-L21)

#### Parameters (#resolveSummary-parameters)

| Name      | Type | Description |
| --------- | ---- | ----------- |
| reference | `T`  |             |

### getSymbolsOf

```ts
abstract getSymbolsOf(filePath: string): T[]|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L22-L22)

#### Parameters (#getSymbolsOf-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| filePath | `string` |             |

### getImportAs

```ts
abstract getImportAs(reference: T): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L23-L23)

#### Parameters (#getImportAs-parameters)

| Name      | Type | Description |
| --------- | ---- | ----------- |
| reference | `T`  |             |

### getKnownModuleName

```ts
abstract getKnownModuleName(fileName: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L24-L24)

#### Parameters (#getKnownModuleName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### addSummary

```ts
abstract addSummary(summary: Summary<T>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L25-L25)

#### Parameters (#addSummary-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| summary | `Summary<T>` |             |
