---
kind: ClassDeclaration
name: RecursiveVisitor
module: compiler
---

# RecursiveVisitor

```ts
class RecursiveVisitor implements Visitor {
  visitElement(ast: Element, context: any): any;
  visitExpansion(ast: Expansion, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L111-L143)

## Methods

### visitElement

```ts
visitElement(ast: Element, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L114-L119)

#### Parameters (#visitElement-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| ast     | `Element` |             |
| context | `any`     |             |

### visitAttribute

```ts
visitAttribute(ast: Attribute, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L121-L121)

#### Parameters (#visitAttribute-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `Attribute` |             |
| context | `any`       |             |

### visitText

```ts
visitText(ast: Text, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L122-L122)

#### Parameters (#visitText-parameters)

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| ast     | `Text` |             |
| context | `any`  |             |

### visitComment

```ts
visitComment(ast: Comment, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L123-L123)

#### Parameters (#visitComment-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| ast     | `Comment` |             |
| context | `any`     |             |

### visitExpansion

```ts
visitExpansion(ast: Expansion, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L125-L129)

#### Parameters (#visitExpansion-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `Expansion` |             |
| context | `any`       |             |

### visitExpansionCase

```ts
visitExpansionCase(ast: ExpansionCase, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L131-L131)

#### Parameters (#visitExpansionCase-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `ExpansionCase` |             |
| context | `any`           |             |
