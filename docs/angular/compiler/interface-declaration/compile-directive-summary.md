---
kind: InterfaceDeclaration
name: CompileDirectiveSummary
module: compiler
---

# CompileDirectiveSummary

```ts
interface CompileDirectiveSummary {
  type: CompileTypeMetadata;
  isComponent: boolean;
  selector: string | null;
  exportAs: string | null;
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
  changeDetection: ChangeDetectionStrategy | null;
  template: CompileTemplateSummary | null;
  componentViewType: StaticSymbol | ProxyClass | null;
  rendererType: StaticSymbol | object | null;
  componentFactory: StaticSymbol | object | null;

  // inherited from CompileTypeSummary
  summaryKind: CompileSummaryKind | null;
  type: CompileTypeMetadata;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L277-L298)

## Properties

| Name              | Type                              | Description   |
| ----------------- | --------------------------------- | ------------- |
| type              | `CompileTypeMetadata`             |               |
| isComponent       | `boolean`                         |               |
| selector          | `string`                          |               |
| exportAs          | `string`                          |               |
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
| changeDetection   | `ChangeDetectionStrategy`         |               |
| template          | `CompileTemplateSummary`          |               |
| componentViewType | `StaticSymbol                     | ProxyClass`   |  |
| rendererType      | `object                           | StaticSymbol` |  |
| componentFactory  | `object                           | StaticSymbol` |  |
