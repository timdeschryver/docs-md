---
kind: EnumDeclaration
name: ɵPlayState
module: core
---

# ɵPlayState

## description

The state of a given player

Do not change the increasing nature of the numbers since the player
code may compare state by checking if a number is higher or lower than
a certain numeric value.

```ts
export const enum PlayState {
  Pending = 0,
  Running = 1,
  Paused = 2,
  Finished = 100,
  Destroyed = 200,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/player.ts#L70-L76)
