---
kind: TypeAliasDeclaration
name: TemplateBinding
module: compiler
---

# TemplateBinding

## description

TemplateBinding refers to a particular key-value pair in a microsyntax
expression. A few examples are:

|---------------------|--------------|---------|--------------|
| expression | key | value | binding type |
|---------------------|--------------|---------|--------------|
| 1. let item | item | null | variable |
| 2. of items | ngForOf | items | expression |
| 3. let x = y | x | y | variable |
| 4. index as i | i | index | variable |
| 5. trackBy: func | ngForTrackBy | func | expression |
| 6. \*ngIf="cond" | ngIf | cond | expression |
|---------------------|--------------|---------|--------------|

(6) is a notable exception because it is a binding from the template key in
the LHS of a HTML attribute to the expression in the RHS. All other bindings
in the example above are derived solely from the RHS.

```ts
export type TemplateBinding = VariableBinding | ExpressionBinding;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L326-L326)
