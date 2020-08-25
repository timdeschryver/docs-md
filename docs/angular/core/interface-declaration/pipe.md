---
kind: InterfaceDeclaration
name: Pipe
module: core
---

# Pipe

## description

Type of the Pipe metadata.

```ts
interface Pipe {
  name: string;
  pure?: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L610-L629)

## publicApi

## Properties

| Name | Type     | Description                                |
| ---- | -------- | ------------------------------------------ |
| name | `string` | The pipe name to use in template bindings. |

Typically uses [lowerCamelCase](guide/glossary#case-types)
because the name cannot contain hyphens. |
| pure | `boolean` | When true, the pipe is pure, meaning that the
`transform()` method is invoked only when its input arguments
change. Pipes are pure by default.

If the pipe has internal state (that is, the result
depends on state other than its arguments), set `pure` to false.
In this case, the pipe is invoked on each change-detection cycle,
even if the arguments have not changed. |
