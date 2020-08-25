---
kind: EnumDeclaration
name: RendererStyleFlags2
module: core
---

# RendererStyleFlags2

## description

Flags for renderer-specific style modifiers.

```ts
export enum RendererStyleFlags2 {
  // TODO(misko): This needs to be refactored into a separate file so that it can be imported from
  // `node_manipulation.ts` Currently doing the import cause resolution order to change and fails
  // the tests. The work around is to have hard coded value in `node_manipulation.ts` for now.
  /**
   * Marks a style as important.
   */
  Important = 1 << 0,
  /**
   * Marks a style as using dash case naming (this-is-dash-case).
   */
  DashCase = 1 << 1,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L82-L94)

## publicApi
