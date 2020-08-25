---
kind: FunctionDeclaration
name: ɵmakeDecorator
module: core
---

# ɵmakeDecorator

```ts
function makeDecorator<T>(
  name: string,
  props?: (...args: any[]) => any,
  parentClass?: any,
  additionalProcessing?: (type: Type<T>) => void,
  typeFn?: (type: Type<T>, ...args: any[]) => void
): {
  new (...args: any[]): any;
  (...args: any[]): any;
  (...args: any[]): (cls: any) => any;
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/util/decorators.ts#L46-L86)

## suppress

{globalThis}

## Parameters

| Name                 | Type                                      | Description |
| -------------------- | ----------------------------------------- | ----------- |
| name                 | `string`                                  |             |
| props                | `(...args: any[]) => any`                 |             |
| parentClass          | `any`                                     |             |
| additionalProcessing | `(type: Type<T>) => void`                 |             |
| typeFn               | `(type: Type<T>, ...args: any[]) => void` |             |
