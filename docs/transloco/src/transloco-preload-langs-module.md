---
kind: ClassDeclaration
name: TranslocoPreloadLangsModule
module: src
---

# TranslocoPreloadLangsModule

```ts
class TranslocoPreloadLangsModule implements OnDestroy {
  static preload(
    langs: string[]
  ): ModuleWithProviders<TranslocoPreloadLangsModule>;
  ngOnDestroy();
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-preload-langs/src/lib/transloco-preload-langs.module.ts#L33-L69)

## Methods

### preload

```ts
static preload(langs: string[]): ModuleWithProviders<TranslocoPreloadLangsModule>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-preload-langs/src/lib/transloco-preload-langs.module.ts#L38-L43)

#### Parameters (#preload-parameters)

| Name  | Type       | Description |
| ----- | ---------- | ----------- |
| langs | `string[]` |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-preload-langs/src/lib/transloco-preload-langs.module.ts#L63-L68)
