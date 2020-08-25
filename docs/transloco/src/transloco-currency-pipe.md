---
kind: ClassDeclaration
name: TranslocoCurrencyPipe
module: src
---

# TranslocoCurrencyPipe

```ts
class TranslocoCurrencyPipe
  extends TranslocoLocalePipe
  implements PipeTransform, OnDestroy {
  transform(
    value: number | string,
    display: "code" | "symbol" | "name" = "symbol",
    numberFormatOptions: NumberFormatOptions = {},
    currencyCode?: Currency,
    locale?: Locale
  ): string;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-currency.pipe.ts#L9-L54)

## Methods

### transform

#### description (#transform-description)

Transform a given number into the locale's currency format.

```ts
transform(  value: number | string,  display: 'code' | 'symbol' | 'name' = 'symbol',  numberFormatOptions: NumberFormatOptions = {},  currencyCode?: Currency,  locale?: Locale ): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-currency.pipe.ts#L32-L49)

#### example (#transform-example)

1000000 | translocoCurrency: 'symbol' : {} : USD // $1,000,000.00
1000000 | translocoCurrency: 'name' : {} : USD // 1,000,000.00 US dollars
1000000 | translocoCurrency: 'symbol' : {minimumFractionDigits: 0 } : USD // $1,000,000

#### Parameters (#transform-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| value               | `string               | number`     |  |
| display             | `"symbol"             | "code"      | "name"` |  |
| numberFormatOptions | `NumberFormatOptions` |             |
| currencyCode        | `string`              |             |
| locale              | `string`              |             |

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-currency.pipe.ts#L51-L53)
