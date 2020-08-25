---
kind: ClassDeclaration
name: I18nSelectPipe
module: common
---

# I18nSelectPipe

## description

Generic selector that displays the string that matches the current value.

If none of the keys of the `mapping` match the `value`, then the content
of the `other` key is returned when present, otherwise an empty string is returned.

```ts
class I18nSelectPipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    mapping: { [key: string]: string }
  ): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/i18n_select_pipe.ts#L29-L53)

## ngModule

CommonModule

## usageNotes

### Example

{@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}

## publicApi

## Methods

### transform

```ts
transform(value: string|null|undefined, mapping: {[key: string]: string}): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/i18n_select_pipe.ts#L36-L52)

#### Parameters (#transform-parameters)

| Name    | Type                         | Description                                                |
| ------- | ---------------------------- | ---------------------------------------------------------- |
| value   | `string`                     | a string to be internationalized.                          |
| mapping | `{ [key: string]: string; }` | an object that indicates the text that should be displayed |
