---
kind: ClassDeclaration
name: SimpleChange
module: core
---

# SimpleChange

## description

Represents a basic change from a previous to a new value for a single
property on a directive instance. Passed as a value in a
{@link SimpleChanges} object to the `ngOnChanges` hook.

```ts
class SimpleChange {
  isFirstChange(): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/simple_change.ts#L18-L26)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## see

`OnChanges`

## publicApi

## Methods

### isFirstChange

#### description (#isFirstChange-description)

Check whether the new value is the first value assigned.

```ts
isFirstChange(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/simple_change.ts#L23-L25)
