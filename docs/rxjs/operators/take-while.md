---
kind: FunctionDeclaration
name: takeWhile
module: operators
---

# takeWhile

## description

Emits values emitted by the source Observable so long as each value satisfies
the given `predicate`, and then completes as soon as this `predicate` is not
satisfied.

<span class="informal">Takes values from the source only while they pass the
condition given. When the first value does not satisfy, it completes.</span>

![](takeWhile.png)

`takeWhile` subscribes and begins mirroring the source Observable. Each value
emitted on the source is given to the `predicate` function which returns a
boolean, representing a condition to be satisfied by the source values. The
output Observable emits the source values until such time as the `predicate`
returns false, at which point `takeWhile` stops mirroring the source
Observable and completes the output Observable.

## Example

Emit click events only while the clientX property is greater than 200

```ts
import { fromEvent } from "rxjs";
import { takeWhile } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(takeWhile((ev) => ev.clientX > 200));
result.subscribe((x) => console.log(x));
```

```ts
function takeWhile<T>(
  predicate: (value: T, index: number) => boolean,
  inclusive = false
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeWhile.ts#L54-L59)

## see

{@link take}
{@link takeLast}
{@link takeUntil}
{@link skip}

## Parameters

| Name             | Type                                   | Description                                           |
| ---------------- | -------------------------------------- | ----------------------------------------------------- |
| {function(value: | ``                                     | T, index: number): boolean} predicate A function that |
| {boolean}        | ``                                     | inclusive When set to `true` the value that caused    |
| predicate        | `(value: T, index: number) => boolean` |                                                       |
| inclusive        | `boolean`                              |                                                       |

## return

{Observable<T>} An Observable that emits the values from the source
Observable so long as each value satisfies the condition defined by the
`predicate`, then completes.

## name

takeWhile

## Overloads

```ts
function takeWhile<T, S extends T>(
  predicate: (value: T, index: number) => value is S
): OperatorFunction<T, S>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeWhile.ts#L7-L7)

### Parameters

| Name      | Type                                      | Description |
| --------- | ----------------------------------------- | ----------- |
| predicate | `(value: T, index: number) => value is S` |             |

```ts
function takeWhile<T, S extends T>(
  predicate: (value: T, index: number) => value is S,
  inclusive: false
): OperatorFunction<T, S>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeWhile.ts#L8-L8)

### Parameters

| Name      | Type                                      | Description |
| --------- | ----------------------------------------- | ----------- |
| predicate | `(value: T, index: number) => value is S` |             |
| inclusive | `false`                                   |             |

```ts
function takeWhile<T>(
  predicate: (value: T, index: number) => boolean,
  inclusive?: boolean
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeWhile.ts#L9-L9)

### Parameters

| Name      | Type                                   | Description |
| --------- | -------------------------------------- | ----------- |
| predicate | `(value: T, index: number) => boolean` |             |
| inclusive | `boolean`                              |             |
