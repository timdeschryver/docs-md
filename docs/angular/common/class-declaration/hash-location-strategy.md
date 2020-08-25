---
kind: ClassDeclaration
name: HashLocationStrategy
module: common
---

# HashLocationStrategy

## description

A {@link LocationStrategy} used to configure the {@link Location} service to
represent its state in the
[hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
of the browser's URL.

For instance, if you call `location.go('/foo')`, the browser's URL will become
`example.com#/foo`.

```ts
class HashLocationStrategy extends LocationStrategy {
  onPopState(fn: LocationChangeListener): void;
  getBaseHref(): string;
  path(includeHash: boolean = false): string;
  prepareExternalUrl(internal: string): string;
  pushState(state: any, title: string, path: string, queryParams: string);
  replaceState(state: any, title: string, path: string, queryParams: string);
  forward(): void;
  back(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L34-L92)

## usageNotes

### Example

{@example common/location/ts/hash_location_component.ts region='LocationComponent'}

## publicApi

## Methods

### onPopState

```ts
onPopState(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L46-L49)

#### Parameters (#onPopState-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### getBaseHref

```ts
getBaseHref(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L51-L53)

### path

```ts
path(includeHash: boolean = false): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L55-L62)

#### Parameters (#path-parameters)

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| includeHash | `boolean` |             |

### prepareExternalUrl

```ts
prepareExternalUrl(internal: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L64-L67)

#### Parameters (#prepareExternalUrl-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| internal | `string` |             |

### pushState

```ts
pushState(state: any, title: string, path: string, queryParams: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L69-L75)

#### Parameters (#pushState-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| state       | `any`    |             |
| title       | `string` |             |
| path        | `string` |             |
| queryParams | `string` |             |

### replaceState

```ts
replaceState(state: any, title: string, path: string, queryParams: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L77-L83)

#### Parameters (#replaceState-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| state       | `any`    |             |
| title       | `string` |             |
| path        | `string` |             |
| queryParams | `string` |             |

### forward

```ts
forward(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L85-L87)

### back

```ts
back(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/hash_location_strategy.ts#L89-L91)
