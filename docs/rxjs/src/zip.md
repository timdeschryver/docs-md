---
kind: FunctionDeclaration
name: zip
module: src
---

# zip

## description

Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
of its input Observables.

If the last parameter is a function, this function is used to compute the created value from the input values.
Otherwise, an array of the input values is returned.

## Example

Combine age and name from different sources

```ts
import { zip, of } from "rxjs";
import { map } from "rxjs/operators";

let age$ = of(27, 25, 29);
let name$ = of("Foo", "Bar", "Beer");
let isDev$ = of(true, true, false);

zip(age$, name$, isDev$)
  .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
  .subscribe((x) => console.log(x));

// Outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
```

```ts
function zip<O extends ObservableInput<any>, R>(
  ...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R)>
): Observable<ObservedValueOf<O>[] | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L79-L88)

## Parameters

| Name        | Type | Description                                  |
| ----------- | ---- | -------------------------------------------- |
| observables | `(O  | ((...values: ObservedValueOf<O>[]) => R))[]` |  |

## return

{Observable<R>}

## static

true

## name

zip

## owner

Observable

## Overloads

```ts
function zip<O1 extends ObservableInput<any>, R>(
  v1: O1,
  resultSelector: (v1: ObservedValueOf<O1>) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L14-L14)

### Parameters

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| v1             | `O1`                             |             |
| resultSelector | `(v1: ObservedValueOf<O1>) => R` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  R
>(
  v1: O1,
  v2: O2,
  resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L16-L16)

### Parameters

| Name           | Type                                                      | Description |
| -------------- | --------------------------------------------------------- | ----------- |
| v1             | `O1`                                                      |             |
| v2             | `O2`                                                      |             |
| resultSelector | `(v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>) => R` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  R
>(
  v1: O1,
  v2: O2,
  v3: O3,
  resultSelector: (
    v1: ObservedValueOf<O1>,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>
  ) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L18-L18)

### Parameters

| Name           | Type                                                                               | Description |
| -------------- | ---------------------------------------------------------------------------------- | ----------- |
| v1             | `O1`                                                                               |             |
| v2             | `O2`                                                                               |             |
| v3             | `O3`                                                                               |             |
| resultSelector | `(v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  R
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  resultSelector: (
    v1: ObservedValueOf<O1>,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>,
    v4: ObservedValueOf<O4>
  ) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L20-L20)

### Parameters

| Name           | Type                                                                                                        | Description |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ----------- |
| v1             | `O1`                                                                                                        |             |
| v2             | `O2`                                                                                                        |             |
| v3             | `O3`                                                                                                        |             |
| v4             | `O4`                                                                                                        |             |
| resultSelector | `(v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>) => R` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  R
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  resultSelector: (
    v1: ObservedValueOf<O1>,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>,
    v4: ObservedValueOf<O4>,
    v5: ObservedValueOf<O5>
  ) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L22-L22)

### Parameters

| Name           | Type                                                                                                                                 | Description |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| v1             | `O1`                                                                                                                                 |             |
| v2             | `O2`                                                                                                                                 |             |
| v3             | `O3`                                                                                                                                 |             |
| v4             | `O4`                                                                                                                                 |             |
| v5             | `O5`                                                                                                                                 |             |
| resultSelector | `(v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>) => R` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  O6 extends ObservableInput<any>,
  R
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  v6: O6,
  resultSelector: (
    v1: ObservedValueOf<O1>,
    v2: ObservedValueOf<O2>,
    v3: ObservedValueOf<O3>,
    v4: ObservedValueOf<O4>,
    v5: ObservedValueOf<O5>,
    v6: ObservedValueOf<O6>
  ) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L24-L24)

### Parameters

| Name           | Type                                                                                                                                                          | Description |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| v1             | `O1`                                                                                                                                                          |             |
| v2             | `O2`                                                                                                                                                          |             |
| v3             | `O3`                                                                                                                                                          |             |
| v4             | `O4`                                                                                                                                                          |             |
| v5             | `O5`                                                                                                                                                          |             |
| v6             | `O6`                                                                                                                                                          |             |
| resultSelector | `(v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>, v6: ObservedValueOf<O6>) => R` |             |

```ts
function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(
  v1: O1,
  v2: O2
): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L26-L26)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| v1   | `O1` |             |
| v2   | `O2` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>
>(
  v1: O1,
  v2: O2,
  v3: O3
): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L27-L27)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| v1   | `O1` |             |
| v2   | `O2` |             |
| v3   | `O3` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4
): Observable<
  [
    ObservedValueOf<O1>,
    ObservedValueOf<O2>,
    ObservedValueOf<O3>,
    ObservedValueOf<O4>
  ]
>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L28-L28)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| v1   | `O1` |             |
| v2   | `O2` |             |
| v3   | `O3` |             |
| v4   | `O4` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5
): Observable<
  [
    ObservedValueOf<O1>,
    ObservedValueOf<O2>,
    ObservedValueOf<O3>,
    ObservedValueOf<O4>,
    ObservedValueOf<O5>
  ]
>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L29-L29)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| v1   | `O1` |             |
| v2   | `O2` |             |
| v3   | `O3` |             |
| v4   | `O4` |             |
| v5   | `O5` |             |

```ts
function zip<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  O6 extends ObservableInput<any>
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  v6: O6
): Observable<
  [
    ObservedValueOf<O1>,
    ObservedValueOf<O2>,
    ObservedValueOf<O3>,
    ObservedValueOf<O4>,
    ObservedValueOf<O5>,
    ObservedValueOf<O6>
  ]
>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L30-L30)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| v1   | `O1` |             |
| v2   | `O2` |             |
| v3   | `O3` |             |
| v4   | `O4` |             |
| v5   | `O5` |             |
| v6   | `O6` |             |

```ts
function zip<O extends ObservableInput<any>>(
  array: O[]
): Observable<ObservedValueOf<O>[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L32-L32)

### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| array | `O[]` |             |

```ts
function zip<R>(array: ObservableInput<any>[]): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L33-L33)

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| array | `any[]` |             |

```ts
function zip<O extends ObservableInput<any>, R>(
  array: O[],
  resultSelector: (...values: ObservedValueOf<O>[]) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L35-L35)

### Parameters

| Name           | Type                                     | Description |
| -------------- | ---------------------------------------- | ----------- |
| array          | `O[]`                                    |             |
| resultSelector | `(...values: ObservedValueOf<O>[]) => R` |             |

```ts
function zip<R>(
  array: ObservableInput<any>[],
  resultSelector: (...values: any[]) => R
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L37-L37)

### Parameters

| Name           | Type                      | Description |
| -------------- | ------------------------- | ----------- |
| array          | `any[]`                   |             |
| resultSelector | `(...values: any[]) => R` |             |

```ts
function zip<O extends ObservableInput<any>>(
  ...observables: O[]
): Observable<ObservedValueOf<O>[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L39-L39)

### Parameters

| Name        | Type  | Description |
| ----------- | ----- | ----------- |
| observables | `O[]` |             |

```ts
function zip<O extends ObservableInput<any>, R>(
  ...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R)>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L40-L40)

### Parameters

| Name        | Type | Description                                  |
| ----------- | ---- | -------------------------------------------- |
| observables | `(O  | ((...values: ObservedValueOf<O>[]) => R))[]` |  |

```ts
function zip<R>(
  ...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/zip.ts#L41-L41)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |
