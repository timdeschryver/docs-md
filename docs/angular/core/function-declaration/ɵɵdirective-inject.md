---
kind: FunctionDeclaration
name: ɵɵdirectiveInject
module: core
---

# ɵɵdirectiveInject

```ts
function ɵɵdirectiveInject<T>(
  token: Type<T> | InjectionToken<T>,
  flags = InjectFlags.Default
): T | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/di.ts#L41-L50)

## Parameters

| Name  | Type          | Description        |
| ----- | ------------- | ------------------ |
| token | `Type<T>      | InjectionToken<T>` |  |
| flags | `InjectFlags` |                    |

## Overloads

### description

Returns the value associated to the given token from the injectors.

`directiveInject` is intended to be used for directive, component and pipe factories.
All other injection use `inject` which does not walk the node injector tree.

Usage example (in factory function):

```ts
class SomeDirective {
  constructor(directive: DirectiveA) {}

  static ɵdir = ɵɵdefineDirective({
    type: SomeDirective,
    factory: () => new SomeDirective(ɵɵdirectiveInject(DirectiveA)),
  });
}
```

```ts
function ɵɵdirectiveInject<T>(token: Type<T> | InjectionToken<T>): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/di.ts#L39-L39)

### Parameters

| Name  | Type     | Description        |
| ----- | -------- | ------------------ |
| token | `Type<T> | InjectionToken<T>` | the type or token to inject |
| flags | ``       | Injection flags    |

### returns

the value from the injector or `null` when not found

### codeGenApi

```ts
function ɵɵdirectiveInject<T>(
  token: Type<T> | InjectionToken<T>,
  flags: InjectFlags
): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/di.ts#L40-L40)

### Parameters

| Name  | Type          | Description        |
| ----- | ------------- | ------------------ |
| token | `Type<T>      | InjectionToken<T>` |  |
| flags | `InjectFlags` |                    |
