---
kind: ClassDeclaration
name: DefaultDateTransformer
module: src
---

# DefaultDateTransformer

```ts
class DefaultDateTransformer implements TranslocoDateTransformer {
  public transform(
    date: Date,
    locale: Locale,
    options: DateFormatOptions
  ): string;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.transformers.ts#L17-L21)

## Methods

### transform

```ts
public transform(date: Date, locale: Locale, options: DateFormatOptions): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.transformers.ts#L18-L20)

#### Parameters (#transform-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| date    | `Date`              |             |
| locale  | `string`            |             |
| options | `DateFormatOptions` |             |
