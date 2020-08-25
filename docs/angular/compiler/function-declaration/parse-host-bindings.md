---
kind: FunctionDeclaration
name: parseHostBindings
module: compiler
---

# parseHostBindings

```ts
function parseHostBindings(host: {
  [key: string]: string | o.Expression;
}): ParsedHostBindings;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/compiler.ts#L821-L873)

## Parameters

| Name | Type                     | Description      |
| ---- | ------------------------ | ---------------- |
| host | `{ [key: string]: string | o.Expression; }` |  |
