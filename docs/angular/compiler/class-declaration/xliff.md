---
kind: ClassDeclaration
name: Xliff
module: compiler
---

# Xliff

```ts
class Xliff extends Serializer {
  write(messages: i18n.Message[], locale: string | null): string;
  load(
    content: string,
    url: string
  ): { locale: string; i18nNodesByMsgId: { [msgId: string]: i18n.Node[] } };
  digest(message: i18n.Message): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff.ts#L36-L121)

## Methods

### write

```ts
write(messages: i18n.Message[], locale: string|null): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff.ts#L37-L93)

#### Parameters (#write-parameters)

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| messages | `i18n.Message[]` |             |
| locale   | `string`         |             |

### load

```ts
load(content: string, url: string):   {locale: string, i18nNodesByMsgId: {[msgId: string]: i18n.Node[]}};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff.ts#L95-L116)

#### Parameters (#load-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| content | `string` |             |
| url     | `string` |             |

### digest

```ts
digest(message: i18n.Message): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff.ts#L118-L120)

#### Parameters (#digest-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |
