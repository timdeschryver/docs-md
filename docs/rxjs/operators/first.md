---
kind: FunctionDeclaration
name: first
module: operators
---

# first

## description

Emits only the first value (or the first value that meets some condition)
emitted by the source Observable.

<span class="informal">Emits only the first value. Or emits only the first
value that passes some test.</span>

![](first.png)

If called with no arguments, `first` emits the first value of the source
Observable, then completes. If called with a `predicate` function, `first`
emits the first value of the source that matches the specified condition. It
may also take a deprecated `resultSelector` function to produce the output
value from the input value, and a `defaultValue` to emit in case the source
completes before it is able to emit a valid value. Throws an error if
`defaultValue` was not provided and a matching element is not found.

## Examples

Emit only the first click that happens on the DOM

```ts
import { fromEvent } from "rxjs";
import { first } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(first());
result.subscribe((x) => console.log(x));
```

Emits the first click that happens on a DIV

```ts
import { fromEvent } from "rxjs";
import { first } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(first((ev) => ev.target.tagName === "DIV"));
result.subscribe((x) => console.log(x));
```

```ts
function first<T, D>(
  predicate?:
    | ((value: T, index: number, source: Observable<T>) => boolean)
    | null,
  defaultValue?: D
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/first.ts#L79-L89)

## see

{@link filter}
{@link find}
{@link take}

## throws

{EmptyError} Delivers an EmptyError to the Observer's `error`
callback if the Observable completes before any `next` notification was sent.
This is how `first()` is different from {@link take}(1) which completes instead.

## Parameters

| Name             | Type                                                          | Description                                                     |
| ---------------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| {function(value: | ``                                                            | T, index: number, source: Observable<T>): boolean} [predicate]  |
| {R}              | ``                                                            | [defaultValue] The default value emitted in case no valid value |
| predicate        | `(value: T, index: number, source: Observable<T>) => boolean` |                                                                 |
| defaultValue     | `D`                                                           |                                                                 |

## return

{Observable<T|R>} An Observable of the first item that matches the
condition.

## name

first

## Overloads

```ts
function first<T, D = T>(
  predicate?: null,
  defaultValue?: D
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/first.ts#L11-L14)

### Parameters

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| predicate    | `null` |             |
| defaultValue | `D`    |             |

```ts
function first<T, S extends T>(
  predicate: (value: T, index: number, source: Observable<T>) => value is S,
  defaultValue?: S
): OperatorFunction<T, S>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/first.ts#L15-L18)

### Parameters

| Name         | Type                                                             | Description |
| ------------ | ---------------------------------------------------------------- | ----------- |
| predicate    | `(value: T, index: number, source: Observable<T>) => value is S` |             |
| defaultValue | `S`                                                              |             |

```ts
function first<T, D = T>(
  predicate: (value: T, index: number, source: Observable<T>) => boolean,
  defaultValue?: D
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/first.ts#L19-L22)

### Parameters

| Name         | Type                                                          | Description |
| ------------ | ------------------------------------------------------------- | ----------- |
| predicate    | `(value: T, index: number, source: Observable<T>) => boolean` |             |
| defaultValue | `D`                                                           |             |
