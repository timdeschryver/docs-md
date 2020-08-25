---
kind: FunctionDeclaration
name: find
module: operators
---

# find

## description

Emits only the first value emitted by the source Observable that meets some
condition.

<span class="informal">Finds the first value that passes some test and emits
that.</span>

![](find.png)

`find` searches for the first item in the source Observable that matches the
specified condition embodied by the `predicate`, and returns the first
occurrence in the source. Unlike {@link first}, the `predicate` is required
in `find`, and does not emit an error if a valid value is not found.

## Example

Find and emit the first click that happens on a DIV element

```ts
import { fromEvent } from "rxjs";
import { find } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(find((ev) => ev.target.tagName === "DIV"));
result.subscribe((x) => console.log(x));
```

```ts
function find<T>(
  predicate: (value: T, index: number, source: Observable<T>) => boolean,
  thisArg?: any
): OperatorFunction<T, T | undefined>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/find.ts#L49-L55)

## see

{@link filter}
{@link first}
{@link findIndex}
{@link take}

## Parameters

| Name             | Type                                                          | Description                                                     |
| ---------------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| {function(value: | ``                                                            | T, index: number, source: Observable<T>): boolean} predicate    |
| {any}            | ``                                                            | [thisArg] An optional argument to determine the value of `this` |
| predicate        | `(value: T, index: number, source: Observable<T>) => boolean` |                                                                 |
| thisArg          | `any`                                                         |                                                                 |

## return

{Observable<T>} An Observable of the first item that matches the
condition.

## name

find

## Overloads

```ts
function find<T, S extends T>(
  predicate: (value: T, index: number, source: Observable<T>) => value is S,
  thisArg?: any
): OperatorFunction<T, S | undefined>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/find.ts#L7-L8)

### Parameters

| Name      | Type                                                             | Description |
| --------- | ---------------------------------------------------------------- | ----------- |
| predicate | `(value: T, index: number, source: Observable<T>) => value is S` |             |
| thisArg   | `any`                                                            |             |

```ts
function find<T>(
  predicate: (value: T, index: number, source: Observable<T>) => boolean,
  thisArg?: any
): OperatorFunction<T, T | undefined>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/find.ts#L9-L10)

### Parameters

| Name      | Type                                                          | Description |
| --------- | ------------------------------------------------------------- | ----------- |
| predicate | `(value: T, index: number, source: Observable<T>) => boolean` |             |
| thisArg   | `any`                                                         |             |
