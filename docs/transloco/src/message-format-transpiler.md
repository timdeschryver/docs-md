---
kind: ClassDeclaration
name: MessageFormatTranspiler
module: src
---

# MessageFormatTranspiler

```ts
class MessageFormatTranspiler extends DefaultTranspiler {
  transpile(
    value: any,
    params: HashMap<any> = {},
    translation: Translation
  ): any;
  onLangChanged(lang: string);
  setLocale(locale: MFLocale);
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-messageformat/src/lib/messageformat.transpiler.ts#L21-L67)

## Methods

### transpile

```ts
transpile(value: any, params: HashMap<any> = {}, translation: Translation): any;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-messageformat/src/lib/messageformat.transpiler.ts#L36-L58)

#### Parameters (#transpile-parameters)

| Name        | Type  | Description |
| ----------- | ----- | ----------- |
| value       | `any` |             |
| params      | `any` |             |
| translation | `any` |             |

### onLangChanged

```ts
onLangChanged(lang: string);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-messageformat/src/lib/messageformat.transpiler.ts#L60-L62)

#### Parameters (#onLangChanged-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| lang | `string` |             |

### setLocale

```ts
setLocale(locale: MFLocale);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-messageformat/src/lib/messageformat.transpiler.ts#L64-L66)

#### Parameters (#setLocale-parameters)

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| locale | `MFLocale` |             |
