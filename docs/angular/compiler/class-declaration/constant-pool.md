---
kind: ClassDeclaration
name: ConstantPool
module: compiler
---

# ConstantPool

## description

A constant pool allows a code emitter to share constant in an output context.

The constant pool also supports sharing access to ivy definitions references.

```ts
class ConstantPool {
  statements: o.Statement[] = [];

  getConstLiteral(literal: o.Expression, forceShared?: boolean): o.Expression;
  getDefinition(
    type: any,
    kind: DefinitionKind,
    ctx: OutputContext,
    forceShared: boolean = false
  ): o.Expression;
  getLiteralFactory(
    literal: o.LiteralArrayExpr | o.LiteralMapExpr
  ): { literalFactory: o.Expression; literalFactoryArguments: o.Expression[] };
  uniqueName(prefix: string): string;
  public propertyNameOf(kind: DefinitionKind): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/constant_pool.ts#L87-L241)

## Properties

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| statements | `o.Statement[]` |             |

## Methods

### getConstLiteral

```ts
getConstLiteral(literal: o.Expression, forceShared?: boolean): o.Expression;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/constant_pool.ts#L98-L122)

#### Parameters (#getConstLiteral-parameters)

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| literal     | `o.Expression` |             |
| forceShared | `boolean`      |             |

### getDefinition

```ts
getDefinition(type: any, kind: DefinitionKind, ctx: OutputContext, forceShared: boolean = false):   o.Expression;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/constant_pool.ts#L124-L143)

#### Parameters (#getDefinition-parameters)

| Name        | Type             | Description |
| ----------- | ---------------- | ----------- |
| type        | `any`            |             |
| kind        | `DefinitionKind` |             |
| ctx         | `OutputContext`  |             |
| forceShared | `boolean`        |             |

### getLiteralFactory

```ts
getLiteralFactory(literal: o.LiteralArrayExpr|o.LiteralMapExpr):   {literalFactory: o.Expression, literalFactoryArguments: o.Expression[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/constant_pool.ts#L145-L168)

#### Parameters (#getLiteralFactory-parameters)

| Name    | Type                | Description       |
| ------- | ------------------- | ----------------- |
| literal | `o.LiteralArrayExpr | o.LiteralMapExpr` |  |

### uniqueName

#### description (#uniqueName-description)

Produce a unique name.

The name might be unique among different prefixes if any of the prefixes end in
a digit so the prefix should be a constant string (not based on user input) and
must not end in a digit.

```ts
uniqueName(prefix: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/constant_pool.ts#L200-L202)

#### Parameters (#uniqueName-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| prefix | `string` |             |

### propertyNameOf

```ts
public propertyNameOf(kind: DefinitionKind): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/constant_pool.ts#L219-L232)

#### Parameters (#propertyNameOf-parameters)

| Name | Type             | Description |
| ---- | ---------------- | ----------- |
| kind | `DefinitionKind` |             |
