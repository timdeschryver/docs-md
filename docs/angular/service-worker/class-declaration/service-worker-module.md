---
kind: ClassDeclaration
name: ServiceWorkerModule
module: service-worker
---

# ServiceWorkerModule

```ts
class ServiceWorkerModule {
  static register(
    script: string,
    opts: SwRegistrationOptions = {}
  ): ModuleWithProviders<ServiceWorkerModule>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/module.ts#L157-L188)

## publicApi

## Methods

### register

#### description (#register-description)

Register the given Angular Service Worker script.

If `enabled` is set to `false` in the given options, the module will behave as if service
workers are not supported by the browser, and the service worker will not be registered.

```ts
static register(script: string, opts: SwRegistrationOptions = {}):   ModuleWithProviders<ServiceWorkerModule>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/module.ts#L167-L187)

#### Parameters (#register-parameters)

| Name   | Type                    | Description |
| ------ | ----------------------- | ----------- |
| script | `string`                |             |
| opts   | `SwRegistrationOptions` |             |
