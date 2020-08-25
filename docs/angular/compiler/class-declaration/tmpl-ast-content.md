---
kind: ClassDeclaration
name: TmplAstContent
module: compiler
---

# TmplAstContent

```ts
class Content implements Node {
  readonly name = "ng-content";

  visit<Result>(visitor: Visitor<Result>): Result;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L106-L115)

## Properties

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| name | `"ng-content"` |             |

## Methods

### visit

```ts
visit<Result>(visitor: Visitor<Result>): Result;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L112-L114)

#### Parameters (#visit-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| visitor | `Visitor<Result>` |             |
