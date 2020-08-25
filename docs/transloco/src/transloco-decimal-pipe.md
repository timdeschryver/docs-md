---
kind: ClassDeclaration
name: TranslocoDecimalPipe
module: src
---

# TranslocoDecimalPipe

```ts
class TranslocoDecimalPipe
  extends TranslocoLocalePipe
  implements PipeTransform, OnDestroy {
  transform(
    value: string | number,
    numberFormatOptions: NumberFormatOptions = {},
    locale?: Locale
  ): string;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-decimal.pipe.ts#L9-L45)

## Methods

### transform

#### description (#transform-description)

Transform a given number into the locale's currency format.

```ts
transform(value: string | number, numberFormatOptions: NumberFormatOptions = {}, locale?: Locale): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-decimal.pipe.ts#L31-L40)

#### example (#transform-example)

1234567890 | translocoDecimal: {} : en-US // 1,234,567,890
1234567890 | translocoDecimal: {useGrouping: false}: en-US // 1234567890

#### Parameters (#transform-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| value               | `string               | number`     |  |
| numberFormatOptions | `NumberFormatOptions` |             |
| locale              | `string`              |             |

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-decimal.pipe.ts#L42-L44)
