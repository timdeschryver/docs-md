---
kind: ClassDeclaration
name: PlatformLocation
module: common
---

# PlatformLocation

## description

This class should not be used directly by an application developer. Instead, use
{@link Location}.

`PlatformLocation` encapsulates all calls to DOM APIs, which allows the Router to be
platform-agnostic.
This means that we can have different implementation of `PlatformLocation` for the different
platforms that Angular supports. For example, `@angular/platform-browser` provides an
implementation specific to the browser environment, while `@angular/platform-server` provides
one suitable for use with server-side rendering.

The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
when they need to interact with the DOM APIs like pushState, popState, etc.

{@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
by the {@link Router} in order to navigate between routes. Since all interactions between {@link
Router} /
{@link Location} / {@link LocationStrategy} and DOM APIs flow through the `PlatformLocation`
class, they are all platform-agnostic.

```ts
class PlatformLocation {
  abstract getBaseHrefFromDOM(): string;
  abstract getState(): unknown;
  abstract onPopState(fn: LocationChangeListener): void;
  abstract onHashChange(fn: LocationChangeListener): void;
  abstract replaceState(state: any, title: string, url: string): void;
  abstract pushState(state: any, title: string, url: string): void;
  abstract forward(): void;
  abstract back(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L35-L61)

## publicApi

## Methods

### getBaseHrefFromDOM

```ts
abstract getBaseHrefFromDOM(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L41-L41)

### getState

```ts
abstract getState(): unknown;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L42-L42)

### onPopState

```ts
abstract onPopState(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L43-L43)

#### Parameters (#onPopState-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### onHashChange

```ts
abstract onHashChange(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L44-L44)

#### Parameters (#onHashChange-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### replaceState

```ts
abstract replaceState(state: any, title: string, url: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L54-L54)

#### Parameters (#replaceState-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| state | `any`    |             |
| title | `string` |             |
| url   | `string` |             |

### pushState

```ts
abstract pushState(state: any, title: string, url: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L56-L56)

#### Parameters (#pushState-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| state | `any`    |             |
| title | `string` |             |
| url   | `string` |             |

### forward

```ts
abstract forward(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L58-L58)

### back

```ts
abstract back(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L60-L60)
