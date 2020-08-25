---
kind: ClassDeclaration
name: Notification
module: src
---

# Notification

## description

Represents a push-based event or value that an {@link Observable} can emit.
This class is particularly useful for operators that manage notifications,
like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
others. Besides wrapping the actual delivered value, it also annotates it
with metadata of, for instance, what type of push message it is (`next`,
`error`, or `complete`).

```ts
class Notification<T> {
  readonly hasValue: boolean;

  observe(observer: PartialObserver<T>): void;
  do(
    next: (value: T) => void,
    error?: (err: any) => void,
    complete?: () => void
  ): void;
  do(
    next: (value: T) => void,
    error: (err: any) => void,
    complete: () => void
  ): void;
  do(next: (value: T) => void, error: (err: any) => void): void;
  do(next: (value: T) => void): void;
  accept(
    nextOrObserver: PartialObserver<T> | ((value: T) => void),
    error?: (err: any) => void,
    complete?: () => void
  );
  accept(
    next: (value: T) => void,
    error: (err: any) => void,
    complete: () => void
  ): void;
  accept(next: (value: T) => void, error: (err: any) => void): void;
  accept(next: (value: T) => void): void;
  accept(observer: PartialObserver<T>): void;
  toObservable(): Observable<T>;
  static createNext<T>(value: T);
  static createError(err?: any);
  static createComplete(): Notification<never> & CompleteNotification;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L38-L238)

## see

{@link materialize}
{@link dematerialize}
{@link observeOn}

## deprecated

remove in v8. It is NOT recommended to create instances of `Notification` directly
and use them. Rather, try to create POJOs matching the signature outlined in {@link ObservableNotification}.
For example: `{ kind: 'N', value: 1 }`, `{kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.

## Methods

### observe

#### description (#observe-description)

Executes the appropriate handler on a passed `observer` given the `kind` of notification.
If the handler is missing it will do nothing. Even if the notification is an error, if
there is no error handler on the observer, an error will not be thrown, it will noop.

```ts
observe(observer: PartialObserver<T>): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L77-L89)

#### Parameters (#observe-parameters)

| Name     | Type                 | Description             |
| -------- | -------------------- | ----------------------- |
| observer | `PartialObserver<T>` | The observer to notify. |

### do

```ts
do(next: (value: T) => void, error?: (err: any) => void, complete?: () => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L117-L130)

#### Parameters (#do-parameters)

| Name     | Type                 | Description |
| -------- | -------------------- | ----------- |
| next     | `(value: T) => void` |             |
| error    | `(err: any) => void` |             |
| complete | `() => void`         |             |

### do

#### description (#do-description)

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

```ts
do(next: (value: T) => void, error: (err: any) => void, complete: () => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L100-L100)

#### Parameters (#do-parameters)

| Name     | Type                 | Description        |
| -------- | -------------------- | ------------------ |
| next     | `(value: T) => void` | A next handler     |
| error    | `(err: any) => void` | An error handler   |
| complete | `() => void`         | A complete handler |

#### deprecated (#do-deprecated)

remove in v8. use {@link Notification.prototype.observe} instead.

### do

#### description (#do-description)

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

```ts
do(next: (value: T) => void, error: (err: any) => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L109-L109)

#### Parameters (#do-parameters)

| Name  | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| next  | `(value: T) => void` | A next handler   |
| error | `(err: any) => void` | An error handler |

#### deprecated (#do-deprecated)

remove in v8. use {@link Notification.prototype.observe} instead.

### do

#### description (#do-description)

Executes the next handler if the Notification is of `kind` `"N"`. Otherwise
this will not error, and it will be a noop.

```ts
do(next: (value: T) => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L116-L116)

#### Parameters (#do-parameters)

| Name | Type                 | Description      |
| ---- | -------------------- | ---------------- |
| next | `(value: T) => void` | The next handler |

#### deprecated (#do-deprecated)

remove in v8. use {@link Notification.prototype.observe} instead.

### accept

```ts
accept(nextOrObserver: PartialObserver<T> | ((value: T) => void), error?: (err: any) => void, complete?: () => void);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L167-L173)

#### Parameters (#accept-parameters)

| Name           | Type                                                                              | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| nextOrObserver | `import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").NextObserver<T> | import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").ErrorObserver<T> | import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").CompletionObserver<T> | ((value: T) => void)` |  |
| error          | `(err: any) => void`                                                              |                                                                                   |
| complete       | `() => void`                                                                      |                                                                                   |

### accept

#### description (#accept-description)

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

```ts
accept(next: (value: T) => void, error: (err: any) => void, complete: () => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L141-L141)

#### Parameters (#accept-parameters)

| Name     | Type                 | Description        |
| -------- | -------------------- | ------------------ |
| next     | `(value: T) => void` | A next handler     |
| error    | `(err: any) => void` | An error handler   |
| complete | `() => void`         | A complete handler |

#### deprecated (#accept-deprecated)

remove in v8. use {@link Notification.prototype.observe} instead.

### accept

#### description (#accept-description)

Executes a notification on the appropriate handler from a list provided.
If a handler is missing for the kind of notification, nothing is called
and no error is thrown, it will be a noop.

```ts
accept(next: (value: T) => void, error: (err: any) => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L150-L150)

#### Parameters (#accept-parameters)

| Name  | Type                 | Description      |
| ----- | -------------------- | ---------------- |
| next  | `(value: T) => void` | A next handler   |
| error | `(err: any) => void` | An error handler |

#### deprecated (#accept-deprecated)

remove in v8. use {@link Notification.prototype.observe} instead.

### accept

#### description (#accept-description)

Executes the next handler if the Notification is of `kind` `"N"`. Otherwise
this will not error, and it will be a noop.

```ts
accept(next: (value: T) => void): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L157-L157)

#### Parameters (#accept-parameters)

| Name | Type                 | Description      |
| ---- | -------------------- | ---------------- |
| next | `(value: T) => void` | The next handler |

#### deprecated (#accept-deprecated)

remove in v8. use {@link Notification.prototype.observe} instead.

### accept

#### description (#accept-description)

Executes the appropriate handler on a passed `observer` given the `kind` of notification.
If the handler is missing it will do nothing. Even if the notification is an error, if
there is no error handler on the observer, an error will not be thrown, it will noop.

```ts
accept(observer: PartialObserver<T>): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L166-L166)

#### Parameters (#accept-parameters)

| Name     | Type                 | Description             |
| -------- | -------------------- | ----------------------- |
| observer | `PartialObserver<T>` | The observer to notify. |

#### deprecated (#accept-deprecated)

remove in v8. Use {@link Notification.prototype.observe} instead.

### toObservable

#### description (#toObservable-description)

Returns a simple Observable that just delivers the notification represented
by this Notification instance.

```ts
toObservable(): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L183-L194)

#### deprecated (#toObservable-deprecated)

remove in v8. In order to accomplish converting `Notification` to an {@link Observable}
you may use {@link of} and {@link dematerialize}: `of(notification).pipe(dematerialize())`. This is
being removed as it has limited usefulness, and we're trying to streamline the library.

### createNext

#### description (#createNext-description)

A shortcut to create a Notification instance of the type `next` from a
given value.

```ts
static createNext<T>(value: T);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L208-L210)

#### Parameters (#createNext-parameters)

| Name  | Type | Description             |
| ----- | ---- | ----------------------- |
| {T}   | ``   | value The `next` value. |
| value | `T`  |                         |

#### return (#createNext-return)

{Notification<T>} The "next" Notification representing the
argument.

#### nocollapse (#createNext-nocollapse)

#### deprecated (#createNext-deprecated)

remove in v8. It is NOT recommended to create instances of `Notification` directly
and use them. Rather, try to create POJOs matching the signature outlined in {@link ObservableNotification}.
For example: `{ kind: 'N', value: 1 }`, `{kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.

### createError

#### description (#createError-description)

A shortcut to create a Notification instance of the type `error` from a
given error.

```ts
static createError(err?: any);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L223-L225)

#### Parameters (#createError-parameters)

| Name  | Type  | Description              |
| ----- | ----- | ------------------------ |
| {any} | ``    | [err] The `error` error. |
| err   | `any` |                          |

#### return (#createError-return)

{Notification<T>} The "error" Notification representing the
argument.

#### nocollapse (#createError-nocollapse)

#### deprecated (#createError-deprecated)

remove in v8. It is NOT recommended to create instances of `Notification` directly
and use them. Rather, try to create POJOs matching the signature outlined in {@link ObservableNotification}.
For example: `{ kind: 'N', value: 1 }`, `{kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.

### createComplete

#### description (#createComplete-description)

A shortcut to create a Notification instance of the type `complete`.

```ts
static createComplete(): Notification<never> & CompleteNotification;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L235-L237)

#### return (#createComplete-return)

{Notification<any>} The valueless "complete" Notification.

#### nocollapse (#createComplete-nocollapse)

#### deprecated (#createComplete-deprecated)

remove in v8. It is NOT recommended to create instances of `Notification` directly
and use them. Rather, try to create POJOs matching the signature outlined in {@link ObservableNotification}.
For example: `{ kind: 'N', value: 1 }`, `{kind: 'E', error: new Error('bad') }`, or `{ kind: 'C' }`.

## Parameters

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| hasValue | `boolean` | /\*\*       |

- A value signifying that the notification will "next" if observed. In truth,
- This is really synonomous with just checking `kind === "N"`.
- @deprecated remove in v8. Instead, just check to see if the value of `kind` is `"N"`.
  \*/ |
