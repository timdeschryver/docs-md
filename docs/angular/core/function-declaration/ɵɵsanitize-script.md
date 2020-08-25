---
kind: FunctionDeclaration
name: ɵɵsanitizeScript
module: core
---

# ɵɵsanitizeScript

## description

A `script` sanitizer which only lets trusted javascript through.

This passes only `script`s marked trusted by calling {@link
bypassSanitizationTrustScript}.

```ts
function ɵɵsanitizeScript(unsafeScript: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitization.ts#L131-L140)

## Parameters

| Name         | Type  | Description                                  |
| ------------ | ----- | -------------------------------------------- |
| unsafeScript | `any` | untrusted `script`, typically from the user. |

## returns

`url` string which is safe to bind to the `<script>` element such as `<img src>`,
because only trusted `scripts` have been allowed to pass.

## publicApi
