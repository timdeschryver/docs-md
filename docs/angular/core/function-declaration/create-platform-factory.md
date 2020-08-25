---
kind: FunctionDeclaration
name: createPlatformFactory
module: core
---

# createPlatformFactory

## description

Creates a factory for a platform. Can be used to provide or override `Providers` specific to
your applciation's runtime needs, such as `PLATFORM_INITIALIZER` and `PLATFORM_ID`.

```ts
function createPlatformFactory(
  parentPlatformFactory:
    | ((extraProviders?: StaticProvider[]) => PlatformRef)
    | null,
  name: string,
  providers: StaticProvider[] = []
): (extraProviders?: StaticProvider[]) => PlatformRef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L166-L188)

## Parameters

| Name                  | Type                                                 | Description                                                               |
| --------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| parentPlatformFactory | `(extraProviders?: StaticProvider[]) => PlatformRef` | Another platform factory to modify. Allows you to compose factories       |
| name                  | `string`                                             | Identifies the new platform factory.                                      |
| providers             | `StaticProvider[]`                                   | A set of dependency providers for platforms created with the new factory. |

## publicApi
