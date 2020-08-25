---
kind: VariableDeclaration
name: ɵɵdefineDirective
module: core
---

# ɵɵdefineDirective

```ts
const ɵɵdefineDirective: <T>(directiveDefinition: {
  type: Type<T>;
  selectors?: CssSelectorList;
  inputs?: { [P in keyof T]?: string | [string, string] };
  outputs?: { [P in keyof T]?: string };
  features?: DirectiveDefFeature[];
  hostBindings?: HostBindingsFunction<T>;
  hostVars?: number;
  hostAttrs?: TAttributes;
  contentQueries?: ContentQueriesFunction<T>;
  viewQuery?: ViewQueriesFunction<T>;
  exportAs?: string[];
}) => never;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/definition.ts#L552-L688)
