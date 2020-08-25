---
kind: ClassDeclaration
name: DefaultNumberTransformer
module: src
---

# DefaultNumberTransformer

```ts
class DefaultNumberTransformer implements TranslocoNumberTransformer {
  public transform(
    value: number | string,
    type: NumberTypes,
    locale: string,
    options: Intl.NumberFormatOptions
  ): string;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.transformers.ts#L22-L31)

## Methods

### transform

```ts
public transform(  value: number | string,  type: NumberTypes,  locale: string,  options: Intl.NumberFormatOptions ): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.transformers.ts#L23-L30)

#### Parameters (#transform-parameters)

| Name    | Type                       | Description |
| ------- | -------------------------- | ----------- |
| value   | `string                    | number`     |  |
| type    | `NumberTypes`              |             |
| locale  | `string`                   |             |
| options | `Intl.NumberFormatOptions` |             |
