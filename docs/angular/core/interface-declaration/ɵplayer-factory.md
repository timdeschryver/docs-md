---
kind: InterfaceDeclaration
name: ɵPlayerFactory
module: core
---

# ɵPlayerFactory

## description

Used as a reference to build a player from a styling template binding
(`[style]` and `[class]`).

The `fn` function will be called once any styling-related changes are
evaluated on an element and is expected to return a player that will
be then run on the element.

`[style]`, `[style.prop]`, `[class]` and `[class.name]` template bindings
all accept a `PlayerFactory` as input and this player factories.

```ts
interface PlayerFactory {
  __brand__: "Brand for PlayerFactory that nothing will match";
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/player.ts#L55-L57)

## Properties

| Name        | Type                                                | Description |
| ----------- | --------------------------------------------------- | ----------- |
| '**brand**' | `"Brand for PlayerFactory that nothing will match"` |             |
