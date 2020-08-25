---
kind: ClassDeclaration
name: NavigationCancel
module: router
---

# NavigationCancel

## description

An event triggered when a navigation is canceled, directly or indirectly.
This can happen when a route guard
returns `false` or initiates a redirect by returning a `UrlTree`.

```ts
class NavigationCancel extends RouterEvent {
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L146-L161)

## see

`NavigationStart`
`NavigationEnd`
`NavigationError`

## publicApi

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L158-L160)
