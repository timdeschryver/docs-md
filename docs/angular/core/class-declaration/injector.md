---
kind: ClassDeclaration
name: Injector
module: core
---

# Injector

## description

Concrete injectors implement this interface. Injectors are configured
with [providers](guide/glossary#provider) that associate
dependencies of various types with [injection tokens](guide/glossary#di-token).

```ts
class Injector {
  static THROW_IF_NOT_FOUND = THROW_IF_NOT_FOUND;
  static NULL: Injector = new NullInjector();
  static ɵprov = ɵɵdefineInjectable({
    token: Injector,
    providedIn: "any" as any,
    factory: () => ɵɵinject(INJECTOR),
  });
  static __NG_ELEMENT_ID__ = -1;

  abstract get<T>(
    token: Type<T> | InjectionToken<T> | AbstractType<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T;
  abstract get(token: any, notFoundValue?: any): any;
  abstract get<T>(
    token: Type<T> | InjectionToken<T> | AbstractType<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T;
  abstract get(token: any, notFoundValue?: any): any;
  static create(
    options:
      | StaticProvider[]
      | { providers: StaticProvider[]; parent?: Injector; name?: string },
    parent?: Injector
  ): Injector;
  static create(providers: StaticProvider[], parent?: Injector): Injector;
  static create(options: {
    providers: StaticProvider[];
    parent?: Injector;
    name?: string;
  }): Injector;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L58-L117)

## see

["DI Providers"](guide/dependency-injection-providers).
`StaticProvider`

## usageNotes

The following example creates a service injector instance.

{@example core/di/ts/provider_spec.ts region='ConstructorProvider'}

### Usage example

{@example core/di/ts/injector_spec.ts region='Injector'}

`Injector` returns itself when given `Injector` as a token:

{@example core/di/ts/injector_spec.ts region='injectInjector'}

## publicApi

## Properties

| Name               | Type       | Description |
| ------------------ | ---------- | ----------- |
| THROW_IF_NOT_FOUND | `{}`       |             |
| NULL               | `Injector` |             |
| ɵprov              | `never`    |             |
| **NG_ELEMENT_ID**  | `number`   |             |

## Methods

### get

#### description (#get-description)

Retrieves an instance from the injector based on the provided token.

```ts
abstract get<T>(   token: Type<T>|InjectionToken<T>|AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L67-L68)

#### returns (#get-returns)

The instance from the injector if defined, otherwise the `notFoundValue`.

#### throws (#get-throws)

When the `notFoundValue` is `undefined` or `Injector.THROW_IF_NOT_FOUND`.

#### Parameters (#get-parameters)

| Name          | Type          | Description       |
| ------------- | ------------- | ----------------- |
| token         | `Type<T>      | InjectionToken<T> | AbstractType<T>` |  |
| notFoundValue | `T`           |                   |
| flags         | `InjectFlags` |                   |

### get

```ts
abstract get(token: any, notFoundValue?: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L73-L73)

#### deprecated (#get-deprecated)

from v4.0.0 use Type<T> or InjectionToken<T>

#### suppress (#get-suppress)

{duplicate}

#### Parameters (#get-parameters)

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| token         | `any` |             |
| notFoundValue | `any` |             |

### get

#### description (#get-description)

Retrieves an instance from the injector based on the provided token.

```ts
abstract get<T>(   token: Type<T>|InjectionToken<T>|AbstractType<T>, notFoundValue?: T, flags?: InjectFlags): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L67-L68)

#### returns (#get-returns)

The instance from the injector if defined, otherwise the `notFoundValue`.

#### throws (#get-throws)

When the `notFoundValue` is `undefined` or `Injector.THROW_IF_NOT_FOUND`.

#### Parameters (#get-parameters)

| Name          | Type          | Description       |
| ------------- | ------------- | ----------------- |
| token         | `Type<T>      | InjectionToken<T> | AbstractType<T>` |  |
| notFoundValue | `T`           |                   |
| flags         | `InjectFlags` |                   |

### get

```ts
abstract get(token: any, notFoundValue?: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L73-L73)

#### deprecated (#get-deprecated)

from v4.0.0 use Type<T> or InjectionToken<T>

#### suppress (#get-suppress)

{duplicate}

#### Parameters (#get-parameters)

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| token         | `any` |             |
| notFoundValue | `any` |             |

### create

```ts
static create(   options: StaticProvider[]|{providers: StaticProvider[], parent?: Injector, name?: string},   parent?: Injector): Injector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L95-L103)

#### Parameters (#create-parameters)

| Name    | Type              | Description                                                         |
| ------- | ----------------- | ------------------------------------------------------------------- |
| options | `StaticProvider[] | { providers: StaticProvider[]; parent?: Injector; name?: string; }` |  |
| parent  | `Injector`        |                                                                     |

### create

```ts
static create(providers: StaticProvider[], parent?: Injector): Injector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L78-L78)

#### deprecated (#create-deprecated)

from v5 use the new signature Injector.create(options)

#### Parameters (#create-parameters)

| Name      | Type               | Description |
| --------- | ------------------ | ----------- |
| providers | `StaticProvider[]` |             |
| parent    | `Injector`         |             |

### create

#### description (#create-description)

Creates a new injector instance that provides one or more dependencies,
according to a given type or types of `StaticProvider`.

```ts
static create(options: {providers: StaticProvider[], parent?: Injector, name?: string}): Injector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector.ts#L92-L92)

#### Parameters (#create-parameters)

| Name    | Type                                                                 | Description                              |
| ------- | -------------------------------------------------------------------- | ---------------------------------------- |
| options | `{ providers: StaticProvider[]; parent?: Injector; name?: string; }` | An object with the following properties: |

#### returns (#create-returns)

The new injector instance.
