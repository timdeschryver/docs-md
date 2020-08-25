---
kind: FunctionDeclaration
name: toArray
module: operators
---

# toArray

## description

Collects all source emissions and emits them as an array when the source completes.

<span class="informal">Get all values inside an array when the source completes</span>

![](toArray.png)

`toArray` will wait until the source Observable completes before emitting
the array containing all emissions. When the source Observable errors no
array will be emitted.

## Example

```ts
import { interval } from "rxjs";
import { toArray, take } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(take(10), toArray());

const subscribe = example.subscribe((val) => console.log(val));

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```ts
function toArray<T>(): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/toArray.ts#L42-L44)

## return

An array from an observable sequence.

## name

toArray
