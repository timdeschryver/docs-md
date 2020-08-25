---
kind: InterfaceDeclaration
name: Summary
module: compiler
---

# Summary

```ts
interface Summary<T> {
  symbol: T;
  metadata: any;
  type?: CompileTypeSummary;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/summary_resolver.ts#L11-L15)

## Properties

| Name     | Type                 | Description |
| -------- | -------------------- | ----------- |
| symbol   | `T`                  |             |
| metadata | `any`                |             |
| type     | `CompileTypeSummary` |             |
