---
kind: ClassDeclaration
name: MessageBundle
module: compiler
---

# MessageBundle

## description

A container for message extracted from the templates.

```ts
class MessageBundle {
  updateFromTemplate(
    html: string,
    url: string,
    interpolationConfig: InterpolationConfig
  ): ParseError[];
  getMessages(): i18n.Message[];
  write(
    serializer: Serializer,
    filterSources?: (path: string) => string
  ): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/message_bundle.ts#L21-L84)

## Methods

### updateFromTemplate

```ts
updateFromTemplate(html: string, url: string, interpolationConfig: InterpolationConfig):   ParseError[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/message_bundle.ts#L28-L46)

#### Parameters (#updateFromTemplate-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| html                | `string`              |             |
| url                 | `string`              |             |
| interpolationConfig | `InterpolationConfig` |             |

### getMessages

```ts
getMessages(): i18n.Message[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/message_bundle.ts#L50-L52)

### write

```ts
write(serializer: Serializer, filterSources?: (path: string) => string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/message_bundle.ts#L54-L83)

#### Parameters (#write-parameters)

| Name          | Type                       | Description |
| ------------- | -------------------------- | ----------- |
| serializer    | `Serializer`               |             |
| filterSources | `(path: string) => string` |             |
