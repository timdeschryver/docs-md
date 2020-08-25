---
kind: ClassDeclaration
name: AotCompiler
module: compiler
---

# AotCompiler

```ts
class AotCompiler {
  clearCache();
  analyzeModulesSync(rootFiles: string[]): NgAnalyzedModules;
  analyzeModulesAsync(rootFiles: string[]): Promise<NgAnalyzedModules>;
  findGeneratedFileNames(fileName: string): string[];
  emitBasicStub(genFileName: string, originalFileName?: string): GeneratedFile;
  emitTypeCheckStub(
    genFileName: string,
    originalFileName: string
  ): GeneratedFile | null;
  loadFilesAsync(
    fileNames: string[],
    tsFiles: string[]
  ): Promise<{
    analyzedModules: NgAnalyzedModules;
    analyzedInjectables: NgAnalyzedFileWithInjectables[];
  }>;
  loadFilesSync(
    fileNames: string[],
    tsFiles: string[]
  ): {
    analyzedModules: NgAnalyzedModules;
    analyzedInjectables: NgAnalyzedFileWithInjectables[];
  };
  emitMessageBundle(
    analyzeResult: NgAnalyzedModules,
    locale: string | null
  ): MessageBundle;
  emitAllPartialModules(
    { ngModuleByPipeOrDirective, files }: NgAnalyzedModules,
    r3Files: NgAnalyzedFileWithInjectables[]
  ): PartialModule[];
  emitAllPartialModules2(
    files: NgAnalyzedFileWithInjectables[]
  ): PartialModule[];
  emitAllImpls(analyzeResult: NgAnalyzedModules): GeneratedFile[];
  listLazyRoutes(
    entryRoute?: string,
    analyzedModules?: NgAnalyzedModules
  ): LazyRoute[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L55-L769)

## Methods

### clearCache

```ts
clearCache();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L71-L73)

### analyzeModulesSync

```ts
analyzeModulesSync(rootFiles: string[]): NgAnalyzedModules;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L75-L82)

#### Parameters (#analyzeModulesSync-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| rootFiles | `string[]` |             |

### analyzeModulesAsync

```ts
analyzeModulesAsync(rootFiles: string[]): Promise<NgAnalyzedModules>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L84-L92)

#### Parameters (#analyzeModulesAsync-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| rootFiles | `string[]` |             |

### findGeneratedFileNames

```ts
findGeneratedFileNames(fileName: string): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L114-L151)

#### Parameters (#findGeneratedFileNames-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### emitBasicStub

```ts
emitBasicStub(genFileName: string, originalFileName?: string): GeneratedFile;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L153-L186)

#### Parameters (#emitBasicStub-parameters)

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| genFileName      | `string` |             |
| originalFileName | `string` |             |

### emitTypeCheckStub

```ts
emitTypeCheckStub(genFileName: string, originalFileName: string): GeneratedFile|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L188-L197)

#### Parameters (#emitTypeCheckStub-parameters)

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| genFileName      | `string` |             |
| originalFileName | `string` |             |

### loadFilesAsync

```ts
loadFilesAsync(fileNames: string[], tsFiles: string[]): Promise<   {analyzedModules: NgAnalyzedModules, analyzedInjectables: NgAnalyzedFileWithInjectables[]}>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L199-L213)

#### Parameters (#loadFilesAsync-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| fileNames | `string[]` |             |
| tsFiles   | `string[]` |             |

### loadFilesSync

```ts
loadFilesSync(fileNames: string[], tsFiles: string[]):   {analyzedModules: NgAnalyzedModules, analyzedInjectables: NgAnalyzedFileWithInjectables[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L215-L227)

#### Parameters (#loadFilesSync-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| fileNames | `string[]` |             |
| tsFiles   | `string[]` |             |

### emitMessageBundle

```ts
emitMessageBundle(analyzeResult: NgAnalyzedModules, locale: string|null): MessageBundle;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L311-L342)

#### Parameters (#emitMessageBundle-parameters)

| Name          | Type                | Description |
| ------------- | ------------------- | ----------- |
| analyzeResult | `NgAnalyzedModules` |             |
| locale        | `string`            |             |

### emitAllPartialModules

```ts
emitAllPartialModules(   {ngModuleByPipeOrDirective, files}: NgAnalyzedModules,   r3Files: NgAnalyzedFileWithInjectables[]): PartialModule[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L344-L369)

#### Parameters (#emitAllPartialModules-parameters)

| Name                               | Type                              | Description |
| ---------------------------------- | --------------------------------- | ----------- |
| {ngModuleByPipeOrDirective, files} | `NgAnalyzedModules`               |             |
| r3Files                            | `NgAnalyzedFileWithInjectables[]` |             |

### emitAllPartialModules2

```ts
emitAllPartialModules2(files: NgAnalyzedFileWithInjectables[]): PartialModule[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L445-L451)

#### Parameters (#emitAllPartialModules2-parameters)

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| files | `NgAnalyzedFileWithInjectables[]` |             |

### emitAllImpls

```ts
emitAllImpls(analyzeResult: NgAnalyzedModules): GeneratedFile[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L465-L472)

#### Parameters (#emitAllImpls-parameters)

| Name          | Type                | Description |
| ------------- | ------------------- | ----------- |
| analyzeResult | `NgAnalyzedModules` |             |

### listLazyRoutes

```ts
listLazyRoutes(entryRoute?: string, analyzedModules?: NgAnalyzedModules): LazyRoute[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L733-L768)

#### Parameters (#listLazyRoutes-parameters)

| Name            | Type                | Description |
| --------------- | ------------------- | ----------- |
| entryRoute      | `string`            |             |
| analyzedModules | `NgAnalyzedModules` |             |
