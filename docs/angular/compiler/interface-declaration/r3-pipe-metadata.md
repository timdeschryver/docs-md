---
kind: InterfaceDeclaration
name: R3PipeMetadata
module: compiler
---

# R3PipeMetadata

```ts
interface R3PipeMetadata {
  name: string;
  type: R3Reference;
  internalType: o.Expression;
  typeArgumentCount: number;
  pipeName: string;
  deps: R3DependencyMetadata[] | null;
  pure: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_pipe_compiler.ts#L19-L58)

## Properties

| Name         | Type           | Description                                                                                    |
| ------------ | -------------- | ---------------------------------------------------------------------------------------------- |
| name         | `string`       | Name of the pipe type.                                                                         |
| type         | `R3Reference`  | An expression representing a reference to the pipe itself.                                     |
| internalType | `o.Expression` | An expression representing the pipe being compiled, intended for use within a class definition |

itself.

This can differ from the outer `type` if the class is being compiled by ngcc and is inside an
IIFE structure that uses a different name internally. |
| typeArgumentCount | `number` | Number of generic type parameters of the type itself. |
| pipeName | `string` | Name of the pipe. |
| deps | `R3DependencyMetadata[]` | Dependencies of the pipe's constructor. |
| pure | `boolean` | Whether the pipe is marked as pure. |
