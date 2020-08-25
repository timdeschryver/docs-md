---
kind: ClassDeclaration
name: PathLocationStrategy
module: common
---

# PathLocationStrategy

## description

A {@link LocationStrategy} used to configure the {@link Location} service to
represent its state in the
[path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
browser's URL.

If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
or add a base element to the document. This URL prefix that will be preserved
when generating and recognizing URLs.

For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
`location.go('/foo')`, the browser's URL will become
`example.com/my/app/foo`.

Similarly, if you add `<base href='/my/app'/>` to the document and call
`location.go('/foo')`, the browser's URL will become
`example.com/my/app/foo`.

```ts
class PathLocationStrategy extends LocationStrategy {
  onPopState(fn: LocationChangeListener): void;
  getBaseHref(): string;
  prepareExternalUrl(internal: string): string;
  path(includeHash: boolean = false): string;
  pushState(state: any, title: string, url: string, queryParams: string);
  replaceState(state: any, title: string, url: string, queryParams: string);
  forward(): void;
  back(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L103-L161)

## usageNotes

### Example

{@example common/location/ts/path_location_component.ts region='LocationComponent'}

## publicApi

## Methods

### onPopState

```ts
onPopState(fn: LocationChangeListener): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L124-L127)

#### Parameters (#onPopState-parameters)

| Name | Type                     | Description |
| ---- | ------------------------ | ----------- |
| fn   | `LocationChangeListener` |             |

### getBaseHref

```ts
getBaseHref(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L129-L131)

### prepareExternalUrl

```ts
prepareExternalUrl(internal: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L133-L135)

#### Parameters (#prepareExternalUrl-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| internal | `string` |             |

### path

```ts
path(includeHash: boolean = false): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L137-L142)

#### Parameters (#path-parameters)

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| includeHash | `boolean` |             |

### pushState

```ts
pushState(state: any, title: string, url: string, queryParams: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L144-L147)

#### Parameters (#pushState-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| state       | `any`    |             |
| title       | `string` |             |
| url         | `string` |             |
| queryParams | `string` |             |

### replaceState

```ts
replaceState(state: any, title: string, url: string, queryParams: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L149-L152)

#### Parameters (#replaceState-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| state       | `any`    |             |
| title       | `string` |             |
| url         | `string` |             |
| queryParams | `string` |             |

### forward

```ts
forward(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L154-L156)

### back

```ts
back(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location_strategy.ts#L158-L160)
