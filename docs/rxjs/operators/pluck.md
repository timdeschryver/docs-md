---
kind: FunctionDeclaration
name: pluck
module: operators
---

# pluck

## description

Maps each source value to its specified nested property.

<span class="informal">Like {@link map}, but meant only for picking one of
the nested properties of every emitted value.</span>

![](pluck.png)

Given a list of strings or numbers describing a path to a property, retrieves
the value of a specified nested property from all values in the source
Observable. If a property can't be resolved, it will return `undefined` for
that value.

## Example

Map every click to the tagName of the clicked target element

```ts
import { fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const tagNames = clicks.pipe(pluck("target", "tagName"));
tagNames.subscribe((x) => console.log(x));
```

```ts
function pluck<T, R>(
  ...properties: Array<string | number | symbol>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L46-L63)

## see

{@link map}

## Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| properties | `(string | number      | symbol)[]` | The nested properties to pluck from each source |

## return

A new Observable of property values from the source values.

## deprecated

Remove in v8. Use {@link map} and optional chaining: `pluck('foo', 'bar')` is `map(x => x?.foo?.bar)`.

## Overloads

```ts
function pluck<T, K1 extends keyof T>(k1: K1): OperatorFunction<T, T[K1]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L5-L5)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| k1   | `K1` |             |

```ts
function pluck<T, K1 extends keyof T, K2 extends keyof T[K1]>(
  k1: K1,
  k2: K2
): OperatorFunction<T, T[K1][K2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L6-L6)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| k1   | `K1` |             |
| k2   | `K2` |             |

```ts
function pluck<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2]
>(k1: K1, k2: K2, k3: K3): OperatorFunction<T, T[K1][K2][K3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L7-L7)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| k1   | `K1` |             |
| k2   | `K2` |             |
| k3   | `K3` |             |

```ts
function pluck<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3]
>(k1: K1, k2: K2, k3: K3, k4: K4): OperatorFunction<T, T[K1][K2][K3][K4]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L8-L8)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| k1   | `K1` |             |
| k2   | `K2` |             |
| k3   | `K3` |             |
| k4   | `K4` |             |

```ts
function pluck<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4]
>(
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4,
  k5: K5
): OperatorFunction<T, T[K1][K2][K3][K4][K5]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L9-L9)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| k1   | `K1` |             |
| k2   | `K2` |             |
| k3   | `K3` |             |
| k4   | `K4` |             |
| k5   | `K5` |             |

```ts
function pluck<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5]
>(
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4,
  k5: K5,
  k6: K6
): OperatorFunction<T, T[K1][K2][K3][K4][K5][K6]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L10-L10)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| k1   | `K1` |             |
| k2   | `K2` |             |
| k3   | `K3` |             |
| k4   | `K4` |             |
| k5   | `K5` |             |
| k6   | `K6` |             |

```ts
function pluck<
  T,
  K1 extends keyof T,
  K2 extends keyof T[K1],
  K3 extends keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5]
>(
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4,
  k5: K5,
  k6: K6,
  ...rest: string[]
): OperatorFunction<T, unknown>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L11-L11)

### Parameters

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| k1   | `K1`       |             |
| k2   | `K2`       |             |
| k3   | `K3`       |             |
| k4   | `K4`       |             |
| k5   | `K5`       |             |
| k6   | `K6`       |             |
| rest | `string[]` |             |

```ts
function pluck<T>(...properties: string[]): OperatorFunction<T, unknown>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/pluck.ts#L12-L12)

### Parameters

| Name       | Type       | Description |
| ---------- | ---------- | ----------- |
| properties | `string[]` |             |
