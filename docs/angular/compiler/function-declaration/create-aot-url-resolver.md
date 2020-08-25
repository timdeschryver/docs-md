---
kind: FunctionDeclaration
name: createAotUrlResolver
module: compiler
---

# createAotUrlResolver

```ts
function createAotUrlResolver(host: {
  resourceNameToFileName(
    resourceName: string,
    containingFileName: string
  ): string | null;
}): UrlResolver;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler_factory.ts#L39-L51)

## Parameters

| Name | Type                                                                                | Description |
| ---- | ----------------------------------------------------------------------------------- | ----------- |
| host | `{ resourceNameToFileName(resourceName: string, containingFileName: string): string | null; }`    |  |
