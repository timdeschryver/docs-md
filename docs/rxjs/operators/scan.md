---
kind: FunctionDeclaration
name: scan
module: operators
---

# scan

## description

Applies an accumulator function over the source Observable, and returns each
intermediate result, with an optional seed value.

<span class="informal">It's like {@link reduce}, but emits the current
accumulation whenever the source emits a value.</span>

![](scan.png)

Combines together all values emitted on the source, using an accumulator
function that knows how to join a new source value into the accumulation from
the past. Is similar to {@link reduce}, but emits the intermediate
accumulations.

Returns an Observable that applies a specified `accumulator` function to each
item emitted by the source Observable. If a `seed` value is specified, then
that value will be used as the initial value for the accumulator. If no seed
value is specified, the first item of the source is used as the seed.

## Example

Count the number of click events

```ts
import { fromEvent } from "rxjs";
import { scan, mapTo } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const ones = clicks.pipe(mapTo(1));
const seed = 0;
const count = ones.pipe(scan((acc, one) => acc + one, seed));
count.subscribe((x) => console.log(x));
```

```ts
function scan<V, A, S>(
  accumulator: (acc: V | A | S, value: V, index: number) => A,
  seed?: S
): OperatorFunction<V, V | A>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/scan.ts#L55-L69)

## see

{@link expand}
{@link mergeScan}
{@link reduce}

## Parameters

| Name           | Type     | Description                                 |
| -------------- | -------- | ------------------------------------------- |
| {function(acc: | ``       | A, value: V, index: number): A} accumulator |
| {V             | A}       | ``                                          | [seed] The initial accumulation value. |
| accumulator    | `(acc: V | A                                           | S, value: V, index: number) => A` |  |
| seed           | `S`      |                                             |

## return

{Observable<A>} An observable of the accumulated values.

## name

scan

## Overloads

```ts
function scan<V, A = V>(
  accumulator: (acc: A | V, value: V, index: number) => A
): OperatorFunction<V, V | A>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/scan.ts#L8-L8)

### Parameters

| Name        | Type     | Description                       |
| ----------- | -------- | --------------------------------- |
| accumulator | `(acc: A | V, value: V, index: number) => A` |  |

```ts
function scan<V, A>(
  accumulator: (acc: A, value: V, index: number) => A,
  seed: A
): OperatorFunction<V, A>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/scan.ts#L9-L9)

### Parameters

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| accumulator | `(acc: A, value: V, index: number) => A` |             |
| seed        | `A`                                      |             |

```ts
function scan<V, A, S>(
  accumulator: (acc: A | S, value: V, index: number) => A,
  seed: S
): OperatorFunction<V, A>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/scan.ts#L10-L10)

### Parameters

| Name        | Type     | Description                       |
| ----------- | -------- | --------------------------------- |
| accumulator | `(acc: A | S, value: V, index: number) => A` |  |
| seed        | `S`      |                                   |
