---
kind: ClassDeclaration
name: HtmlTagDefinition
module: compiler
---

# HtmlTagDefinition

```ts
class HtmlTagDefinition implements TagDefinition {
  closedByParent: boolean = false;
  implicitNamespacePrefix: string | null;
  contentType: TagContentType;
  isVoid: boolean;
  ignoreFirstLf: boolean;
  canSelfClose: boolean = false;

  isClosedByChild(name: string): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/html_tags.ts#L11-L49)

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| closedByParent          | `boolean`        |             |
| implicitNamespacePrefix | `string`         |             |
| contentType             | `TagContentType` |             |
| isVoid                  | `boolean`        |             |
| ignoreFirstLf           | `boolean`        |             |
| canSelfClose            | `boolean`        |             |

## Methods

### isClosedByChild

```ts
isClosedByChild(name: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/html_tags.ts#L46-L48)

#### Parameters (#isClosedByChild-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |
