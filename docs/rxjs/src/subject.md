---
kind: ClassDeclaration
name: Subject
module: src
---

# Subject

## description

A Subject is a special type of Observable that allows values to be
multicasted to many Observers. Subjects are like EventEmitters.

Every Subject is an Observable and an Observer. You can subscribe to a
Subject, and you can call next to feed values as well as error and complete.

```ts
class Subject<T> extends Observable<T> implements SubscriptionLike {
  observers: Observer<T>[] = [];
  closed = false;
  isStopped = false;
  hasError = false;
  thrownError: any = null;
  static create: Function = <T>(
    destination: Observer<T>,
    source: Observable<T>
  ): AnonymousSubject<T> => {
    return new AnonymousSubject<T>(destination, source);
  };

  lift<R>(operator: Operator<T, R>): Observable<R>;
  next(value: T);
  error(err: any);
  complete();
  unsubscribe();
  _trySubscribe(subscriber: Subscriber<T>): TeardownLogic;
  _subscribe(subscriber: Subscriber<T>): Subscription;
  asObservable(): Observable<T>;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L16-L134)

## Methods

### lift

```ts
lift<R>(operator: Operator<T, R>): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L42-L46)

#### Parameters (#lift-parameters)

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| operator | `Operator<T, R>` |             |

### next

```ts
next(value: T);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L48-L60)

#### Parameters (#next-parameters)

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T`  |             |

### error

```ts
error(err: any);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L62-L76)

#### Parameters (#error-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| err  | `any` |             |

### complete

```ts
complete();
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L78-L90)

### unsubscribe

```ts
unsubscribe();
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L92-L96)

### \_trySubscribe

```ts
_trySubscribe(subscriber: Subscriber<T>): TeardownLogic;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L99-L105)

#### Parameters (#\_trySubscribe-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| subscriber | `Subscriber<T>` |             |

### \_subscribe

```ts
_subscribe(subscriber: Subscriber<T>): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L108-L121)

#### Parameters (#\_subscribe-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| subscriber | `Subscriber<T>` |             |

### asObservable

#### description (#asObservable-description)

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

```ts
asObservable(): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subject.ts#L129-L133)

#### return (#asObservable-return)

{Observable} Observable that the Subject casts to

## Parameters

| Name        | Type            | Description |
| ----------- | --------------- | ----------- |
| observers   | `Observer<T>[]` |             |
| closed      | `boolean`       |             |
| isStopped   | `boolean`       |             |
| hasError    | `boolean`       |             |
| thrownError | `any`           |             |
| create      | `Function`      | /\*\*       |

- Creates a "subject" by basically gluing an observer to an observable.
-
- @nocollapse
- @deprecated Recommended you do not use, will be removed at some point in the future. Plans for replacement still under discussion.
  \*/ |
