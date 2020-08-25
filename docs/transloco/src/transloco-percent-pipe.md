---
kind: ClassDeclaration
name: TranslocoPercentPipe
module: src
---

# TranslocoPercentPipe

```ts
class TranslocoPercentPipe
  extends TranslocoLocalePipe
  implements PipeTransform, OnDestroy {
  transform(
    value: number | string,
    numberFormatOptions: NumberFormatOptions = {},
    locale?: Locale
  ): string;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-percent.pipe.ts#L9-L45)

## Methods

### transform

#### description (#transform-description)

Transform a given number into the locale's currency format.

```ts
transform(value: number | string, numberFormatOptions: NumberFormatOptions = {}, locale?: Locale): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-percent.pipe.ts#L31-L40)

#### example (#transform-example)

1 | translocoPercent : {} : en-US // 100%
"1" | translocoPercent : {} : en-US // 100%

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

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-percent.pipe.ts#L42-L44)
