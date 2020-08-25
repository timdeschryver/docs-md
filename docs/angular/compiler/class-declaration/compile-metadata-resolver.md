---
kind: ClassDeclaration
name: CompileMetadataResolver
module: compiler
---

# CompileMetadataResolver

```ts
class CompileMetadataResolver {
  getReflector(): CompileReflector;
  clearCacheFor(type: Type);
  clearCache(): void;
  getHostComponentViewClass(dirType: any): StaticSymbol | cpl.ProxyClass;
  getHostComponentType(dirType: any): StaticSymbol | cpl.ProxyClass;
  getHostComponentMetadata(
    compMeta: cpl.CompileDirectiveMetadata,
    hostViewType?: StaticSymbol | cpl.ProxyClass
  ): cpl.CompileDirectiveMetadata;
  loadDirectiveMetadata(
    ngModuleType: any,
    directiveType: any,
    isSync: boolean
  ): SyncAsync<null>;
  getNonNormalizedDirectiveMetadata(
    directiveType: any
  ): { annotation: Directive; metadata: cpl.CompileDirectiveMetadata } | null;
  getDirectiveMetadata(directiveType: any): cpl.CompileDirectiveMetadata;
  getDirectiveSummary(dirType: any): cpl.CompileDirectiveSummary;
  isDirective(type: any);
  isAbstractDirective(type: any): boolean;
  isPipe(type: any);
  isNgModule(type: any);
  getNgModuleSummary(
    moduleType: any,
    alreadyCollecting: Set<any> | null = null
  ): cpl.CompileNgModuleSummary | null;
  loadNgModuleDirectiveAndPipeMetadata(
    moduleType: any,
    isSync: boolean,
    throwIfNotFound = true
  ): Promise<any>;
  getShallowModuleMetadata(
    moduleType: any
  ): cpl.CompileShallowModuleMetadata | null;
  getNgModuleMetadata(
    moduleType: any,
    throwIfNotFound = true,
    alreadyCollecting: Set<any> | null = null
  ): cpl.CompileNgModuleMetadata | null;
  isInjectable(type: any): boolean;
  getInjectableSummary(type: any): cpl.CompileTypeSummary;
  getInjectableMetadata(
    type: any,
    dependencies: any[] | null = null,
    throwOnUnknownDeps: boolean = true
  ): cpl.CompileInjectableMetadata | null;
  getPipeMetadata(pipeType: any): cpl.CompilePipeMetadata | null;
  getPipeSummary(pipeType: any): cpl.CompilePipeSummary;
  getOrLoadPipeMetadata(pipeType: any): cpl.CompilePipeMetadata;
  getProviderMetadata(provider: cpl.ProviderMeta): cpl.CompileProviderMetadata;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L39-L1215)

## Methods

### getReflector

```ts
getReflector(): CompileReflector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L58-L60)

### clearCacheFor

```ts
clearCacheFor(type: Type);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L62-L74)

#### Parameters (#clearCacheFor-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| type | `Type` |             |

### clearCache

```ts
clearCache(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L76-L84)

### getHostComponentViewClass

```ts
getHostComponentViewClass(dirType: any): StaticSymbol|cpl.ProxyClass;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L116-L118)

#### Parameters (#getHostComponentViewClass-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| dirType | `any` |             |

### getHostComponentType

```ts
getHostComponentType(dirType: any): StaticSymbol|cpl.ProxyClass;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L120-L127)

#### Parameters (#getHostComponentType-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| dirType | `any` |             |

### getHostComponentMetadata

```ts
getHostComponentMetadata(   compMeta: cpl.CompileDirectiveMetadata,   hostViewType?: StaticSymbol|cpl.ProxyClass): cpl.CompileDirectiveMetadata;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L172-L219)

#### Parameters (#getHostComponentMetadata-parameters)

| Name         | Type                           | Description     |
| ------------ | ------------------------------ | --------------- |
| compMeta     | `cpl.CompileDirectiveMetadata` |                 |
| hostViewType | `StaticSymbol                  | cpl.ProxyClass` |  |

### loadDirectiveMetadata

```ts
loadDirectiveMetadata(ngModuleType: any, directiveType: any, isSync: boolean): SyncAsync<null>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L221-L285)

#### Parameters (#loadDirectiveMetadata-parameters)

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| ngModuleType  | `any`     |             |
| directiveType | `any`     |             |
| isSync        | `boolean` |             |

### getNonNormalizedDirectiveMetadata

```ts
getNonNormalizedDirectiveMetadata(directiveType: any):   {annotation: Directive, metadata: cpl.CompileDirectiveMetadata}|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L287-L399)

#### Parameters (#getNonNormalizedDirectiveMetadata-parameters)

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| directiveType | `any` |             |

### getDirectiveMetadata

#### description (#getDirectiveMetadata-description)

Gets the metadata for the given directive.
This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.

```ts
getDirectiveMetadata(directiveType: any): cpl.CompileDirectiveMetadata;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L405-L415)

#### Parameters (#getDirectiveMetadata-parameters)

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| directiveType | `any` |             |

### getDirectiveSummary

```ts
getDirectiveSummary(dirType: any): cpl.CompileDirectiveSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L417-L427)

#### Parameters (#getDirectiveSummary-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| dirType | `any` |             |

### isDirective

```ts
isDirective(type: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L429-L432)

#### Parameters (#isDirective-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### isAbstractDirective

```ts
isAbstractDirective(type: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L434-L447)

#### Parameters (#isAbstractDirective-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### isPipe

```ts
isPipe(type: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L449-L452)

#### Parameters (#isPipe-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### isNgModule

```ts
isNgModule(type: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L454-L457)

#### Parameters (#isNgModule-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### getNgModuleSummary

```ts
getNgModuleSummary(moduleType: any, alreadyCollecting: Set<any>|null = null):   cpl.CompileNgModuleSummary|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L459-L471)

#### Parameters (#getNgModuleSummary-parameters)

| Name              | Type  | Description |
| ----------------- | ----- | ----------- |
| moduleType        | `any` |             |
| alreadyCollecting | `any` |             |

### loadNgModuleDirectiveAndPipeMetadata

#### description (#loadNgModuleDirectiveAndPipeMetadata-description)

Loads the declared directives and pipes of an NgModule.

```ts
loadNgModuleDirectiveAndPipeMetadata(moduleType: any, isSync: boolean, throwIfNotFound = true):   Promise<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L476-L490)

#### Parameters (#loadNgModuleDirectiveAndPipeMetadata-parameters)

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| moduleType      | `any`     |             |
| isSync          | `boolean` |             |
| throwIfNotFound | `boolean` |             |

### getShallowModuleMetadata

```ts
getShallowModuleMetadata(moduleType: any): cpl.CompileShallowModuleMetadata|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L492-L510)

#### Parameters (#getShallowModuleMetadata-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| moduleType | `any` |             |

### getNgModuleMetadata

```ts
getNgModuleMetadata(   moduleType: any, throwIfNotFound = true,   alreadyCollecting: Set<any>|null = null): cpl.CompileNgModuleMetadata|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L512-L730)

#### Parameters (#getNgModuleMetadata-parameters)

| Name              | Type      | Description |
| ----------------- | --------- | ----------- |
| moduleType        | `any`     |             |
| throwIfNotFound   | `boolean` |             |
| alreadyCollecting | `any`     |             |

### isInjectable

```ts
isInjectable(type: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L825-L828)

#### Parameters (#isInjectable-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### getInjectableSummary

```ts
getInjectableSummary(type: any): cpl.CompileTypeSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L830-L835)

#### Parameters (#getInjectableSummary-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### getInjectableMetadata

```ts
getInjectableMetadata(   type: any, dependencies: any[]|null = null,   throwOnUnknownDeps: boolean = true): cpl.CompileInjectableMetadata|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L837-L863)

#### Parameters (#getInjectableMetadata-parameters)

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| type               | `any`     |             |
| dependencies       | `any[]`   |             |
| throwOnUnknownDeps | `boolean` |             |

### getPipeMetadata

#### description (#getPipeMetadata-description)

Gets the metadata for the given pipe.
This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.

```ts
getPipeMetadata(pipeType: any): cpl.CompilePipeMetadata|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L885-L895)

#### Parameters (#getPipeMetadata-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| pipeType | `any` |             |

### getPipeSummary

```ts
getPipeSummary(pipeType: any): cpl.CompilePipeSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L897-L907)

#### Parameters (#getPipeSummary-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| pipeType | `any` |             |

### getOrLoadPipeMetadata

```ts
getOrLoadPipeMetadata(pipeType: any): cpl.CompilePipeMetadata;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L909-L915)

#### Parameters (#getOrLoadPipeMetadata-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| pipeType | `any` |             |

### getProviderMetadata

```ts
getProviderMetadata(provider: cpl.ProviderMeta): cpl.CompileProviderMetadata;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/metadata_resolver.ts#L1128-L1156)

#### Parameters (#getProviderMetadata-parameters)

| Name     | Type               | Description |
| -------- | ------------------ | ----------- |
| provider | `cpl.ProviderMeta` |             |
