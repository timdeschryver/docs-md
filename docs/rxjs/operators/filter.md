---
kind: FunctionDeclaration
name: filter
module: operators
---

# filter

## description

Filter items emitted by the source Observable by only emitting those that
satisfy a specified predicate.

<span class="informal">Like
[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
it only emits a value from the source if it passes a criterion function.</span>

![](filter.png)

Similar to the well-known `Array.prototype.filter` method, this operator
takes values from the source Observable, passes them through a `predicate`
function and only emits those values that yielded `true`.

## Example

Emit only click events whose target was a DIV element

```ts
import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const clicksOnDivs = clicks.pipe(filter((ev) => ev.target.tagName === "DIV"));
clicksOnDivs.subscribe((x) => console.log(x));
```

```ts
function filter<T>(
  predicate: (value: T, index: number) => boolean,
  thisArg?: any
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/filter.ts#L57-L62)

## see

{@link distinct}
{@link distinctUntilChanged}
{@link distinctUntilKeyChanged}
{@link ignoreElements}
{@link partition}
{@link skip}

## Parameters

| Name      | Type                                   | Description                                           |
| --------- | -------------------------------------- | ----------------------------------------------------- |
| predicate | `(value: T, index: number) => boolean` | A function that                                       |
| thisArg   | `any`                                  | An optional argument to determine the value of `this` |

## Overloads

```ts
function filter<T, S extends T>(
  predicate: (value: T, index: number) => value is S,
  thisArg?: any
): OperatorFunction<T, S>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/filter.ts#L8-L9)

### Parameters

| Name      | Type                                      | Description |
| --------- | ----------------------------------------- | ----------- |
| predicate | `(value: T, index: number) => value is S` |             |
| thisArg   | `any`                                     |             |

```ts
function filter<T>(
  predicate: BooleanConstructor
): OperatorFunction<T | null | undefined, NonNullable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/filter.ts#L11-L11)

### Parameters

| Name      | Type                 | Description |
| --------- | -------------------- | ----------- |
| predicate | `BooleanConstructor` |             |

```ts
function filter<T>(
  predicate: (value: T, index: number) => boolean,
  thisArg?: any
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/filter.ts#L12-L13)

### Parameters

| Name      | Type                                   | Description |
| --------- | -------------------------------------- | ----------- |
| predicate | `(value: T, index: number) => boolean` |             |
| thisArg   | `any`                                  |             |
