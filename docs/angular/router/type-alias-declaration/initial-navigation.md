---
kind: TypeAliasDeclaration
name: InitialNavigation
module: router
---

# InitialNavigation

## description

Allowed values in an `ExtraOptions` object that configure
when the router performs the initial navigation operation.

- 'enabled' - The initial navigation starts before the root component is created.
  The bootstrap is blocked until the initial navigation is complete. This value is required
  for [server-side rendering](guide/universal) to work.
- 'disabled' - The initial navigation is not performed. The location listener is set up before
  the root component gets created. Use if there is a reason to have
  more control over when the router starts its initial navigation due to some complex
  initialization logic.

The following values have been [deprecated](guide/releases#deprecation-practices) since v4,
and should not be used for new applications.

- 'legacy_enabled'- (Default, for compatibility.) The initial navigation starts after the root
  component has been created. The bootstrap is not blocked until the initial navigation is
  complete.
- 'legacy_disabled'- The initial navigation is not performed. The location listener is set up
  after the root component gets created.
- `true` - same as 'legacy_enabled'.
- `false` - same as 'legacy_disabled'.

The 'legacy_enabled' and 'legacy_disabled' should not be used for new applications.

```ts
export type InitialNavigation =
  | true
  | false
  | "enabled"
  | "disabled"
  | "legacy_enabled"
  | "legacy_disabled";
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_module.ts#L250-L250)

## see

`forRoot()`

## publicApi
