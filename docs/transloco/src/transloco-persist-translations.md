---
kind: ClassDeclaration
name: TranslocoPersistTranslations
module: src
---

# TranslocoPersistTranslations

```ts
class TranslocoPersistTranslations implements TranslocoLoader, OnDestroy {
  getTranslation(lang: string): Observable<Translation>;
  clearCache();
  ngOnDestroy();
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-persist-translations/src/lib/transloco-persist-translations.service.ts#L17-L123)

## Methods

### getTranslation

```ts
getTranslation(lang: string): Observable<Translation>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-persist-translations/src/lib/transloco-persist-translations.service.ts#L32-L45)

#### Parameters (#getTranslation-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### clearCache

```ts
clearCache();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-persist-translations/src/lib/transloco-persist-translations.service.ts#L47-L51)

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-persist-translations/src/lib/transloco-persist-translations.service.ts#L119-L121)
