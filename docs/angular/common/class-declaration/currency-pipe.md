---
kind: ClassDeclaration
name: CurrencyPipe
module: common
---

# CurrencyPipe

## description

Transforms a number to a currency string, formatted according to locale rules
that determine group sizing and separator, decimal-point character,
and other locale-specific configurations.

{@a currency-code-deprecation}

<div class="alert is-helpful">

**Deprecation notice:**

The default currency code is currently always `USD` but this is deprecated from v9.

**In v11 the default currency code will be taken from the current locale identified by
the `LOCAL_ID` token. See the [i18n guide](guide/i18n#setting-up-the-locale-of-your-app) for
more information.**

If you need the previous behavior then set it by creating a `DEFAULT_CURRENCY_CODE` provider in
your application `NgModule`:

```ts
{provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}
```

</div>

```ts
class CurrencyPipe implements PipeTransform {
  transform(
    value: any,
    currencyCode?: string,
    display: "code" | "symbol" | "symbol-narrow" | string | boolean = "symbol",
    digitsInfo?: string,
    locale?: string
  ): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/number_pipe.ts#L176-L247)

## ngModule

CommonModule

## see

`getCurrencySymbol()`
`formatCurrency()`

## usageNotes

The following code shows how the pipe transforms numbers
into text strings, according to various format specifications,
where the caller's default locale is `en-US`.

<code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>

## publicApi

## Methods

### transform

#### description (#transform-description)

```ts
transform(   value: any, currencyCode?: string,   display: 'code'|'symbol'|'symbol-narrow'|string|boolean = 'symbol', digitsInfo?: string,   locale?: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/number_pipe.ts#L215-L246)

#### Parameters (#transform-parameters)

| Name         | Type     | Description                                                           |
| ------------ | -------- | --------------------------------------------------------------------- |
| value        | `any`    | The number to be formatted as currency.                               |
| currencyCode | `string` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, |
| display      | `string  | boolean`                                                              | The format for the currency indicator. One of the following: |
| digitsInfo   | `string` | Decimal representation options, specified by a string                 |
| locale       | `string` | A locale code for the locale format rules to use.                     |
