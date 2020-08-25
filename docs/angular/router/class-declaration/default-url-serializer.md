---
kind: ClassDeclaration
name: DefaultUrlSerializer
module: router
---

# DefaultUrlSerializer

## description

A default implementation of the `UrlSerializer`.

Example URLs:

```
/inbox/33(popup:compose)
/inbox/33;open=true/messages/44
```

DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
specify route specific parameters.

```ts
class DefaultUrlSerializer implements UrlSerializer {
  parse(url: string): UrlTree;
  serialize(tree: UrlTree): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L291-L307)

## publicApi

## Methods

### parse

```ts
parse(url: string): UrlTree;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L293-L296)

#### Parameters (#parse-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| url  | `string` |             |

### serialize

```ts
serialize(tree: UrlTree): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L299-L306)

#### Parameters (#serialize-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| tree | `UrlTree` |             |
