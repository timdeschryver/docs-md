---
kind: TypeAliasDeclaration
name: WithProperties
module: elements
---

# WithProperties

## description

Additional type information that can be added to the NgElement class,
for properties that are added based
on the inputs and methods of the underlying component.

```ts
export type WithProperties<P> = {
  [property in keyof P]: P[property];
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L82-L84)

## publicApi
