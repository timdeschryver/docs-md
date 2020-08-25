---
kind: FunctionDeclaration
name: map
module: operators
---

# map

## description

Applies a given `project` function to each value emitted by the source
Observable, and emits the resulting values as an Observable.

<span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
it passes each source value through a transformation function to get
corresponding output values.</span>

![](map.png)

Similar to the well known `Array.prototype.map` function, this operator
applies a projection to each value and emits that projection in the output
Observable.

## Example

Map every click to the clientX position of that click

```ts
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const positions = clicks.pipe(map((ev) => ev.clientX));
positions.subscribe((x) => console.log(x));
```

```ts
function map<T, R>(
  project: (value: T, index: number) => R,
  thisArg?: any
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/map.ts#L45-L52)

## see

{@link mapTo}
{@link pluck}

## Parameters

| Name             | Type                             | Description                                                    |
| ---------------- | -------------------------------- | -------------------------------------------------------------- |
| {function(value: | ``                               | T, index: number): R} project The function to apply            |
| {any}            | ``                               | [thisArg] An optional argument to define what `this` is in the |
| project          | `(value: T, index: number) => R` |                                                                |
| thisArg          | `any`                            |                                                                |

## return

{Observable<R>} An Observable that emits the values from the source
Observable transformed by the given `project` function.

## name

map
