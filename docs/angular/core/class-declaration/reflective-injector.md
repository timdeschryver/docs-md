---
kind: ClassDeclaration
name: ReflectiveInjector
module: core
---

# ReflectiveInjector

## description

A ReflectiveDependency injection container used for instantiating objects and resolving
dependencies.

An `Injector` is a replacement for a `new` operator, which can automatically resolve the
constructor dependencies.

In typical use, application code asks for the dependencies in the constructor and they are
resolved by the `Injector`.

```ts
class ReflectiveInjector implements Injector {
  static resolve(providers: Provider[]): ResolvedReflectiveProvider[];
  static resolveAndCreate(
    providers: Provider[],
    parent?: Injector
  ): ReflectiveInjector;
  static fromResolvedProviders(
    providers: ResolvedReflectiveProvider[],
    parent?: Injector
  ): ReflectiveInjector;
  abstract resolveAndCreateChild(providers: Provider[]): ReflectiveInjector;
  abstract createChildFromResolved(
    providers: ResolvedReflectiveProvider[]
  ): ReflectiveInjector;
  abstract resolveAndInstantiate(provider: Provider): any;
  abstract instantiateResolved(provider: ResolvedReflectiveProvider): any;
  abstract get(token: any, notFoundValue?: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L58-L270)

## usageNotes

### Example

The following example creates an `Injector` configured to create `Engine` and `Car`.

```typescript
## Injectable()

class Engine {
}


class Car {
constructor(public engine:Engine) {}
}

var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
var car = injector.get(Car);
expect(car instanceof Car).toBe(true);
expect(car.engine instanceof Engine).toBe(true);
```

Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
resolve all of the object's dependencies automatically.

## deprecated

from v5 - slow and brings in a lot of code, Use `Injector.create` instead.

## publicApi

## Methods

### resolve

#### description (#resolve-description)

Turns an array of provider definitions into an array of resolved providers.

A resolution is a process of flattening multiple nested arrays and converting individual
providers into an array of `ResolvedReflectiveProvider`s.

```ts
static resolve(providers: Provider[]): ResolvedReflectiveProvider[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L92-L94)

#### usageNotes (#resolve-usage-notes)

### Example

```typescript
#### Injectable() (#resolve-injectable())

class Engine {
}


class Car {
constructor(public engine:Engine) {}
}

var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);

expect(providers.length).toEqual(2);

expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
expect(providers[0].key.displayName).toBe("Car");
expect(providers[0].dependencies.length).toEqual(1);
expect(providers[0].factory).toBeDefined();

expect(providers[1].key.displayName).toBe("Engine");
});
```

#### Parameters (#resolve-parameters)

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| providers | `Provider[]` |             |

### resolveAndCreate

#### description (#resolveAndCreate-description)

Resolves an array of providers and creates an injector from those providers.

The passed-in providers can be an array of `Type`, `Provider`,
or a recursive array of more providers.

```ts
static resolveAndCreate(providers: Provider[], parent?: Injector): ReflectiveInjector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L119-L122)

#### usageNotes (#resolveAndCreate-usage-notes)

### Example

```typescript
#### Injectable() (#resolveAndCreate-injectable())

class Engine {
}


class Car {
constructor(public engine:Engine) {}
}

var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
expect(injector.get(Car) instanceof Car).toBe(true);
```

#### Parameters (#resolveAndCreate-parameters)

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| providers | `Provider[]` |             |
| parent    | `Injector`   |             |

### fromResolvedProviders

#### description (#fromResolvedProviders-description)

Creates an injector from previously resolved providers.

This API is the recommended way to construct injectors in performance-sensitive parts.

```ts
static fromResolvedProviders(providers: ResolvedReflectiveProvider[], parent?: Injector):   ReflectiveInjector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L147-L150)

#### usageNotes (#fromResolvedProviders-usage-notes)

### Example

```typescript
#### Injectable() (#fromResolvedProviders-injectable())

class Engine {
}


class Car {
constructor(public engine:Engine) {}
}

var providers = ReflectiveInjector.resolve([Car, Engine]);
var injector = ReflectiveInjector.fromResolvedProviders(providers);
expect(injector.get(Car) instanceof Car).toBe(true);
```

#### Parameters (#fromResolvedProviders-parameters)

| Name      | Type                           | Description |
| --------- | ------------------------------ | ----------- |
| providers | `ResolvedReflectiveProvider[]` |             |
| parent    | `Injector`                     |             |

### resolveAndCreateChild

#### description (#resolveAndCreateChild-description)

Resolves an array of providers and creates a child injector from those providers.

<!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
-->

The passed-in providers can be an array of `Type`, `Provider`,
or a recursive array of more providers.

```ts
abstract resolveAndCreateChild(providers: Provider[]): ReflectiveInjector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L185-L185)

#### usageNotes (#resolveAndCreateChild-usage-notes)

### Example

```typescript
class ParentProvider {}
class ChildProvider {}

var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
var child = parent.resolveAndCreateChild([ChildProvider]);

expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
```

#### Parameters (#resolveAndCreateChild-parameters)

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| providers | `Provider[]` |             |

### createChildFromResolved

#### description (#createChildFromResolved-description)

Creates a child injector from previously resolved providers.

<!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
-->

This API is the recommended way to construct injectors in performance-sensitive parts.

```ts
abstract createChildFromResolved(providers: ResolvedReflectiveProvider[]): ReflectiveInjector;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L213-L213)

#### usageNotes (#createChildFromResolved-usage-notes)

### Example

```typescript
class ParentProvider {}
class ChildProvider {}

var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
var childProviders = ReflectiveInjector.resolve([ChildProvider]);

var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
var child = parent.createChildFromResolved(childProviders);

expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
```

#### Parameters (#createChildFromResolved-parameters)

| Name      | Type                           | Description |
| --------- | ------------------------------ | ----------- |
| providers | `ResolvedReflectiveProvider[]` |             |

### resolveAndInstantiate

#### description (#resolveAndInstantiate-description)

Resolves a provider and instantiates an object in the context of the injector.

The created object does not get cached by the injector.

```ts
abstract resolveAndInstantiate(provider: Provider): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L240-L240)

#### usageNotes (#resolveAndInstantiate-usage-notes)

### Example

```typescript
#### Injectable() (#resolveAndInstantiate-injectable())

class Engine {
}


class Car {
constructor(public engine:Engine) {}
}

var injector = ReflectiveInjector.resolveAndCreate([Engine]);

var car = injector.resolveAndInstantiate(Car);
expect(car.engine).toBe(injector.get(Engine));
expect(car).not.toBe(injector.resolveAndInstantiate(Car));
```

#### Parameters (#resolveAndInstantiate-parameters)

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| provider | `Provider` |             |

### instantiateResolved

#### description (#instantiateResolved-description)

Instantiates an object using a resolved provider in the context of the injector.

The created object does not get cached by the injector.

```ts
abstract instantiateResolved(provider: ResolvedReflectiveProvider): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L267-L267)

#### usageNotes (#instantiateResolved-usage-notes)

### Example

```typescript
#### Injectable() (#instantiateResolved-injectable())

class Engine {
}


class Car {
constructor(public engine:Engine) {}
}

var injector = ReflectiveInjector.resolveAndCreate([Engine]);
var carProvider = ReflectiveInjector.resolve([Car])[0];
var car = injector.instantiateResolved(carProvider);
expect(car.engine).toBe(injector.get(Engine));
expect(car).not.toBe(injector.instantiateResolved(carProvider));
```

#### Parameters (#instantiateResolved-parameters)

| Name     | Type                         | Description |
| -------- | ---------------------------- | ----------- |
| provider | `ResolvedReflectiveProvider` |             |

### get

```ts
abstract get(token: any, notFoundValue?: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_injector.ts#L269-L269)

#### Parameters (#get-parameters)

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| token         | `any` |             |
| notFoundValue | `any` |             |
