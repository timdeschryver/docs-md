---
kind: ClassDeclaration
name: PipeResolver
module: compiler
---

# PipeResolver

## description

Resolve a `Type` for {@link Pipe}.

This interface can be overridden by the application developer to create custom behavior.

See {@link Compiler}

```ts
class PipeResolver {
  isPipe(type: Type);
  resolve(type: Type, throwIfNotFound = true): Pipe | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/pipe_resolver.ts#L21-L45)

## Methods

### isPipe

```ts
isPipe(type: Type);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/pipe_resolver.ts#L24-L27)

#### Parameters (#isPipe-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| type | `Type` |             |

### resolve

#### description (#resolve-description)

Return {@link Pipe} for a given `Type`.

```ts
resolve(type: Type, throwIfNotFound = true): Pipe|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/pipe_resolver.ts#L32-L44)

#### Parameters (#resolve-parameters)

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| type            | `Type`    |             |
| throwIfNotFound | `boolean` |             |
