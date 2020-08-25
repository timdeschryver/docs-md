---
kind: ClassDeclaration
name: PlatformRef
module: core
---

# PlatformRef

## description

The Angular platform is the entry point for Angular on a web page.
Each page has exactly one platform. Services (such as reflection) which are common
to every Angular application running on the page are bound in its scope.
A page's platform is initialized implicitly when a platform is created using a platform
factory such as `PlatformBrowser`, or explicitly by calling the `createPlatform()` function.

```ts
class PlatformRef {
  bootstrapModuleFactory<M>(
    moduleFactory: NgModuleFactory<M>,
    options?: BootstrapOptions
  ): Promise<NgModuleRef<M>>;
  bootstrapModule<M>(
    moduleType: Type<M>,
    compilerOptions:
      | (CompilerOptions & BootstrapOptions)
      | Array<CompilerOptions & BootstrapOptions> = []
  ): Promise<NgModuleRef<M>>;
  onDestroy(callback: () => void): void;
  destroy();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L277-L423)

## publicApi

## Methods

### bootstrapModuleFactory

#### description (#bootstrapModuleFactory-description)

Creates an instance of an `@NgModule` for the given platform for offline compilation.

```ts
bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>, options?: BootstrapOptions):   Promise<NgModuleRef<M>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L308-L348)

#### usageNotes (#bootstrapModuleFactory-usage-notes)

The following example creates the NgModule for a browser platform.

```typescript
my_module.ts:

#### NgModule({ (#bootstrapModuleFactory-ng-module({)

imports: [BrowserModule]
})
class MyModule {}

main.ts:
import {MyModuleNgFactory} from './my_module.ngfactory';
import {platformBrowser} from '@angular/platform-browser';

let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
```

#### Parameters (#bootstrapModuleFactory-parameters)

| Name          | Type                 | Description |
| ------------- | -------------------- | ----------- |
| moduleFactory | `NgModuleFactory<M>` |             |
| options       | `BootstrapOptions`   |             |

### bootstrapModule

#### description (#bootstrapModule-description)

Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.

```ts
bootstrapModule<M>(   moduleType: Type<M>,   compilerOptions: (CompilerOptions&BootstrapOptions)|   Array<CompilerOptions&BootstrapOptions> = []): Promise<NgModuleRef<M>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L366-L373)

#### usageNotes (#bootstrapModule-usage-notes)

### Simple Example

```typescript
#### NgModule({ (#bootstrapModule-ng-module({)

imports: [BrowserModule]
})
class MyModule {}

let moduleRef = platformBrowser().bootstrapModule(MyModule);
```

#### Parameters (#bootstrapModule-parameters)

| Name            | Type                                  | Description                             |
| --------------- | ------------------------------------- | --------------------------------------- |
| moduleType      | `Type<M>`                             |                                         |
| compilerOptions | `(CompilerOptions & BootstrapOptions) | (CompilerOptions & BootstrapOptions)[]` |  |

### onDestroy

#### description (#onDestroy-description)

Registers a listener to be called when the platform is destroyed.

```ts
onDestroy(callback: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L395-L397)

#### Parameters (#onDestroy-parameters)

| Name     | Type         | Description |
| -------- | ------------ | ----------- |
| callback | `() => void` |             |

### destroy

#### description (#destroy-description)

Destroys the current Angular platform and all Angular applications on the page.
Destroys all modules and listeners registered with the platform.

```ts
destroy();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L411-L418)
