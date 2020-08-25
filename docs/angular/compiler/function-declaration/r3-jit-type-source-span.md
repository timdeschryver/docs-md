---
kind: FunctionDeclaration
name: r3JitTypeSourceSpan
module: compiler
---

# r3JitTypeSourceSpan

## description

Generates Source Span object for a given R3 Type for JIT mode.

```ts
function r3JitTypeSourceSpan(
  kind: string,
  typeName: string,
  sourceUrl: string
): ParseSourceSpan;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/parse_util.ts#L150-L156)

## Parameters

| Name      | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| kind      | `string` | Component or Directive.                     |
| typeName  | `string` | name of the Component or Directive.         |
| sourceUrl | `string` | reference to Component or Directive source. |

## returns

instance of ParseSourceSpan that represent a given Component or Directive.
