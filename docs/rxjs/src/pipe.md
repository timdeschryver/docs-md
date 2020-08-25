---
kind: FunctionDeclaration
name: pipe
module: src
---

# pipe

```ts
function pipe(...fns: Array<UnaryFunction<any, any>>): UnaryFunction<any, any>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L18-L20)

## Parameters

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| fns  | `UnaryFunction<any, any>[]` |             |

## Overloads

```ts
function pipe<T>(): UnaryFunction<T, T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L5-L5)

```ts
function pipe<T, A>(fn1: UnaryFunction<T, A>): UnaryFunction<T, A>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L6-L6)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |

```ts
function pipe<T, A, B>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>
): UnaryFunction<T, B>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L7-L7)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |

```ts
function pipe<T, A, B, C>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>
): UnaryFunction<T, C>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L8-L8)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |

```ts
function pipe<T, A, B, C, D>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>
): UnaryFunction<T, D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L9-L9)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |
| fn4  | `UnaryFunction<C, D>` |             |

```ts
function pipe<T, A, B, C, D, E>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, E>
): UnaryFunction<T, E>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L10-L10)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |
| fn4  | `UnaryFunction<C, D>` |             |
| fn5  | `UnaryFunction<D, E>` |             |

```ts
function pipe<T, A, B, C, D, E, F>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, E>,
  fn6: UnaryFunction<E, F>
): UnaryFunction<T, F>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L11-L11)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |
| fn4  | `UnaryFunction<C, D>` |             |
| fn5  | `UnaryFunction<D, E>` |             |
| fn6  | `UnaryFunction<E, F>` |             |

```ts
function pipe<T, A, B, C, D, E, F, G>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, E>,
  fn6: UnaryFunction<E, F>,
  fn7: UnaryFunction<F, G>
): UnaryFunction<T, G>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L12-L12)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |
| fn4  | `UnaryFunction<C, D>` |             |
| fn5  | `UnaryFunction<D, E>` |             |
| fn6  | `UnaryFunction<E, F>` |             |
| fn7  | `UnaryFunction<F, G>` |             |

```ts
function pipe<T, A, B, C, D, E, F, G, H>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, E>,
  fn6: UnaryFunction<E, F>,
  fn7: UnaryFunction<F, G>,
  fn8: UnaryFunction<G, H>
): UnaryFunction<T, H>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L13-L13)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |
| fn4  | `UnaryFunction<C, D>` |             |
| fn5  | `UnaryFunction<D, E>` |             |
| fn6  | `UnaryFunction<E, F>` |             |
| fn7  | `UnaryFunction<F, G>` |             |
| fn8  | `UnaryFunction<G, H>` |             |

```ts
function pipe<T, A, B, C, D, E, F, G, H, I>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, E>,
  fn6: UnaryFunction<E, F>,
  fn7: UnaryFunction<F, G>,
  fn8: UnaryFunction<G, H>,
  fn9: UnaryFunction<H, I>
): UnaryFunction<T, I>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L14-L14)

### Parameters

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>` |             |
| fn2  | `UnaryFunction<A, B>` |             |
| fn3  | `UnaryFunction<B, C>` |             |
| fn4  | `UnaryFunction<C, D>` |             |
| fn5  | `UnaryFunction<D, E>` |             |
| fn6  | `UnaryFunction<E, F>` |             |
| fn7  | `UnaryFunction<F, G>` |             |
| fn8  | `UnaryFunction<G, H>` |             |
| fn9  | `UnaryFunction<H, I>` |             |

```ts
function pipe<T, A, B, C, D, E, F, G, H, I>(
  fn1: UnaryFunction<T, A>,
  fn2: UnaryFunction<A, B>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<D, E>,
  fn6: UnaryFunction<E, F>,
  fn7: UnaryFunction<F, G>,
  fn8: UnaryFunction<G, H>,
  fn9: UnaryFunction<H, I>,
  ...fns: UnaryFunction<any, any>[]
): UnaryFunction<T, {}>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts#L15-L15)

### Parameters

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| fn1  | `UnaryFunction<T, A>`       |             |
| fn2  | `UnaryFunction<A, B>`       |             |
| fn3  | `UnaryFunction<B, C>`       |             |
| fn4  | `UnaryFunction<C, D>`       |             |
| fn5  | `UnaryFunction<D, E>`       |             |
| fn6  | `UnaryFunction<E, F>`       |             |
| fn7  | `UnaryFunction<F, G>`       |             |
| fn8  | `UnaryFunction<G, H>`       |             |
| fn9  | `UnaryFunction<H, I>`       |             |
| fns  | `UnaryFunction<any, any>[]` |             |
