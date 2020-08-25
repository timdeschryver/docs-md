---
kind: EnumDeclaration
name: PropertyBindingType
module: compiler
---

# PropertyBindingType

```ts
export const enum PropertyBindingType {
  // A normal binding to a property (e.g. `[property]="expression"`).
  Property,
  // A binding to an element attribute (e.g. `[attr.name]="expression"`).
  Attribute,
  // A binding to a CSS class (e.g. `[class.name]="condition"`).
  Class,
  // A binding to a style rule (e.g. `[style.rule]="expression"`).
  Style,
  // A binding to an animation reference (e.g. `[animate.key]="expression"`).
  Animation,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L66-L77)
