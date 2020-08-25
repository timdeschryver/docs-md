---
kind: ClassDeclaration
name: TranslocoPipe
module: src
---

# TranslocoPipe

```ts
class TranslocoPipe implements PipeTransform, OnDestroy {
  transform(
    key: string | null,
    params?: HashMap | undefined,
    inlineLang?: string | undefined
  ): string;
  ngOnDestroy();
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.pipe.ts#L12-L87)

## Methods

### transform

```ts
transform(key: string | null, params?: HashMap | undefined, inlineLang?: string | undefined): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.pipe.ts#L35-L69)

#### Parameters (#transform-parameters)

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| key        | `string`       |             |
| params     | `HashMap<any>` |             |
| inlineLang | `string`       |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.pipe.ts#L71-L73)
