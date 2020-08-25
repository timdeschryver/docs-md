---
kind: ClassDeclaration
name: JitSummaryResolver
module: compiler
---

# JitSummaryResolver

```ts
class JitSummaryResolver implements SummaryResolver<Type> {
  isLibraryFile(): boolean;
  toSummaryFileName(fileName: string): string;
  fromSummaryFileName(fileName: string): string;
  resolveSummary(reference: Type): Summary<Type> | null;
  getSymbolsOf(): Type[];
  getImportAs(reference: Type): Type;
  getKnownModuleName(fileName: string);
  addSummary(summary: Summary<Type>);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L28-L55)

## Methods

### isLibraryFile

```ts
isLibraryFile(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L31-L33)

### toSummaryFileName

```ts
toSummaryFileName(fileName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L34-L36)

#### Parameters (#toSummaryFileName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### fromSummaryFileName

```ts
fromSummaryFileName(fileName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L37-L39)

#### Parameters (#fromSummaryFileName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### resolveSummary

```ts
resolveSummary(reference: Type): Summary<Type>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L40-L42)

#### Parameters (#resolveSummary-parameters)

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| reference | `Type` |             |

### getSymbolsOf

```ts
getSymbolsOf(): Type[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L43-L45)

### getImportAs

```ts
getImportAs(reference: Type): Type;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L46-L48)

#### Parameters (#getImportAs-parameters)

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| reference | `Type` |             |

### getKnownModuleName

```ts
getKnownModuleName(fileName: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L49-L51)

#### Parameters (#getKnownModuleName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### addSummary

```ts
addSummary(summary: Summary<Type>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L52-L54)

#### Parameters (#addSummary-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| summary | `Summary<Type>` |             |
