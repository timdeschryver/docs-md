---
kind: ClassDeclaration
name: Serializer
module: compiler
---

# Serializer

```ts
class Serializer {
  abstract write(messages: i18n.Message[], locale: string | null): string;
  abstract load(
    content: string,
    url: string
  ): {
    locale: string | null;
    i18nNodesByMsgId: { [msgId: string]: i18n.Node[] };
  };
  abstract digest(message: i18n.Message): string;
  createNameMapper(message: i18n.Message): PlaceholderMapper | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/serializer.ts#L11-L27)

## Methods

### write

```ts
abstract write(messages: i18n.Message[], locale: string|null): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/serializer.ts#L15-L15)

#### Parameters (#write-parameters)

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| messages | `i18n.Message[]` |             |
| locale   | `string`         |             |

### load

```ts
abstract load(content: string, url: string):   {locale: string|null, i18nNodesByMsgId: {[msgId: string]: i18n.Node[]}};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/serializer.ts#L17-L18)

#### Parameters (#load-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| content | `string` |             |
| url     | `string` |             |

### digest

```ts
abstract digest(message: i18n.Message): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/serializer.ts#L20-L20)

#### Parameters (#digest-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |

### createNameMapper

```ts
createNameMapper(message: i18n.Message): PlaceholderMapper|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/serializers/serializer.ts#L24-L26)

#### Parameters (#createNameMapper-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| message | `i18n.Message` |             |
