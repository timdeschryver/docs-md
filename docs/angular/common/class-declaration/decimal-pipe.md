---
kind: ClassDeclaration
name: DecimalPipe
module: common
---

# DecimalPipe

## description

Transforms a number into a string,
formatted according to locale rules that determine group sizing and
separator, decimal-point character, and other locale-specific
configurations.

If no parameters are specified, the function rounds off to the nearest value using this
[rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
The behavior differs from that of the JavaScript `Math.round()` function.
In the following case for example, the pipe rounds down where
`Math.round()` rounds up:

```html
-2.5 | number:'1.0-0' > -3 Math.round(-2.5) > -2
```

```ts
class DecimalPipe implements PipeTransform {
  transform(value: any, digitsInfo?: string, locale?: string): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/number_pipe.ts#L51-L82)

## ngModule

CommonModule

## see

`formatNumber()`

## usageNotes

The following code shows how the pipe transforms numbers
into text strings, according to various format specifications,
where the caller's default locale is `en-US`.

### Example

<code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>

## publicApi

## Methods

### transform

```ts
transform(value: any, digitsInfo?: string, locale?: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/number_pipe.ts#L70-L81)

#### Parameters (#transform-parameters)

| Name       | Type     | Description                                           |
| ---------- | -------- | ----------------------------------------------------- |
| value      | `any`    | The number to be formatted.                           |
| digitsInfo | `string` | Decimal representation options, specified by a string |
| locale     | `string` | A locale code for the locale format rules to use.     |
