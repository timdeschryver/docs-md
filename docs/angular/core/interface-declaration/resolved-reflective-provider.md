---
kind: InterfaceDeclaration
name: ResolvedReflectiveProvider
module: core
---

# ResolvedReflectiveProvider

## description

An internal resolved representation of a `Provider` used by the `Injector`.

```ts
interface ResolvedReflectiveProvider {
  key: ReflectiveKey;
  resolvedFactories: ResolvedReflectiveFactory[];
  multiProvider: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/reflective_provider.ts#L57-L72)

## usageNotes

This is usually created automatically by `Injector.resolveAndCreate`.

It can be created manually, as follows:

### Example

```typescript
var resolvedProviders = Injector.resolve([
  { provide: "message", useValue: "Hello" },
]);
var injector = Injector.fromResolvedProviders(resolvedProviders);

expect(injector.get("message")).toEqual("Hello");
```

## publicApi

## Properties

| Name              | Type                          | Description                                                                      |
| ----------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| key               | `ReflectiveKey`               | A key, usually a `Type<any>`.                                                    |
| resolvedFactories | `ResolvedReflectiveFactory[]` | Factory function which can return an instance of an object represented by a key. |
| multiProvider     | `boolean`                     | Indicates if the provider is a multi-provider or a regular provider.             |
