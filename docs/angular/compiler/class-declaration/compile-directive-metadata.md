---
kind: ClassDeclaration
name: CompileDirectiveMetadata
module: compiler
---

# CompileDirectiveMetadata

## description

Metadata regarding compilation of a directive.

```ts
class CompileDirectiveMetadata {
  isHost: boolean;
  type: CompileTypeMetadata;
  isComponent: boolean;
  selector: string | null;
  exportAs: string | null;
  changeDetection: ChangeDetectionStrategy | null;
  inputs: { [key: string]: string };
  outputs: { [key: string]: string };
  hostListeners: { [key: string]: string };
  hostProperties: { [key: string]: string };
  hostAttributes: { [key: string]: string };
  providers: CompileProviderMetadata[];
  viewProviders: CompileProviderMetadata[];
  queries: CompileQueryMetadata[];
  guards: { [key: string]: any };
  viewQueries: CompileQueryMetadata[];
  entryComponents: CompileEntryComponentMetadata[];
  template: CompileTemplateMetadata | null;
  componentViewType: StaticSymbol | ProxyClass | null;
  rendererType: StaticSymbol | object | null;
  componentFactory: StaticSymbol | object | null;

  static create({
    isHost,
    type,
    isComponent,
    selector,
    exportAs,
    changeDetection,
    inputs,
    outputs,
    host,
    providers,
    viewProviders,
    queries,
    guards,
    viewQueries,
    entryComponents,
    template,
    componentViewType,
    rendererType,
    componentFactory,
  }: {
    isHost: boolean;
    type: CompileTypeMetadata;
    isComponent: boolean;
    selector: string | null;
    exportAs: string | null;
    changeDetection: ChangeDetectionStrategy | null;
    inputs: string[];
    outputs: string[];
    host: { [key: string]: string };
    providers: CompileProviderMetadata[];
    viewProviders: CompileProviderMetadata[];
    queries: CompileQueryMetadata[];
    guards: { [key: string]: any };
    viewQueries: CompileQueryMetadata[];
    entryComponents: CompileEntryComponentMetadata[];
    template: CompileTemplateMetadata;
    componentViewType: StaticSymbol | ProxyClass | null;
    rendererType: StaticSymbol | object | null;
    componentFactory: StaticSymbol | object | null;
  }): CompileDirectiveMetadata;
  toSummary(): CompileDirectiveSummary;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L303-L522)

## Properties

| Name              | Type                              | Description   |
| ----------------- | --------------------------------- | ------------- |
| isHost            | `boolean`                         |               |
| type              | `CompileTypeMetadata`             |               |
| isComponent       | `boolean`                         |               |
| selector          | `string`                          |               |
| exportAs          | `string`                          |               |
| changeDetection   | `ChangeDetectionStrategy`         |               |
| inputs            | `{ [key: string]: string; }`      |               |
| outputs           | `{ [key: string]: string; }`      |               |
| hostListeners     | `{ [key: string]: string; }`      |               |
| hostProperties    | `{ [key: string]: string; }`      |               |
| hostAttributes    | `{ [key: string]: string; }`      |               |
| providers         | `CompileProviderMetadata[]`       |               |
| viewProviders     | `CompileProviderMetadata[]`       |               |
| queries           | `CompileQueryMetadata[]`          |               |
| guards            | `{ [key: string]: any; }`         |               |
| viewQueries       | `CompileQueryMetadata[]`          |               |
| entryComponents   | `CompileEntryComponentMetadata[]` |               |
| template          | `CompileTemplateMetadata`         |               |
| componentViewType | `StaticSymbol                     | ProxyClass`   |  |
| rendererType      | `object                           | StaticSymbol` |  |
| componentFactory  | `object                           | StaticSymbol` |  |

## Methods

### create

```ts
static create({  isHost,  type,  isComponent,  selector,  exportAs,  changeDetection,  inputs,  outputs,  host,  providers,  viewProviders,  queries,  guards,  viewQueries,  entryComponents,  template,  componentViewType,  rendererType,  componentFactory }: {  isHost: boolean,  type: CompileTypeMetadata,  isComponent: boolean,  selector: string|null,  exportAs: string|null,  changeDetection: ChangeDetectionStrategy|null,  inputs: string[],  outputs: string[],  host: {[key: string]: string},  providers: CompileProviderMetadata[],  viewProviders: CompileProviderMetadata[],  queries: CompileQueryMetadata[],  guards: {[key: string]: any};  viewQueries: CompileQueryMetadata[],  entryComponents: CompileEntryComponentMetadata[],  template: CompileTemplateMetadata,  componentViewType: StaticSymbol|ProxyClass|null,  rendererType: StaticSymbol|object|null,  componentFactory: StaticSymbol|object|null, }): CompileDirectiveMetadata;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L304-L403)

#### Parameters (#create-parameters)

| Name | Type | Description |
| ---- | ---- | ----------- |


| {
isHost,
type,
isComponent,
selector,
exportAs,
changeDetection,
inputs,
outputs,
host,
providers,
viewProviders,
queries,
guards,
viewQueries,
entryComponents,
template,
componentViewType,
rendererType,
componentFactory
} | `{ isHost: boolean; type: CompileTypeMetadata; isComponent: boolean; selector: string | null; exportAs: string | null; changeDetection: ChangeDetectionStrategy | null; inputs: string[]; outputs: string[]; host: { [key: string]: string; }; providers: CompileProviderMetadata[]; viewProviders: CompileProviderMetadata[]; queries: CompileQueryMetadata[]; guards: { [key: string]: any; }; viewQueries: CompileQueryMetadata[]; entryComponents: CompileEntryComponentMetadata[]; template: CompileTemplateMetadata; componentViewType: StaticSymbol | ProxyClass | null; rendererType: StaticSymbol | object | null; componentFactory: StaticSymbol | object | null; }` | |

### toSummary

```ts
toSummary(): CompileDirectiveSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L497-L521)
