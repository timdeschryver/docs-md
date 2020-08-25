---
kind: ClassDeclaration
name: UrlHandlingStrategy
module: router
---

# UrlHandlingStrategy

## description

Provides a way to migrate AngularJS applications to Angular.

```ts
class UrlHandlingStrategy {
  abstract shouldProcessUrl(url: UrlTree): boolean;
  abstract extract(url: UrlTree): UrlTree;
  abstract merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_handling_strategy.ts#L18-L39)

## publicApi

## Methods

### shouldProcessUrl

#### description (#shouldProcessUrl-description)

Tells the router if this URL should be processed.

When it returns true, the router will execute the regular navigation.
When it returns false, the router will set the router state to an empty state.
As a result, all the active components will be destroyed.

```ts
abstract shouldProcessUrl(url: UrlTree): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_handling_strategy.ts#L27-L27)

#### Parameters (#shouldProcessUrl-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| url  | `UrlTree` |             |

### extract

#### description (#extract-description)

Extracts the part of the URL that should be handled by the router.
The rest of the URL will remain untouched.

```ts
abstract extract(url: UrlTree): UrlTree;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_handling_strategy.ts#L33-L33)

#### Parameters (#extract-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| url  | `UrlTree` |             |

### merge

#### description (#merge-description)

Merges the URL fragment with the rest of the URL.

```ts
abstract merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_handling_strategy.ts#L38-L38)

#### Parameters (#merge-parameters)

| Name       | Type      | Description |
| ---------- | --------- | ----------- |
| newUrlPart | `UrlTree` |             |
| rawUrl     | `UrlTree` |             |
