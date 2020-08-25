---
kind: ClassDeclaration
name: TmplAstBoundAttribute
module: compiler
---

# TmplAstBoundAttribute

```ts
class BoundAttribute implements Node {
  static fromBoundElementProperty(prop: BoundElementProperty, i18n?: I18nMeta);
  visit<Result>(visitor: Visitor<Result>): Result;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L42-L57)

## Methods

### fromBoundElementProperty

```ts
static fromBoundElementProperty(prop: BoundElementProperty, i18n?: I18nMeta);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L48-L52)

#### Parameters (#fromBoundElementProperty-parameters)

| Name | Type                   | Description |
| ---- | ---------------------- | ----------- |
| prop | `BoundElementProperty` |             |
| i18n | `I18nMeta`             |             |

### visit

```ts
visit<Result>(visitor: Visitor<Result>): Result;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L54-L56)

#### Parameters (#visit-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| visitor | `Visitor<Result>` |             |
