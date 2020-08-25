---
kind: ClassDeclaration
name: TmplAstVariable
module: compiler
---

# TmplAstVariable

```ts
class Variable implements Node {
  visit<Result>(visitor: Visitor<Result>): Result;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L117-L124)

## Methods

### visit

```ts
visit<Result>(visitor: Visitor<Result>): Result;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L121-L123)

#### Parameters (#visit-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| visitor | `Visitor<Result>` |             |
