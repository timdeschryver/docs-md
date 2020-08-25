---
kind: FunctionDeclaration
name: bindNodeCallback
module: src
---

# bindNodeCallback

## description

Converts a Node.js-style callback API to a function that returns an
Observable.

<span class="informal">It's just like {@link bindCallback}, but the
callback is expected to be of type `callback(error, result)`.</span>

`bindNodeCallback` is not an operator because its input and output are not
Observables. The input is a function `func` with some parameters, but the
last parameter must be a callback function that `func` calls when it is
done. The callback function is expected to follow Node.js conventions,
where the first argument to the callback is an error object, signaling
whether call was successful. If that object is passed to callback, it means
something went wrong.

The output of `bindNodeCallback` is a function that takes the same
parameters as `func`, except the last one (the callback). When the output
function is called with arguments, it will return an Observable.
If `func` calls its callback with error parameter present, Observable will
error with that value as well. If error parameter is not passed, Observable will emit
second parameter. If there are more parameters (third and so on),
Observable will emit an array with all arguments, except first error argument.

Note that `func` will not be called at the same time output function is,
but rather whenever resulting Observable is subscribed. By default call to
`func` will happen synchronously after subscription, but that can be changed
with proper `scheduler` provided as optional third parameter. {@link SchedulerLike}
can also control when values from callback will be emitted by Observable.
To find out more, check out documentation for {@link bindCallback}, where
{@link SchedulerLike} works exactly the same.

As in {@link bindCallback}, context (`this` property) of input function will be set to context
of returned function, when it is called.

After Observable emits value, it will complete immediately. This means
even if `func` calls callback again, values from second and consecutive
calls will never appear on the stream. If you need to handle functions
that call callbacks multiple times, check out {@link fromEvent} or
{@link fromEventPattern} instead.

Note that `bindNodeCallback` can be used in non-Node.js environments as well.
"Node.js-style" callbacks are just a convention, so if you write for
browsers or any other environment and API you use implements that callback style,
`bindNodeCallback` can be safely used on that API functions as well.

Remember that Error object passed to callback does not have to be an instance
of JavaScript built-in `Error` object. In fact, it does not even have to an object.
Error parameter of callback function is interpreted as "present", when value
of that parameter is truthy. It could be, for example, non-zero number, non-empty
string or boolean `true`. In all of these cases resulting Observable would error
with that value. This means usually regular style callbacks will fail very often when
`bindNodeCallback` is used. If your Observable errors much more often then you
would expect, check if callback really is called in Node.js-style and, if not,
switch to {@link bindCallback} instead.

Note that even if error parameter is technically present in callback, but its value
is falsy, it still won't appear in array emitted by Observable.

## Examples

### Read a file from the filesystem and get the data as an Observable

```ts
import * as fs from "fs";
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable("./roadNames.txt", "utf8");
result.subscribe(
  (x) => console.log(x),
  (e) => console.error(e)
);
```

### Use on function calling callback with multiple arguments

```ts
someFunction((err, a, b) => {
  console.log(err); // null
  console.log(a); // 5
  console.log(b); // "some string"
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction().subscribe((value) => {
  console.log(value); // [5, "some string"]
});
```

### Use on function calling callback in regular style

```ts
someFunction(a => {
console.log(a); // 5
});
const boundSomeFunction = bindNodeCallback(someFunction);
boundSomeFunction()
.subscribe(
value => {}             // never gets called
err => console.log(err) // 5
);
```

```ts
function bindNodeCallback<T>(
  callbackFunc: Function,
  resultSelector?: Function | SchedulerLike,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L156-L215)

## see

{@link bindCallback}
{@link from}

## Parameters

| Name            | Type            | Description                                                        |
| --------------- | --------------- | ------------------------------------------------------------------ |
| {function}      | ``              | func Function with a Node.js-style callback as the last parameter. |
| {SchedulerLike} | ``              | [scheduler] The scheduler on which to schedule the                 |
| callbackFunc    | `Function`      |                                                                    |
| resultSelector  | `Function       | SchedulerLike`                                                     |  |
| scheduler       | `SchedulerLike` |                                                                    |

## return

{function(...params: \*): Observable} A function which returns the
Observable that delivers the same values the Node.js callback would
deliver.

## name

bindNodeCallback

## Overloads

```ts
function bindNodeCallback(
  callbackFunc: Function,
  resultSelector: Function,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L12-L12)

### Parameters

| Name           | Type            | Description |
| -------------- | --------------- | ----------- |
| callbackFunc   | `Function`      |             |
| resultSelector | `Function`      |             |
| scheduler      | `SchedulerLike` |             |

```ts
function bindNodeCallback<R1, R2, R3, R4>(
  callbackFunc: (
    callback: (
      err: any,
      res1: R1,
      res2: R2,
      res3: R3,
      res4: R4,
      ...args: any[]
    ) => any
  ) => any,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L14-L14)

### Parameters

| Name         | Type                                                                                           | Description |
| ------------ | ---------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(callback: (err: any, res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                |             |

```ts
function bindNodeCallback<R1, R2, R3>(
  callbackFunc: (
    callback: (err: any, res1: R1, res2: R2, res3: R3) => any
  ) => any,
  scheduler?: SchedulerLike
): () => Observable<[R1, R2, R3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L15-L15)

### Parameters

| Name         | Type                                                                 | Description |
| ------------ | -------------------------------------------------------------------- | ----------- |
| callbackFunc | `(callback: (err: any, res1: R1, res2: R2, res3: R3) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                      |             |

```ts
function bindNodeCallback<R1, R2>(
  callbackFunc: (callback: (err: any, res1: R1, res2: R2) => any) => any,
  scheduler?: SchedulerLike
): () => Observable<[R1, R2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L16-L16)

### Parameters

| Name         | Type                                                       | Description |
| ------------ | ---------------------------------------------------------- | ----------- |
| callbackFunc | `(callback: (err: any, res1: R1, res2: R2) => any) => any` |             |
| scheduler    | `SchedulerLike`                                            |             |

```ts
function bindNodeCallback<R1>(
  callbackFunc: (callback: (err: any, res1: R1) => any) => any,
  scheduler?: SchedulerLike
): () => Observable<R1>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L17-L17)

### Parameters

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| callbackFunc | `(callback: (err: any, res1: R1) => any) => any` |             |
| scheduler    | `SchedulerLike`                                  |             |

```ts
function bindNodeCallback(
  callbackFunc: (callback: (err: any) => any) => any,
  scheduler?: SchedulerLike
): () => Observable<void>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L18-L18)

### Parameters

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| callbackFunc | `(callback: (err: any) => any) => any` |             |
| scheduler    | `SchedulerLike`                        |             |

```ts
function bindNodeCallback<A1, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    callback: (
      err: any,
      res1: R1,
      res2: R2,
      res3: R3,
      res4: R4,
      ...args: any[]
    ) => any
  ) => any,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L20-L20)

### Parameters

| Name         | Type                                                                                                     | Description |
| ------------ | -------------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, callback: (err: any, res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                          |             |

```ts
function bindNodeCallback<A1, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    callback: (err: any, res1: R1, res2: R2, res3: R3) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1) => Observable<[R1, R2, R3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L21-L21)

### Parameters

| Name         | Type                                                                           | Description |
| ------------ | ------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, callback: (err: any, res1: R1, res2: R2, res3: R3) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                |             |

```ts
function bindNodeCallback<A1, R1, R2>(
  callbackFunc: (
    arg1: A1,
    callback: (err: any, res1: R1, res2: R2) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1) => Observable<[R1, R2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L22-L22)

### Parameters

| Name         | Type                                                                 | Description |
| ------------ | -------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, callback: (err: any, res1: R1, res2: R2) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                      |             |

```ts
function bindNodeCallback<A1, R1>(
  callbackFunc: (arg1: A1, callback: (err: any, res1: R1) => any) => any,
  scheduler?: SchedulerLike
): (arg1: A1) => Observable<R1>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L23-L23)

### Parameters

| Name         | Type                                                       | Description |
| ------------ | ---------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, callback: (err: any, res1: R1) => any) => any` |             |
| scheduler    | `SchedulerLike`                                            |             |

```ts
function bindNodeCallback<A1>(
  callbackFunc: (arg1: A1, callback: (err: any) => any) => any,
  scheduler?: SchedulerLike
): (arg1: A1) => Observable<void>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L24-L24)

### Parameters

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, callback: (err: any) => any) => any` |             |
| scheduler    | `SchedulerLike`                                  |             |

```ts
function bindNodeCallback<A1, A2, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (
      err: any,
      res1: R1,
      res2: R2,
      res3: R3,
      res4: R4,
      ...args: any[]
    ) => any
  ) => any,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L26-L26)

### Parameters

| Name         | Type                                                                                                               | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, callback: (err: any, res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                                    |             |

```ts
function bindNodeCallback<A1, A2, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: any, res1: R1, res2: R2, res3: R3) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2) => Observable<[R1, R2, R3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L27-L27)

### Parameters

| Name         | Type                                                                                     | Description |
| ------------ | ---------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, callback: (err: any, res1: R1, res2: R2, res3: R3) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                          |             |

```ts
function bindNodeCallback<A1, A2, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: any, res1: R1, res2: R2) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2) => Observable<[R1, R2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L28-L28)

### Parameters

| Name         | Type                                                                           | Description |
| ------------ | ------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, callback: (err: any, res1: R1, res2: R2) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                |             |

```ts
function bindNodeCallback<A1, A2, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: any, res1: R1) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2) => Observable<R1>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L29-L29)

### Parameters

| Name         | Type                                                                 | Description |
| ------------ | -------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, callback: (err: any, res1: R1) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                      |             |

```ts
function bindNodeCallback<A1, A2>(
  callbackFunc: (arg1: A1, arg2: A2, callback: (err: any) => any) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2) => Observable<void>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L30-L30)

### Parameters

| Name         | Type                                                       | Description |
| ------------ | ---------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, callback: (err: any) => any) => any` |             |
| scheduler    | `SchedulerLike`                                            |             |

```ts
function bindNodeCallback<A1, A2, A3, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (
      err: any,
      res1: R1,
      res2: R2,
      res3: R3,
      res4: R4,
      ...args: any[]
    ) => any
  ) => any,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L32-L32)

### Parameters

| Name         | Type                                                                                                                         | Description |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, callback: (err: any, res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                                              |             |

```ts
function bindNodeCallback<A1, A2, A3, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: any, res1: R1, res2: R2, res3: R3) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3) => Observable<[R1, R2, R3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L33-L33)

### Parameters

| Name         | Type                                                                                               | Description |
| ------------ | -------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, callback: (err: any, res1: R1, res2: R2, res3: R3) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                    |             |

```ts
function bindNodeCallback<A1, A2, A3, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: any, res1: R1, res2: R2) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3) => Observable<[R1, R2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L34-L34)

### Parameters

| Name         | Type                                                                                     | Description |
| ------------ | ---------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, callback: (err: any, res1: R1, res2: R2) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                          |             |

```ts
function bindNodeCallback<A1, A2, A3, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: any, res1: R1) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3) => Observable<R1>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L35-L35)

### Parameters

| Name         | Type                                                                           | Description |
| ------------ | ------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, callback: (err: any, res1: R1) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                |             |

```ts
function bindNodeCallback<A1, A2, A3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: any) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3) => Observable<void>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L36-L36)

### Parameters

| Name         | Type                                                                 | Description |
| ------------ | -------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, callback: (err: any) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                      |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (
      err: any,
      res1: R1,
      res2: R2,
      res3: R3,
      res4: R4,
      ...args: any[]
    ) => any
  ) => any,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L38-L38)

### Parameters

| Name         | Type                                                                                                                                   | Description |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                                                        |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: any, res1: R1, res2: R2, res3: R3) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<[R1, R2, R3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L39-L39)

### Parameters

| Name         | Type                                                                                                         | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, res1: R1, res2: R2, res3: R3) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                              |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: any, res1: R1, res2: R2) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<[R1, R2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L40-L40)

### Parameters

| Name         | Type                                                                                               | Description |
| ------------ | -------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, res1: R1, res2: R2) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                    |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: any, res1: R1) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<R1>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L41-L41)

### Parameters

| Name         | Type                                                                                     | Description |
| ------------ | ---------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, res1: R1) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                          |             |

```ts
function bindNodeCallback<A1, A2, A3, A4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: any) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Observable<void>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L42-L42)

### Parameters

| Name         | Type                                                                           | Description |
| ------------ | ------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (
      err: any,
      res1: R1,
      res2: R2,
      res3: R3,
      res4: R4,
      ...args: any[]
    ) => any
  ) => any,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L44-L44)

### Parameters

| Name         | Type                                                                                                                                             | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, res1: R1, res2: R2, res3: R3, res4: R4, ...args: any[]) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                                                                  |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: any, res1: R1, res2: R2, res3: R3) => any
  ) => any,
  scheduler?: SchedulerLike
): (
  arg1: A1,
  arg2: A2,
  arg3: A3,
  arg4: A4,
  arg5: A5
) => Observable<[R1, R2, R3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L45-L45)

### Parameters

| Name         | Type                                                                                                                   | Description |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, res1: R1, res2: R2, res3: R3) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                                        |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: any, res1: R1, res2: R2) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<[R1, R2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L46-L46)

### Parameters

| Name         | Type                                                                                                         | Description |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, res1: R1, res2: R2) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                              |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, A5, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: any, res1: R1) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<R1>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L47-L47)

### Parameters

| Name         | Type                                                                                               | Description |
| ------------ | -------------------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, res1: R1) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                                    |             |

```ts
function bindNodeCallback<A1, A2, A3, A4, A5>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: any) => any
  ) => any,
  scheduler?: SchedulerLike
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Observable<void>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L48-L48)

### Parameters

| Name         | Type                                                                                     | Description |
| ------------ | ---------------------------------------------------------------------------------------- | ----------- |
| callbackFunc | `(arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any) => any) => any` |             |
| scheduler    | `SchedulerLike`                                                                          |             |

```ts
function bindNodeCallback(
  callbackFunc: Function,
  scheduler?: SchedulerLike
): (...args: any[]) => Observable<any[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/bindNodeCallback.ts#L50-L50)

### Parameters

| Name         | Type            | Description |
| ------------ | --------------- | ----------- |
| callbackFunc | `Function`      |             |
| scheduler    | `SchedulerLike` |             |
