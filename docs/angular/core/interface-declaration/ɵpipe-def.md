---
kind: InterfaceDeclaration
name: ɵPipeDef
module: core
---

# ɵPipeDef

## description

Runtime link information for Pipes.

This is an internal data structure used by the renderer to link
pipes into templates.

NOTE: Always use `definePipe` function to create this object,
never create the object directly since the shape of this object
can change between versions.

See: {@link definePipe}

```ts
interface PipeDef<T> {
  type: Type<T>;
  readonly name: string;
  factory: FactoryFn<T> | null;
  readonly pure: boolean;
  onDestroy: (() => void) | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/definition.ts#L402-L429)

## Properties

| Name | Type      | Description                  |
| ---- | --------- | ---------------------------- |
| type | `Type<T>` | Token representing the pipe. |
| name | `string`  | Pipe name.                   |

Used to resolve pipe in templates. |
| factory | `FactoryFn<T>` | Factory function used to create a new pipe instance. Will be null initially.
Populated when the factory is first requested by pipe instantiation logic. |
| pure | `boolean` | Whether or not the pipe is pure.

Pure pipes result only depends on the pipe input and not on internal
state of the pipe. |
| onDestroy | `() => void` | |
