---
kind: ClassDeclaration
name: TranslocoTestingModule
module: src
---

# TranslocoTestingModule

```ts
class TranslocoTestingModule {
  static withLangs(
    langs: HashMap<Translation>,
    config: Partial<TranslocoConfig> = {}
  ): ModuleWithProviders<TranslocoTestingModule>;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco-testing.module.ts#L17-L48)

## Methods

### withLangs

```ts
static withLangs(  langs: HashMap<Translation>,  config: Partial<TranslocoConfig> = {} ): ModuleWithProviders<TranslocoTestingModule>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco-testing.module.ts#L21-L47)

#### Parameters (#withLangs-parameters)

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| langs  | `HashMap<HashMap<any>>`    |             |
| config | `Partial<TranslocoConfig>` |             |
