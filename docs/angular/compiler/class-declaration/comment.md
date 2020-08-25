---
kind: ClassDeclaration
name: Comment
module: compiler
---

# Comment

```ts
class Comment implements Node {
  visit(visitor: Visitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L76-L81)

## Methods

### visit

```ts
visit(visitor: Visitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/ast.ts#L78-L80)

#### Parameters (#visit-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| visitor | `Visitor` |             |
| context | `any`     |             |
