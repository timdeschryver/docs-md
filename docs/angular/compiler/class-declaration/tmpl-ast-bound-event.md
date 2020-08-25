---
kind: ClassDeclaration
name: TmplAstBoundEvent
module: compiler
---

# TmplAstBoundEvent

```ts
class BoundEvent implements Node {
  static fromParsedEvent(event: ParsedEvent);
  visit<Result>(visitor: Visitor<Result>): Result;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L59-L76)

## Methods

### fromParsedEvent

```ts
static fromParsedEvent(event: ParsedEvent);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L65-L71)

#### Parameters (#fromParsedEvent-parameters)

| Name  | Type          | Description |
| ----- | ------------- | ----------- |
| event | `ParsedEvent` |             |

### visit

```ts
visit<Result>(visitor: Visitor<Result>): Result;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L73-L75)

#### Parameters (#visit-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| visitor | `Visitor<Result>` |             |
