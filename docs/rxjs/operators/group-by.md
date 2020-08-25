---
kind: FunctionDeclaration
name: groupBy
module: operators
---

# groupBy

## description

Groups the items emitted by an Observable according to a specified criterion,
and emits these grouped items as `GroupedObservables`, one
{@link GroupedObservable} per group.

![](groupBy.png)

When the Observable emits an item, a key is computed for this item with the keySelector function.

If a {@link GroupedObservable} for this key exists, this {@link GroupedObservable} emits. Otherwise, a new
{@link GroupedObservable} for this key is created and emits.

A {@link GroupedObservable} represents values belonging to the same group represented by a common key. The common
key is available as the `key` field of a {@link GroupedObservable} instance.

The elements emitted by {@link GroupedObservable}s are by default the items emitted by the Observable, or elements
returned by the elementSelector function.

## Examples

### Group objects by id and return as array

```ts
import { of } from "rxjs";
import { mergeMap, groupBy, reduce } from "rxjs/operators";

of(
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Parcel" },
  { id: 2, name: "webpack" },
  { id: 1, name: "TypeScript" },
  { id: 3, name: "TSLint" }
)
  .pipe(
    groupBy((p) => p.id),
    mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
  )
  .subscribe((p) => console.log(p));

// displays:
// [ { id: 1, name: 'JavaScript'},
//   { id: 1, name: 'TypeScript'} ]
//
// [ { id: 2, name: 'Parcel'},
//   { id: 2, name: 'webpack'} ]
//
// [ { id: 3, name: 'TSLint'} ]
```

### Pivot data on the id field

```ts
import { of } from "rxjs";
import { groupBy, map, mergeMap, reduce } from "rxjs/operators";

of(
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Parcel" },
  { id: 2, name: "webpack" },
  { id: 1, name: "TypeScript" },
  { id: 3, name: "TSLint" }
)
  .pipe(
    groupBy(
      (p) => p.id,
      (p) => p.name
    ),
    mergeMap((group$) =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map((arr) => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
  )
  .subscribe((p) => console.log(p));

// displays:
// { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
// { id: 2, values: [ 'Parcel', 'webpack' ] }
// { id: 3, values: [ 'TSLint' ] }
```

```ts
function groupBy<T, K, R>(
  keySelector: (value: T) => K,
  elementSelector?: ((value: T) => R) | void,
  durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>,
  subjectSelector?: () => Subject<R>
): OperatorFunction<T, GroupedObservable<K, R>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L108-L114)

## Parameters

| Name               | Type                                                    | Description                                                  |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| {function(value:   | ``                                                      | T): K} keySelector A function that extracts the key          |
| {function(value:   | ``                                                      | T): R} [elementSelector] A function that extracts the        |
| {function(grouped: | ``                                                      | GroupedObservable<K,R>): Observable<any>} [durationSelector] |
| {function():       | ``                                                      | Subject<R>} [subjectSelector] Factory function to create an  |
| keySelector        | `(value: T) => K`                                       |                                                              |
| elementSelector    | `void                                                   | ((value: T) => R)`                                           |  |
| durationSelector   | `(grouped: GroupedObservable<K, R>) => Observable<any>` |                                                              |
| subjectSelector    | `() => Subject<R>`                                      |                                                              |

## return

{Observable<GroupedObservable<K,R>>} An Observable that emits
GroupedObservables, each of which corresponds to a unique key value and each
of which emits those items from the source Observable that share that key
value.

## name

groupBy

## Overloads

```ts
function groupBy<T, K extends T>(
  keySelector: (value: T) => value is K
): OperatorFunction<
  T,
  GroupedObservable<true, K> | GroupedObservable<false, Exclude<T, K>>
>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L10-L10)

### Parameters

| Name        | Type                       | Description |
| ----------- | -------------------------- | ----------- |
| keySelector | `(value: T) => value is K` |             |

```ts
function groupBy<T, K>(
  keySelector: (value: T) => K
): OperatorFunction<T, GroupedObservable<K, T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L11-L11)

### Parameters

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| keySelector | `(value: T) => K` |             |

```ts
function groupBy<T, K>(
  keySelector: (value: T) => K,
  elementSelector: void,
  durationSelector: (grouped: GroupedObservable<K, T>) => Observable<any>
): OperatorFunction<T, GroupedObservable<K, T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L12-L12)

### Parameters

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| keySelector      | `(value: T) => K`                                       |             |
| elementSelector  | `void`                                                  |             |
| durationSelector | `(grouped: GroupedObservable<K, T>) => Observable<any>` |             |

```ts
function groupBy<T, K, R>(
  keySelector: (value: T) => K,
  elementSelector?: (value: T) => R,
  durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>
): OperatorFunction<T, GroupedObservable<K, R>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L13-L13)

### Parameters

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| keySelector      | `(value: T) => K`                                       |             |
| elementSelector  | `(value: T) => R`                                       |             |
| durationSelector | `(grouped: GroupedObservable<K, R>) => Observable<any>` |             |

```ts
function groupBy<T, K, R>(
  keySelector: (value: T) => K,
  elementSelector?: (value: T) => R,
  durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>,
  subjectSelector?: () => Subject<R>
): OperatorFunction<T, GroupedObservable<K, R>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L14-L14)

### Parameters

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| keySelector      | `(value: T) => K`                                       |             |
| elementSelector  | `(value: T) => R`                                       |             |
| durationSelector | `(grouped: GroupedObservable<K, R>) => Observable<any>` |             |
| subjectSelector  | `() => Subject<R>`                                      |             |
