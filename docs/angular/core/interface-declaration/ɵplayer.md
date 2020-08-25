---
kind: InterfaceDeclaration
name: ɵPlayer
module: core
---

# ɵPlayer

## description

A shared interface which contains an animation player

```ts
interface Player {
  parent?: Player | null;
  state: PlayState;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/player.ts#L12-L20)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## Properties

| Name   | Type        | Description |
| ------ | ----------- | ----------- |
| parent | `Player`    |             |
| state  | `PlayState` |             |
