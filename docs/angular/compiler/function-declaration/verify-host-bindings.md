---
kind: FunctionDeclaration
name: verifyHostBindings
module: compiler
---

# verifyHostBindings

## description

Verifies host bindings and returns the list of errors (if any). Empty array indicates that a
given set of host bindings has no errors.

```ts
function verifyHostBindings(
  bindings: ParsedHostBindings,
  sourceSpan: ParseSourceSpan
): ParseError[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/compiler.ts#L883-L892)

## Parameters

| Name       | Type                 | Description                                   |
| ---------- | -------------------- | --------------------------------------------- |
| bindings   | `ParsedHostBindings` | set of host bindings to verify.               |
| sourceSpan | `ParseSourceSpan`    | source span where host bindings were defined. |

## returns

array of errors associated with a given set of host bindings.
