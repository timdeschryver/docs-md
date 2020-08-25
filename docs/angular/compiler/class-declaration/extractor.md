---
kind: ClassDeclaration
name: Extractor
module: compiler
---

# Extractor

```ts
class Extractor {
  extract(rootFiles: string[]): Promise<MessageBundle>;
  static create(
    host: ExtractorHost,
    locale: string | null
  ): { extractor: Extractor; staticReflector: StaticReflector };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/extractor.ts#L53-L124)

## Methods

### extract

```ts
extract(rootFiles: string[]): Promise<MessageBundle>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/extractor.ts#L58-L95)

#### Parameters (#extract-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| rootFiles | `string[]` |             |

### create

```ts
static create(host: ExtractorHost, locale: string|null):   {extractor: Extractor, staticReflector: StaticReflector};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/extractor.ts#L97-L123)

#### Parameters (#create-parameters)

| Name   | Type            | Description |
| ------ | --------------- | ----------- |
| host   | `ExtractorHost` |             |
| locale | `string`        |             |
