---
kind: ClassDeclaration
name: I18nPluralPipe
module: common
---

# I18nPluralPipe

## description

Maps a value to a string that pluralizes the value according to locale rules.

```ts
class I18nPluralPipe implements PipeTransform {
  transform(
    value: number,
    pluralMap: { [count: string]: string },
    locale?: string
  ): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/i18n_plural_pipe.ts#L31-L53)

## ngModule

CommonModule

## usageNotes

### Example

{@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}

## publicApi

## Methods

### transform

```ts
transform(value: number, pluralMap: {[count: string]: string}, locale?: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/i18n_plural_pipe.ts#L42-L52)

#### Parameters (#transform-parameters)

| Name      | Type                           | Description                                                                  |
| --------- | ------------------------------ | ---------------------------------------------------------------------------- |
| value     | `number`                       | the number to be formatted                                                   |
| pluralMap | `{ [count: string]: string; }` | an object that mimics the ICU format, see                                    |
| locale    | `string`                       | a `string` defining the locale to use (uses the current {@link LOCALE_ID} by |
