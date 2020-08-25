---
kind: ClassDeclaration
name: PercentPipe
module: common
---

# PercentPipe

## description

Transforms a number to a percentage
string, formatted according to locale rules that determine group sizing and
separator, decimal-point character, and other locale-specific
configurations.

```ts
class PercentPipe implements PipeTransform {
  transform(value: any, digitsInfo?: string, locale?: string): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/number_pipe.ts#L104-L134)

## ngModule

CommonModule

## see

`formatPercent()`

## usageNotes

The following code shows how the pipe transforms numbers
into text strings, according to various format specifications,
where the caller's default locale is `en-US`.

<code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>

## publicApi

## Methods

### transform

#### description (#transform-description)

```ts
transform(value: any, digitsInfo?: string, locale?: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/number_pipe.ts#L124-L133)

#### Parameters (#transform-parameters)

| Name       | Type     | Description                                           |
| ---------- | -------- | ----------------------------------------------------- |
| value      | `any`    | The number to be formatted as a percentage.           |
| digitsInfo | `string` | Decimal representation options, specified by a string |
| locale     | `string` | A locale code for the locale format rules to use.     |
