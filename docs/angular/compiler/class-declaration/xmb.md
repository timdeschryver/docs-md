---
kind: ClassDeclaration
name: Xmb
module: compiler
---

# Xmb

```ts
class Xmb extends Serializer {
  write(messages: i18n.Message[], locale: string | null): string;
  load(
    content: string,
    url: string
  ): { locale: string; i18nNodesByMsgId: { [msgId: string]: i18n.Node[] } };
  digest(message: i18n.Message): string;
  createNameMapper(message: i18n.Message): PlaceholderMapper;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xmb.ts#L41-L96)

## Methods

### write

```ts
write(messages: i18n.Message[], locale: string|null): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xmb.ts#L42-L81)

#### Parameters (#write-parameters)

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| messages | `i18n.Message[]` |             |
| locale   | `string`         |             |

### load

```ts
load(content: string, url: string):   {locale: string, i18nNodesByMsgId: {[msgId: string]: i18n.Node[]}};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xmb.ts#L83-L86)

#### Parameters (#load-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| content | `string` |             |
| url     | `string` |             |

### digest

```ts
digest(message: i18n.Message): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xmb.ts#L88-L90)

#### Parameters (#digest-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |

### createNameMapper

```ts
createNameMapper(message: i18n.Message): PlaceholderMapper;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xmb.ts#L93-L95)

#### Parameters (#createNameMapper-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |
