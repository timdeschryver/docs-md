---
kind: ClassDeclaration
name: TransitiveCompileNgModuleMetadata
module: compiler
---

# TransitiveCompileNgModuleMetadata

```ts
class TransitiveCompileNgModuleMetadata {
  directivesSet = new Set<any>();
  directives: CompileIdentifierMetadata[] = [];
  exportedDirectivesSet = new Set<any>();
  exportedDirectives: CompileIdentifierMetadata[] = [];
  pipesSet = new Set<any>();
  pipes: CompileIdentifierMetadata[] = [];
  exportedPipesSet = new Set<any>();
  exportedPipes: CompileIdentifierMetadata[] = [];
  modulesSet = new Set<any>();
  modules: CompileTypeMetadata[] = [];
  entryComponentsSet = new Set<any>();
  entryComponents: CompileEntryComponentMetadata[] = [];
  providers: {
    provider: CompileProviderMetadata;
    module: CompileIdentifierMetadata;
  }[] = [];

  addProvider(
    provider: CompileProviderMetadata,
    module: CompileIdentifierMetadata
  );
  addDirective(id: CompileIdentifierMetadata);
  addExportedDirective(id: CompileIdentifierMetadata);
  addPipe(id: CompileIdentifierMetadata);
  addExportedPipe(id: CompileIdentifierMetadata);
  addModule(id: CompileTypeMetadata);
  addEntryComponent(ec: CompileEntryComponentMetadata);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L661-L717)

## Properties

| Name                  | Type                                                                          | Description |
| --------------------- | ----------------------------------------------------------------------------- | ----------- |
| directivesSet         | `any`                                                                         |             |
| directives            | `CompileIdentifierMetadata[]`                                                 |             |
| exportedDirectivesSet | `any`                                                                         |             |
| exportedDirectives    | `CompileIdentifierMetadata[]`                                                 |             |
| pipesSet              | `any`                                                                         |             |
| pipes                 | `CompileIdentifierMetadata[]`                                                 |             |
| exportedPipesSet      | `any`                                                                         |             |
| exportedPipes         | `CompileIdentifierMetadata[]`                                                 |             |
| modulesSet            | `any`                                                                         |             |
| modules               | `CompileTypeMetadata[]`                                                       |             |
| entryComponentsSet    | `any`                                                                         |             |
| entryComponents       | `CompileEntryComponentMetadata[]`                                             |             |
| providers             | `{ provider: CompileProviderMetadata; module: CompileIdentifierMetadata; }[]` |             |

## Methods

### addProvider

```ts
addProvider(provider: CompileProviderMetadata, module: CompileIdentifierMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L677-L679)

#### Parameters (#addProvider-parameters)

| Name     | Type                        | Description |
| -------- | --------------------------- | ----------- |
| provider | `CompileProviderMetadata`   |             |
| module   | `CompileIdentifierMetadata` |             |

### addDirective

```ts
addDirective(id: CompileIdentifierMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L681-L686)

#### Parameters (#addDirective-parameters)

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| id   | `CompileIdentifierMetadata` |             |

### addExportedDirective

```ts
addExportedDirective(id: CompileIdentifierMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L687-L692)

#### Parameters (#addExportedDirective-parameters)

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| id   | `CompileIdentifierMetadata` |             |

### addPipe

```ts
addPipe(id: CompileIdentifierMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L693-L698)

#### Parameters (#addPipe-parameters)

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| id   | `CompileIdentifierMetadata` |             |

### addExportedPipe

```ts
addExportedPipe(id: CompileIdentifierMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L699-L704)

#### Parameters (#addExportedPipe-parameters)

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| id   | `CompileIdentifierMetadata` |             |

### addModule

```ts
addModule(id: CompileTypeMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L705-L710)

#### Parameters (#addModule-parameters)

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| id   | `CompileTypeMetadata` |             |

### addEntryComponent

```ts
addEntryComponent(ec: CompileEntryComponentMetadata);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L711-L716)

#### Parameters (#addEntryComponent-parameters)

| Name | Type                            | Description |
| ---- | ------------------------------- | ----------- |
| ec   | `CompileEntryComponentMetadata` |             |
