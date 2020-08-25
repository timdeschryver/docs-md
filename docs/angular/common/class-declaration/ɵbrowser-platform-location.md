---
kind: ClassDeclaration
name: ɵBrowserPlatformLocation
module: common
---

# ɵBrowserPlatformLocation

## description

`PlatformLocation` encapsulates all of the direct calls to platform APIs.
This class should not be used directly by an application developer. Instead, use
{@link Location}.

```ts
class BrowserPlatformLocation extends PlatformLocation {
  public readonly location!: Location;

  _init();
  getBaseHrefFromDOM(): string;
  onPopState(fn: LocationChangeListener): void;
  onHashChange(fn: LocationChangeListener): void;
  pushState(state: any, title: string, url: string): void;
  replaceState(state: any, title: string, url: string): void;
  forward(): void;
  back(): void;
  getState(): unknown;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L100-L185)

## Properties

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| location | `Location` |             |

## Methods

### \_init

```ts
_init();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L116-L119)

### getBaseHrefFromDOM

```ts
getBaseHrefFromDOM(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L121-L123)

### onPopState

```ts
onPopState(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L125-L127)

#### Parameters (#onPopState-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### onHashChange

```ts
onHashChange(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L129-L131)

#### Parameters (#onHashChange-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### pushState

```ts
pushState(state: any, title: string, url: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L158-L164)

#### Parameters (#pushState-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| state | `any`    |             |
| title | `string` |             |
| url   | `string` |             |

### replaceState

```ts
replaceState(state: any, title: string, url: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L166-L172)

#### Parameters (#replaceState-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| state | `any`    |             |
| title | `string` |             |
| url   | `string` |             |

### forward

```ts
forward(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L174-L176)

### back

```ts
back(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L178-L180)

### getState

```ts
getState(): unknown;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L182-L184)
