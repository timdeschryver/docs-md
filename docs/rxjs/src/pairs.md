---
kind: FunctionDeclaration
name: pairs
module: src
---

# pairs

## description

Convert an object into an Observable of `[key, value]` pairs.

<span class="informal">Turn entries of an object into a stream.</span>

![](pairs.png)

`pairs` takes an arbitrary object and returns an Observable that emits arrays. Each
emitted array has exactly two elements - the first is a key from the object
and the second is a value corresponding to that key. Keys are extracted from
an object via `Object.keys` function, which means that they will be only
enumerable keys that are present on an object directly - not ones inherited
via prototype chain.

By default these arrays are emitted synchronously. To change that you can
pass a {@link SchedulerLike} as a second argument to `pairs`.

## Example

### Converts an object to an Observable

```ts
import { pairs } from "rxjs";

const obj = {
  foo: 42,
  bar: 56,
  baz: 78,
};

pairs(obj).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Complete!"),
});

// Logs:
// ["foo", 42],
// ["bar", 56],
// ["baz", 78],
// "Complete!"
```

```ts
function pairs<T>(
  obj: Object,
  scheduler?: SchedulerLike
): Observable<[string, T]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/pairs.ts#L53-L78)

## Parameters

| Name        | Type            | Description                                    |
| ----------- | --------------- | ---------------------------------------------- |
| {Object}    | ``              | obj The object to inspect and turn into an     |
| {Scheduler} | ``              | [scheduler] An optional IScheduler to schedule |
| obj         | `Object`        |                                                |
| scheduler   | `SchedulerLike` |                                                |

## returns

{(Observable<Array<string|T>>)} An observable sequence of
[key, value] pairs from the object.
