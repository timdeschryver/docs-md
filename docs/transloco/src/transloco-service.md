---
kind: ClassDeclaration
name: TranslocoService
module: src
---

# TranslocoService

```ts
class TranslocoService implements OnDestroy {
  langChanges$: Observable<string>;
  events$ = this.events.asObservable();

  getDefaultLang();
  setDefaultLang(lang: string);
  getActiveLang();
  setActiveLang(lang: string);
  setAvailableLangs(langs: AvailableLangs);
  getAvailableLangs();
  load(path: string, options: LoadOptions = {}): Observable<Translation>;
  translate<T = any>(
    key: TranslateParams,
    params: HashMap = {},
    lang = this.getActiveLang()
  ): T;
  selectTranslate<T = any>(
    key: TranslateParams,
    params?: HashMap,
    lang?: string | TranslocoScope,
    _isObject = false
  ): Observable<T>;
  translateObject<T = any>(
    key: TranslateObjectParams,
    params?: HashMap,
    lang = this.getActiveLang()
  ): T | T[];
  translateObject<T = any>(key: string, params?: HashMap, lang?: string): T;
  translateObject<T = any>(key: string[], params?: HashMap, lang?: string): T[];
  translateObject<T = any>(
    key: TranslateParams,
    params?: HashMap,
    lang?: string
  ): T | T[];
  translateObject<T = any>(
    key: HashMap | Map<string, HashMap>,
    params?: null,
    lang?: string
  ): T[];
  selectTranslateObject<T = any>(
    key: TranslateObjectParams,
    params?: HashMap,
    lang?: string
  ): Observable<T> | Observable<T[]>;
  selectTranslateObject<T = any>(
    key: string,
    params?: HashMap,
    lang?: string
  ): Observable<T>;
  selectTranslateObject<T = any>(
    key: string[],
    params?: HashMap,
    lang?: string
  ): Observable<T[]>;
  selectTranslateObject<T = any>(
    key: HashMap | Map<string, HashMap>,
    params?: null,
    lang?: string
  ): Observable<T[]>;
  getTranslation(langOrScope?: string): Map<string, Translation> | Translation;
  getTranslation(): Map<string, Translation>;
  getTranslation(langOrScope: string): Translation;
  selectTranslation(lang?: string): Observable<Translation>;
  setTranslation(
    translation: Translation,
    lang = this.getActiveLang(),
    options: SetTranslationOptions = {}
  );
  setTranslationKey(key: string, value: string, lang = this.getActiveLang());
  setFallbackLangForMissingTranslation({
    fallbackLang,
  }: Pick<TranslocoConfig, "fallbackLang">): void;
  _handleMissingKey(key: string, value: any, params?: HashMap);
  _isLangScoped(lang: string);
  isLang(lang: string): boolean;
  _loadDependencies(
    path: string,
    inlineLoader?: InlineLoader
  ): Observable<Translation | Translation[]>;
  _completeScopeWithLang(langOrScope: string);
  _setScopeAlias(scope: string, alias: string);
  ngOnDestroy();
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L39-L642)

## Methods

### getDefaultLang

```ts
getDefaultLang();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L96-L98)

### setDefaultLang

```ts
setDefaultLang(lang: string);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L100-L102)

#### Parameters (#setDefaultLang-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### getActiveLang

```ts
getActiveLang();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L104-L106)

### setActiveLang

```ts
setActiveLang(lang: string);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L108-L112)

#### Parameters (#setActiveLang-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### setAvailableLangs

```ts
setAvailableLangs(langs: AvailableLangs);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L114-L116)

#### Parameters (#setAvailableLangs-parameters)

| Name  | Type             | Description |
| ----- | ---------------- | ----------- |
| langs | `AvailableLangs` |             |

### getAvailableLangs

#### description (#getAvailableLangs-description)

Gets the available languages.

```ts
getAvailableLangs();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L125-L127)

#### returns (#getAvailableLangs-returns)

An array of the available languages. Can be either a `string[]` or a `{ id: string; label: string }[]`
depending on how the available languages are set in your module.

### load

```ts
load(path: string, options: LoadOptions = {}): Observable<Translation>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L129-L168)

#### Parameters (#load-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| path    | `string`      |             |
| options | `LoadOptions` |             |

### translate

#### description (#translate-description)

Gets the instant translated value of a key

```ts
translate<T = any>(key: TranslateParams, params: HashMap = {}, lang = this.getActiveLang()): T;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L181-L200)

#### example (#translate-example)

translate<string>('hello')
translate('hello', { value: 'value' })
translate<string[]>(['hello', 'key'])
translate('hello', { }, 'en')
translate('scope.someKey', { }, 'en')

#### Parameters (#translate-parameters)

| Name   | Type              | Description |
| ------ | ----------------- | ----------- |
| key    | `TranslateParams` |             |
| params | `HashMap<any>`    |             |
| lang   | `any`             |             |

### selectTranslate

#### description (#selectTranslate-description)

Gets the translated value of a key as observable

```ts
selectTranslate<T = any>(  key: TranslateParams,  params?: HashMap,  lang?: string | TranslocoScope,  _isObject = false ): Observable<T>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L213-L242)

#### example (#selectTranslate-example)

selectTranslate<string>('hello').subscribe(value => ...)
selectTranslate<string>('hello', {}, 'es').subscribe(value => ...)
selectTranslate<string>('hello', {}, 'todos').subscribe(value => ...)
selectTranslate<string>('hello', {}, { scope: 'todos' }).subscribe(value => ...)

#### Parameters (#selectTranslate-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| key        | `TranslateParams` |             |
| params     | `HashMap<any>`    |             |
| lang       | `TranslocoScope`  |             |
| \_isObject | `boolean`         |             |

### translateObject

```ts
translateObject<T = any>(key: TranslateObjectParams, params?: HashMap, lang = this.getActiveLang()): T | T[];
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L268-L289)

#### Parameters (#translateObject-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `any`          |             |
| params | `HashMap<any>` |             |
| lang   | `any`          |             |

### translateObject

#### description (#translateObject-description)

Translate the given path that returns an object

```ts
translateObject<T = any>(key: string, params?: HashMap, lang?: string): T;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L264-L264)

#### example (#translateObject-example)

service.translateObject('path.to.object', {'subpath': { value: 'someValue'}}) => returns translated object

#### Parameters (#translateObject-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `string`       |             |
| params | `HashMap<any>` |             |
| lang   | `string`       |             |

### translateObject

```ts
translateObject<T = any>(key: string[], params?: HashMap, lang?: string): T[];
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L265-L265)

#### Parameters (#translateObject-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `string[]`     |             |
| params | `HashMap<any>` |             |
| lang   | `string`       |             |

### translateObject

```ts
translateObject<T = any>(key: TranslateParams, params?: HashMap, lang?: string): T | T[];
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L266-L266)

#### Parameters (#translateObject-parameters)

| Name   | Type              | Description |
| ------ | ----------------- | ----------- |
| key    | `TranslateParams` |             |
| params | `HashMap<any>`    |             |
| lang   | `string`          |             |

### translateObject

```ts
translateObject<T = any>(key: HashMap | Map<string, HashMap>, params?: null, lang?: string): T[];
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L267-L267)

#### Parameters (#translateObject-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| key    | `any`    |             |
| params | `null`   |             |
| lang   | `string` |             |

### selectTranslateObject

```ts
selectTranslateObject<T = any>(  key: TranslateObjectParams,  params?: HashMap,  lang?: string ): Observable<T> | Observable<T[]>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L294-L317)

#### Parameters (#selectTranslateObject-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `any`          |             |
| params | `HashMap<any>` |             |
| lang   | `string`       |             |

### selectTranslateObject

```ts
selectTranslateObject<T = any>(key: string, params?: HashMap, lang?: string): Observable<T>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L291-L291)

#### Parameters (#selectTranslateObject-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `string`       |             |
| params | `HashMap<any>` |             |
| lang   | `string`       |             |

### selectTranslateObject

```ts
selectTranslateObject<T = any>(key: string[], params?: HashMap, lang?: string): Observable<T[]>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L292-L292)

#### Parameters (#selectTranslateObject-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `string[]`     |             |
| params | `HashMap<any>` |             |
| lang   | `string`       |             |

### selectTranslateObject

```ts
selectTranslateObject<T = any>(key: HashMap | Map<string, HashMap>, params?: null, lang?: string): Observable<T[]>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L293-L293)

#### Parameters (#selectTranslateObject-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| key    | `any`    |             |
| params | `null`   |             |
| lang   | `string` |             |

### getTranslation

```ts
getTranslation(langOrScope?: string): Map<string, Translation> | Translation;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L330-L344)

#### Parameters (#getTranslation-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| langOrScope | `string` |             |

### getTranslation

#### description (#getTranslation-description)

Gets an object of translations for a given language

```ts
getTranslation(): Map<string, Translation>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L328-L328)

#### example (#getTranslation-example)

getTranslation()
getTranslation('en')
getTranslation('admin-page/en')

### getTranslation

```ts
getTranslation(langOrScope: string): Translation;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L329-L329)

#### Parameters (#getTranslation-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| langOrScope | `string` |             |

### selectTranslation

#### description (#selectTranslation-description)

Gets an object of translations for a given language

```ts
selectTranslation(lang?: string): Observable<Translation>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L356-L368)

#### example (#selectTranslation-example)

selectTranslation().subscribe() - will return the current lang translation
selectTranslation('es').subscribe()
selectTranslation('admin-page').subscribe() - will return the current lang scope translation
selectTranslation('admin-page/es').subscribe()

#### Parameters (#selectTranslation-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### setTranslation

#### description (#setTranslation-description)

Sets or merge a given translation object to current lang

```ts
setTranslation(translation: Translation, lang = this.getActiveLang(), options: SetTranslationOptions = {});
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L380-L408)

#### example (#setTranslation-example)

setTranslation({ ... })
setTranslation({ ... }, 'en')
setTranslation({ ... }, 'es', { merge: false } )
setTranslation({ ... }, 'todos/en', { merge: false } )

#### Parameters (#setTranslation-parameters)

| Name        | Type                    | Description |
| ----------- | ----------------------- | ----------- |
| translation | `HashMap<any>`          |             |
| lang        | `any`                   |             |
| options     | `SetTranslationOptions` |             |

### setTranslationKey

#### description (#setTranslationKey-description)

Sets translation key with given value

```ts
setTranslationKey(key: string, value: string, lang = this.getActiveLang());
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L419-L427)

#### example (#setTranslationKey-example)

setTranslationKey('key', 'value')
setTranslationKey('key.nested', 'value')
setTranslationKey('key.nested', 'value', 'en')

#### Parameters (#setTranslationKey-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| key   | `string` |             |
| value | `string` |             |
| lang  | `any`    |             |

### setFallbackLangForMissingTranslation

#### description (#setFallbackLangForMissingTranslation-description)

Sets the fallback lang for the currently active language

```ts
setFallbackLangForMissingTranslation({ fallbackLang }: Pick<TranslocoConfig, 'fallbackLang'>): void;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L433-L438)

#### Parameters (#setFallbackLangForMissingTranslation-parameters)

| Name             | Type                                    | Description |
| ---------------- | --------------------------------------- | ----------- |
| fallbackLang     | ``                                      |             |
| { fallbackLang } | `Pick<TranslocoConfig, "fallbackLang">` |             |

### \_handleMissingKey

```ts
_handleMissingKey(key: string, value: any, params?: HashMap);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L443-L457)

#### internal (#\_handleMissingKey-internal)

#### Parameters (#\_handleMissingKey-parameters)

| Name   | Type           | Description |
| ------ | -------------- | ----------- |
| key    | `string`       |             |
| value  | `any`          |             |
| params | `HashMap<any>` |             |

### \_isLangScoped

```ts
_isLangScoped(lang: string);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L462-L464)

#### internal (#\_isLangScoped-internal)

#### Parameters (#\_isLangScoped-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### isLang

#### description (#isLang-description)

Checks if a given string is one of the specified available languages.

```ts
isLang(lang: string): boolean;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L472-L474)

#### returns (#isLang-returns)

True if the given string is an available language.
False if the given string is not an available language.

#### Parameters (#isLang-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### \_loadDependencies

```ts
_loadDependencies(path: string, inlineLoader?: InlineLoader): Observable<Translation | Translation[]>;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L482-L489)

#### internal (#\_loadDependencies-internal)

We always want to make sure the global lang is loaded
before loading the scope since you can access both via the pipe/directive.

#### Parameters (#\_loadDependencies-parameters)

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| path         | `string`                               |             |
| inlineLoader | `HashMap<() => Promise<HashMap<any>>>` |             |

### \_completeScopeWithLang

```ts
_completeScopeWithLang(langOrScope: string);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L494-L499)

#### internal (#\_completeScopeWithLang-internal)

#### Parameters (#\_completeScopeWithLang-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| langOrScope | `string` |             |

### \_setScopeAlias

```ts
_setScopeAlias(scope: string, alias: string);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L504-L509)

#### internal (#\_setScopeAlias-internal)

#### Parameters (#\_setScopeAlias-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| scope | `string` |             |
| alias | `string` |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.service.ts#L511-L513)

## Parameters

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| langChanges\$ | `any` |             |
| events\$      | `any` |             |
