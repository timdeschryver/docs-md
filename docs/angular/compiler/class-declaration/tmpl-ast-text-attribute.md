---
kind: ClassDeclaration
name: TmplAstTextAttribute
module: compiler
---

# TmplAstTextAttribute

```ts
class TextAttribute implements Node {
  visit<Result>(visitor: Visitor<Result>): Result;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L33-L40)

## Methods

### visit

```ts
visit<Result>(visitor: Visitor<Result>): Result;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L37-L39)

#### Parameters (#visit-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| visitor | `Visitor<Result>` |             |
