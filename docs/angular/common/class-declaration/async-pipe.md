---
kind: ClassDeclaration
name: AsyncPipe
module: common
---

# AsyncPipe

## description

Unwraps a value from an asynchronous primitive.

The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
potential memory leaks.

```ts
class AsyncPipe implements OnDestroy, PipeTransform {
  ngOnDestroy(): void;
  transform(obj: Observable<any> | Promise<any> | null | undefined): any;
  transform<T>(obj: null): null;
  transform<T>(obj: undefined): undefined;
  transform<T>(obj: Observable<T> | null | undefined): T | null;
  transform<T>(obj: Promise<T> | null | undefined): T | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L81-L149)

## ngModule

CommonModule

## usageNotes

### Examples

This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
promise.

{@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}

It's also possible to use `async` with Observables. The example below binds the `time` Observable
to the view. The Observable continuously updates the view with the current time.

{@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}

## publicApi

## Methods

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L91-L95)

### transform

```ts
transform(obj: Observable<any>|Promise<any>|null|undefined): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L101-L115)

#### Parameters (#transform-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| obj  | `any` |             |

### transform

```ts
transform<T>(obj: null): null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L97-L97)

#### Parameters (#transform-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| obj  | `null` |             |

### transform

```ts
transform<T>(obj: undefined): undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L98-L98)

#### Parameters (#transform-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| obj  | `undefined` |             |

### transform

```ts
transform<T>(obj: Observable<T>|null|undefined): T|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L99-L99)

#### Parameters (#transform-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| obj  | `any` |             |

### transform

```ts
transform<T>(obj: Promise<T>|null|undefined): T|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/async_pipe.ts#L100-L100)

#### Parameters (#transform-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| obj  | `Promise<T>` |             |
