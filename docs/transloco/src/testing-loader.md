---
kind: ClassDeclaration
name: TestingLoader
module: src
---

# TestingLoader

```ts
class TestingLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<Translation> | Promise<Translation>;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco-testing.module.ts#L8-L15)

## Methods

### getTranslation

```ts
getTranslation(lang: string): Observable<Translation> | Promise<Translation>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco-testing.module.ts#L12-L14)

#### Parameters (#getTranslation-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |
