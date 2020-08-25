---
kind: ClassDeclaration
name: Xliff2
module: compiler
---

# Xliff2

```ts
class Xliff2 extends Serializer {
  write(messages: i18n.Message[], locale: string | null): string;
  load(
    content: string,
    url: string
  ): { locale: string; i18nNodesByMsgId: { [msgId: string]: i18n.Node[] } };
  digest(message: i18n.Message): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff2.ts#L32-L114)

## Methods

### write

```ts
write(messages: i18n.Message[], locale: string|null): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff2.ts#L33-L86)

#### Parameters (#write-parameters)

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| messages | `i18n.Message[]` |             |
| locale   | `string`         |             |

### load

```ts
load(content: string, url: string):   {locale: string, i18nNodesByMsgId: {[msgId: string]: i18n.Node[]}};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff2.ts#L88-L109)

#### Parameters (#load-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| content | `string` |             |
| url     | `string` |             |

### digest

```ts
digest(message: i18n.Message): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xliff2.ts#L111-L113)

#### Parameters (#digest-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |
