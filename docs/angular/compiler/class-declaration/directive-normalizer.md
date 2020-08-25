---
kind: ClassDeclaration
name: DirectiveNormalizer
module: compiler
---

# DirectiveNormalizer

```ts
class DirectiveNormalizer {
  clearCache(): void;
  clearCacheFor(normalizedDirective: CompileDirectiveMetadata): void;
  normalizeTemplate(
    prenormData: PrenormalizedTemplateMetadata
  ): SyncAsync<CompileTemplateMetadata>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_normalizer.ts#L36-L259)

## Methods

### clearCache

```ts
clearCache(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_normalizer.ts#L43-L45)

### clearCacheFor

```ts
clearCacheFor(normalizedDirective: CompileDirectiveMetadata): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_normalizer.ts#L47-L56)

#### Parameters (#clearCacheFor-parameters)

| Name                | Type                       | Description |
| ------------------- | -------------------------- | ----------- |
| normalizedDirective | `CompileDirectiveMetadata` |             |

### normalizeTemplate

```ts
normalizeTemplate(prenormData: PrenormalizedTemplateMetadata):   SyncAsync<CompileTemplateMetadata>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_normalizer.ts#L67-L98)

#### Parameters (#normalizeTemplate-parameters)

| Name        | Type                            | Description |
| ----------- | ------------------------------- | ----------- |
| prenormData | `PrenormalizedTemplateMetadata` |             |
