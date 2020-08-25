---
kind: ClassDeclaration
name: Subscriber
module: src
---

# Subscriber

## description

Implements the {@link Observer} interface and extends the
{@link Subscription} class. While the {@link Observer} is the public API for
consuming the values of an {@link Observable}, all Observers get converted to
a Subscriber, in order to provide Subscription-like capabilities such as
`unsubscribe`. Subscriber is a common type in RxJS, and crucial for
implementing operators, but it is rarely used as a public API.

```ts
class Subscriber<T> extends Subscription implements Observer<T> {
  syncErrorValue: any = null;
  syncErrorThrown: boolean = false;
  syncErrorThrowable: boolean = false;

  static create<T>(
    next?: (x?: T) => void,
    error?: (e?: any) => void,
    complete?: () => void
  ): Subscriber<T>;
  next(value?: T): void;
  error(err?: any): void;
  complete(): void;
  unsubscribe(): void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscriber.ts#L18-L147)

## class

Subscriber<T>

## Methods

### create

#### description (#create-description)

A static factory for a Subscriber, given a (potentially partial) definition
of an Observer.

```ts
static create<T>(next?: (x?: T) => void,          error?: (e?: any) => void,          complete?: () => void): Subscriber<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscriber.ts#L31-L37)

#### Parameters (#create-parameters)

| Name         | Type                | Description                                           |
| ------------ | ------------------- | ----------------------------------------------------- |
| {function(x: | ``                  | ?T): void} [next] The `next` callback of an Observer. |
| {function(e: | ``                  | ?any): void} [error] The `error` callback of an       |
| {function(): | ``                  | void} [complete] The `complete` callback of an        |
| next         | `(x?: T) => void`   |                                                       |
| error        | `(e?: any) => void` |                                                       |
| complete     | `() => void`        |                                                       |

#### return (#create-return)

{Subscriber<T>} A Subscriber wrapping the (partially defined)
Observer represented by the given arguments.

#### nocollapse (#create-nocollapse)

### next

#### description (#next-description)

The {@link Observer} callback to receive notifications of type `next` from
the Observable, with a value. The Observable may call this method 0 or more
times.

```ts
next(value?: T): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscriber.ts#L93-L97)

#### Parameters (#next-parameters)

| Name  | Type | Description               |
| ----- | ---- | ------------------------- |
| {T}   | ``   | [value] The `next` value. |
| value | `T`  |                           |

#### return (#next-return)

{void}

### error

#### description (#error-description)

The {@link Observer} callback to receive notifications of type `error` from
the Observable, with an attached `Error`. Notifies the Observer that
the Observable has experienced an error condition.

```ts
error(err?: any): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscriber.ts#L106-L111)

#### Parameters (#error-parameters)

| Name  | Type  | Description                  |
| ----- | ----- | ---------------------------- |
| {any} | ``    | [err] The `error` exception. |
| err   | `any` |                              |

#### return (#error-return)

{void}

### complete

#### description (#complete-description)

The {@link Observer} callback to receive a valueless notification of type
`complete` from the Observable. Notifies the Observer that the Observable
has finished sending push-based notifications.

```ts
complete(): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscriber.ts#L119-L124)

#### return (#complete-return)

{void}

### unsubscribe

```ts
unsubscribe(): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscriber.ts#L126-L132)

## Parameters

| Name               | Type      | Description       |
| ------------------ | --------- | ----------------- |
| syncErrorValue     | `any`     | /\*_ @internal _/ |
| syncErrorThrown    | `boolean` | /\*_ @internal _/ |
| syncErrorThrowable | `boolean` | /\*_ @internal _/ |
