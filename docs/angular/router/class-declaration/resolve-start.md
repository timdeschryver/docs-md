---
kind: ClassDeclaration
name: ResolveStart
module: router
---

# ResolveStart

## description

An event triggered at the the start of the Resolve phase of routing.

Runs in the "resolve" phase whether or not there is anything to resolve.
In future, may change to only run when there are things to be resolved.

```ts
class ResolveStart extends RouterEvent {
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L278-L295)

## see

`ResolveEnd`

## publicApi

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L291-L294)
