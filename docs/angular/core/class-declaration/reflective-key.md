---
kind: ClassDeclaration
name: ReflectiveKey
module: core
---

# ReflectiveKey

## description

A unique object used for retrieving items from the {@link ReflectiveInjector}.

Keys have:

- a system-wide unique `id`.
- a `token`.

`Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
the
injector to store created objects in a more efficient way.

`Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
resolving
providers.

```ts
class ReflectiveKey {
  public readonly displayName: string;

  static get(token: Object): ReflectiveKey;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_key.ts#L31-L56)

## deprecated

No replacement

## publicApi

## Properties

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| displayName | `string` |             |

## Methods

### get

#### description (#get-description)

Retrieves a `Key` for a token.

```ts
static get(token: Object): ReflectiveKey;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_key.ts#L46-L48)

#### Parameters (#get-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| token | `Object` |             |
