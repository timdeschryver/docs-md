---
kind: ClassDeclaration
name: Type
module: compiler
---

# Type

```ts
class Type {
  abstract visitType(visitor: TypeVisitor, context: any): any;
  hasModifier(modifier: TypeModifier): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L19-L30)

## Methods

### visitType

```ts
abstract visitType(visitor: TypeVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L25-L25)

#### Parameters (#visitType-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| visitor | `TypeVisitor` |             |
| context | `any`         |             |

### hasModifier

```ts
hasModifier(modifier: TypeModifier): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L27-L29)

#### Parameters (#hasModifier-parameters)

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| modifier | `TypeModifier` |             |
