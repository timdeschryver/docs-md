---
kind: ClassDeclaration
name: TmplAstTemplate
module: compiler
---

# TmplAstTemplate

```ts
class Template implements Node {
  visit<Result>(visitor: Visitor<Result>): Result;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L94-L104)

## Methods

### visit

```ts
visit<Result>(visitor: Visitor<Result>): Result;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L101-L103)

#### Parameters (#visit-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| visitor | `Visitor<Result>` |             |
