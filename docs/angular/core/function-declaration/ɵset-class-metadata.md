---
kind: FunctionDeclaration
name: ɵsetClassMetadata
module: core
---

# ɵsetClassMetadata

## description

Adds decorator, constructor, and property metadata to a given type via static metadata fields
on the type.

These metadata fields can later be read with Angular's `ReflectionCapabilities` API.

Calls to `setClassMetadata` can be marked as pure, resulting in the metadata assignments being
tree-shaken away during production builds.

```ts
function setClassMetadata(
  type: Type<any>,
  decorators: any[] | null,
  ctorParameters: (() => any[]) | null,
  propDecorators: { [field: string]: any } | null
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/metadata.ts#L27-L70)

## Parameters

| Name           | Type                        | Description |
| -------------- | --------------------------- | ----------- |
| type           | `Type<any>`                 |             |
| decorators     | `any[]`                     |             |
| ctorParameters | `() => any[]`               |             |
| propDecorators | `{ [field: string]: any; }` |             |
