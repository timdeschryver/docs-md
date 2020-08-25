---
kind: InterfaceDeclaration
name: ɵPlayerHandler
module: core
---

# ɵPlayerHandler

## description

Designed to be used as an injection service to capture all animation players.

When present all animation players will be passed into the flush method below.
This feature is designed to service application-wide animation testing, live
debugging as well as custom animation choreographing tools.

```ts
interface PlayerHandler {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/player.ts#L96-L107)
