---
kind: ClassDeclaration
name: LocationStrategy
module: common
---

# LocationStrategy

## description

Enables the `Location` service to read route state from the browser's URL.
Angular provides two strategies:
`HashLocationStrategy` and `PathLocationStrategy`.

Applications should use the `Router` or `Location` services to
interact with application route state.

For instance, `HashLocationStrategy` produces URLs like
<code class="no-auto-link">http://example.com#/foo</code>,
and `PathLocationStrategy` produces
<code class="no-auto-link">http://example.com/foo</code> as an equivalent URL.

See these two classes for more.

```ts
class LocationStrategy {
  abstract path(includeHash?: boolean): string;
  abstract prepareExternalUrl(internal: string): string;
  abstract pushState(
    state: any,
    title: string,
    url: string,
    queryParams: string
  ): void;
  abstract replaceState(
    state: any,
    title: string,
    url: string,
    queryParams: string
  ): void;
  abstract forward(): void;
  abstract back(): void;
  abstract onPopState(fn: LocationChangeListener): void;
  abstract getBaseHref(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L31-L41)

## publicApi

## Methods

### path

```ts
abstract path(includeHash?: boolean): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L33-L33)

#### Parameters (#path-parameters)

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| includeHash | `boolean` |             |

### prepareExternalUrl

```ts
abstract prepareExternalUrl(internal: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L34-L34)

#### Parameters (#prepareExternalUrl-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| internal | `string` |             |

### pushState

```ts
abstract pushState(state: any, title: string, url: string, queryParams: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L35-L35)

#### Parameters (#pushState-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| state       | `any`    |             |
| title       | `string` |             |
| url         | `string` |             |
| queryParams | `string` |             |

### replaceState

```ts
abstract replaceState(state: any, title: string, url: string, queryParams: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L36-L36)

#### Parameters (#replaceState-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| state       | `any`    |             |
| title       | `string` |             |
| url         | `string` |             |
| queryParams | `string` |             |

### forward

```ts
abstract forward(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L37-L37)

### back

```ts
abstract back(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L38-L38)

### onPopState

```ts
abstract onPopState(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L39-L39)

#### Parameters (#onPopState-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### getBaseHref

```ts
abstract getBaseHref(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L40-L40)
