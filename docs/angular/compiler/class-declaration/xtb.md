---
kind: ClassDeclaration
name: Xtb
module: compiler
---

# Xtb

```ts
class Xtb extends Serializer {
  write(messages: i18n.Message[], locale: string | null): string;
  load(
    content: string,
    url: string
  ): { locale: string; i18nNodesByMsgId: { [msgId: string]: i18n.Node[] } };
  digest(message: i18n.Message): string;
  createNameMapper(message: i18n.Message): PlaceholderMapper;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xtb.ts#L21-L64)

## Methods

### write

```ts
write(messages: i18n.Message[], locale: string|null): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xtb.ts#L22-L24)

#### Parameters (#write-parameters)

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| messages | `i18n.Message[]` |             |
| locale   | `string`         |             |

### load

```ts
load(content: string, url: string):   {locale: string, i18nNodesByMsgId: {[msgId: string]: i18n.Node[]}};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xtb.ts#L26-L55)

#### Parameters (#load-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| content | `string` |             |
| url     | `string` |             |

### digest

```ts
digest(message: i18n.Message): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xtb.ts#L57-L59)

#### Parameters (#digest-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |

### createNameMapper

```ts
createNameMapper(message: i18n.Message): PlaceholderMapper;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/xtb.ts#L61-L63)

#### Parameters (#createNameMapper-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |
