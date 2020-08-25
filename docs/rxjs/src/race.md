---
kind: FunctionDeclaration
name: race
module: src
---

# race

## description

Returns an observable that mirrors the first source observable to emit an item.

![](race.png)

`race` returns an observable, that when subscribed to, subscribes to all source observables immediately.
As soon as one of the source observables emits a value, the result unsubscribes from the other sources.
The resulting observable will forward all notifications, including error and completion, from the "winning"
source observable.

If one of the used source observable throws an errors before a first notification
the race operator will also throw an error, no matter if another source observable
could potentially win the race.

`race` can be useful for selecting the response from the fastest network connection for
HTTP or WebSockets. `race` can also be useful for switching observable context based on user
input.

## Example

### Subscribes to the observable that was the first to start emitting.

```ts
import { race, interval } from "rxjs";
import { mapTo } from "rxjs/operators";

const obs1 = interval(1000).pipe(mapTo("fast one"));
const obs2 = interval(3000).pipe(mapTo("medium one"));
const obs3 = interval(5000).pipe(mapTo("slow one"));

race(obs3, obs1, obs2).subscribe((winner) => console.log(winner));

// Outputs
// a series of 'fast one'
```

```ts
function race<T>(
  ...observables: (ObservableInput<T> | ObservableInput<T>[])[]
): Observable<any>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/race.ts#L56-L68)

## Parameters

| Name             | Type    | Description                                                           |
| ---------------- | ------- | --------------------------------------------------------------------- |
| {...Observables} | ``      | ...observables sources used to race for which Observable emits first. |
| observables      | `any[]` |                                                                       |

## return

{Observable} an Observable that mirrors the output of the first Observable to emit an item.

## Overloads

```ts
function race<A extends ObservableInput<any>[]>(
  observables: A
): Observable<ObservedValueUnionFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/race.ts#L12-L12)

### Parameters

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| observables | `A`  |             |

```ts
function race<A extends ObservableInput<any>[]>(
  ...observables: A
): Observable<ObservedValueUnionFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/race.ts#L13-L13)

### Parameters

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| observables | `A`  |             |
