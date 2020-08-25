---
kind: ClassDeclaration
name: Location
module: common
---

# Location

## description

A service that applications can use to interact with a browser's URL.

Depending on the `LocationStrategy` used, `Location` persists
to the URL's path or the URL's hash segment.

```ts
class Location {
  _subject: EventEmitter<any> = new EventEmitter();
  _baseHref: string;
  _platformStrategy: LocationStrategy;
  _platformLocation: PlatformLocation;
  _urlChangeListeners: ((url: string, state: unknown) => void)[] = [];
  _urlChangeSubscription?: SubscriptionLike;
  public static normalizeQueryParams: (
    params: string
  ) => string = normalizeQueryParams;
  public static joinWithSlash: (
    start: string,
    end: string
  ) => string = joinWithSlash;
  public static stripTrailingSlash: (
    url: string
  ) => string = stripTrailingSlash;

  path(includeHash: boolean = false): string;
  getState(): unknown;
  isCurrentPathEqualTo(path: string, query: string = ""): boolean;
  normalize(url: string): string;
  prepareExternalUrl(url: string): string;
  go(path: string, query: string = "", state: any = null): void;
  replaceState(path: string, query: string = "", state: any = null): void;
  forward(): void;
  back(): void;
  onUrlChange(fn: (url: string, state: unknown) => void);
  _notifyUrlChangeListeners(url: string = "", state: unknown);
  subscribe(
    onNext: (value: PopStateEvent) => void,
    onThrow?: ((exception: any) => void) | null,
    onReturn?: (() => void) | null
  ): SubscriptionLike;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L51-L256)

## usageNotes

It's better to use the `Router#navigate` service to trigger route changes. Use
`Location` only if you need to interact with or create normalized URLs outside of
routing.

`Location` is responsible for normalizing the URL against the application's base href.
A normalized URL is absolute from the URL host, includes the application's base href, and has no
trailing slash:

- `/my/app/user/123` is normalized
- `my/app/user/123` **is not** normalized
- `/my/app/user/123/` **is not** normalized

### Example

<code-example path='common/location/ts/path_location_component.ts'
region='LocationComponent'></code-example>

## publicApi

## Properties

| Name                    | Type                                        | Description                                                 |
| ----------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| \_subject               | `any`                                       |                                                             |
| \_baseHref              | `string`                                    |                                                             |
| \_platformStrategy      | `LocationStrategy`                          |                                                             |
| \_platformLocation      | `PlatformLocation`                          |                                                             |
| \_urlChangeListeners    | `((url: string, state: unknown) => void)[]` |                                                             |
| \_urlChangeSubscription | `any`                                       |                                                             |
| normalizeQueryParams    | `(params: string) => string`                | Normalizes URL parameters by prepending with `?` if needed. |
| joinWithSlash           | `(start: string, end: string) => string`    | Joins two parts of a URL with a slash if needed.            |
| stripTrailingSlash      | `(url: string) => string`                   | Removes a trailing slash from a URL string if needed.       |

Looks for the first occurrence of either `#`, `?`, or the end of the
line as `/` characters and removes the trailing slash if one exists. |

## Methods

### path

#### description (#path-description)

Normalizes the URL path for this location.

```ts
path(includeHash: boolean = false): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L94-L96)

#### Parameters (#path-parameters)

| Name        | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| includeHash | `boolean` | True to include an anchor fragment in the path. |

#### returns (#path-returns)

The normalized URL path.

### getState

#### description (#getState-description)

Reports the current state of the location history.

```ts
getState(): unknown;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L102-L104)

#### returns (#getState-returns)

The current value of the `history.state` object.

### isCurrentPathEqualTo

#### description (#isCurrentPathEqualTo-description)

Normalizes the given path and compares to the current normalized path.

```ts
isCurrentPathEqualTo(path: string, query: string = ''): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L115-L117)

#### Parameters (#isCurrentPathEqualTo-parameters)

| Name  | Type     | Description         |
| ----- | -------- | ------------------- |
| path  | `string` | The given URL path. |
| query | `string` | Query parameters.   |

#### returns (#isCurrentPathEqualTo-returns)

True if the given URL path is equal to the current normalized path, false
otherwise.

### normalize

#### description (#normalize-description)

Normalizes a URL path by stripping any trailing slashes.

```ts
normalize(url: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L126-L128)

#### Parameters (#normalize-parameters)

| Name | Type     | Description                |
| ---- | -------- | -------------------------- |
| url  | `string` | String representing a URL. |

#### returns (#normalize-returns)

The normalized URL string.

### prepareExternalUrl

#### description (#prepareExternalUrl-description)

Normalizes an external URL path.
If the given URL doesn't begin with a leading slash (`'/'`), adds one
before normalizing. Adds a hash if `HashLocationStrategy` is
in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.

```ts
prepareExternalUrl(url: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L140-L145)

#### Parameters (#prepareExternalUrl-parameters)

| Name | Type     | Description                |
| ---- | -------- | -------------------------- |
| url  | `string` | String representing a URL. |

#### returns (#prepareExternalUrl-returns)

A normalized platform-specific URL.

### go

#### description (#go-description)

Changes the browser's URL to a normalized version of a given URL, and pushes a
new item onto the platform's history.

```ts
go(path: string, query: string = '', state: any = null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L157-L161)

#### Parameters (#go-parameters)

| Name  | Type     | Description             |
| ----- | -------- | ----------------------- |
| path  | `string` | URL path to normalize.  |
| query | `string` | Query parameters.       |
| state | `any`    | Location history state. |

### replaceState

#### description (#replaceState-description)

Changes the browser's URL to a normalized version of the given URL, and replaces
the top item on the platform's history stack.

```ts
replaceState(path: string, query: string = '', state: any = null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L171-L175)

#### Parameters (#replaceState-parameters)

| Name  | Type     | Description             |
| ----- | -------- | ----------------------- |
| path  | `string` | URL path to normalize.  |
| query | `string` | Query parameters.       |
| state | `any`    | Location history state. |

### forward

#### description (#forward-description)

Navigates forward in the platform's history.

```ts
forward(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L180-L182)

### back

#### description (#back-description)

Navigates back in the platform's history.

```ts
back(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L187-L189)

### onUrlChange

#### description (#onUrlChange-description)

Registers a URL change listener. Use to catch updates performed by the Angular
framework that are not detectible through "popstate" or "hashchange" events.

```ts
onUrlChange(fn: (url: string, state: unknown) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L197-L205)

#### Parameters (#onUrlChange-parameters)

| Name | Type                                    | Description                                                                 |
| ---- | --------------------------------------- | --------------------------------------------------------------------------- |
| fn   | `(url: string, state: unknown) => void` | The change handler function, which take a URL and a location history state. |

### \_notifyUrlChangeListeners

```ts
_notifyUrlChangeListeners(url: string = '', state: unknown);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L208-L210)

#### Parameters (#\_notifyUrlChangeListeners-parameters)

| Name  | Type      | Description |
| ----- | --------- | ----------- |
| url   | `string`  |             |
| state | `unknown` |             |

### subscribe

#### description (#subscribe-description)

Subscribes to the platform's `popState` events.

```ts
subscribe(   onNext: (value: PopStateEvent) => void, onThrow?: ((exception: any) => void)|null,   onReturn?: (() => void)|null): SubscriptionLike;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/location.ts#L220-L224)

#### Parameters (#subscribe-parameters)

| Name      | Type                             | Description                                             |
| --------- | -------------------------------- | ------------------------------------------------------- |
| value     | ``                               | Event that is triggered when the state history changes. |
| exception | ``                               | The exception to throw.                                 |
| onNext    | `(value: PopStateEvent) => void` |                                                         |
| onThrow   | `(exception: any) => void`       |                                                         |
| onReturn  | `() => void`                     |                                                         |

#### returns (#subscribe-returns)

Subscribed events.
