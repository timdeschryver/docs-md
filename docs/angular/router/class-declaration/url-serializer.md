---
kind: ClassDeclaration
name: UrlSerializer
module: router
---

# UrlSerializer

## description

Serializes and deserializes a URL string into a URL tree.

The url serialization strategy is customizable. You can
make all URLs case insensitive by providing a custom UrlSerializer.

See `DefaultUrlSerializer` for an example of a URL serializer.

```ts
class UrlSerializer {
  abstract parse(url: string): UrlTree;
  abstract serialize(tree: UrlTree): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L265-L271)

## publicApi

## Methods

### parse

```ts
abstract parse(url: string): UrlTree;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L267-L267)

#### Parameters (#parse-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| url  | `string` |             |

### serialize

```ts
abstract serialize(tree: UrlTree): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L270-L270)

#### Parameters (#serialize-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| tree | `UrlTree` |             |
