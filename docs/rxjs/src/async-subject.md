---
kind: ClassDeclaration
name: AsyncSubject
module: src
---

# AsyncSubject

## description

A variant of Subject that only emits a value when it completes. It will emit
its latest value to all its observers on completion.

```ts
class AsyncSubject<T> extends Subject<T> {
  _subscribe(subscriber: Subscriber<any>): Subscription;
  next(value: T): void;
  error(error: any): void;
  complete(): void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/AsyncSubject.ts#L11-L49)

## class

AsyncSubject<T>

## Methods

### \_subscribe

```ts
_subscribe(subscriber: Subscriber<any>): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/AsyncSubject.ts#L17-L27)

#### Parameters (#\_subscribe-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| subscriber | `Subscriber<any>` |             |

### next

```ts
next(value: T): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/AsyncSubject.ts#L29-L34)

#### Parameters (#next-parameters)

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T`  |             |

### error

```ts
error(error: any): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/AsyncSubject.ts#L36-L40)

#### Parameters (#error-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| error | `any` |             |

### complete

```ts
complete(): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/AsyncSubject.ts#L42-L48)
