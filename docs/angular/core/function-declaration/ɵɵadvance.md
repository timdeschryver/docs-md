---
kind: FunctionDeclaration
name: ɵɵadvance
module: core
---

# ɵɵadvance

## description

Advances to an element for later binding instructions.

Used in conjunction with instructions like {@link property} to act on elements with specified
indices, for example those created with {@link element} or {@link elementStart}.

```ts
(rf: RenderFlags, ctx: any) => {
  if (rf & 1) {
    text(0, "Hello");
    text(1, "Goodbye");
    element(2, "div");
  }
  if (rf & 2) {
    advance(2); // Advance twice to the <div>.
    property("title", "test");
  }
};
```

```ts
function ɵɵadvance(delta: number): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/advance.ts#L37-L40)

## Parameters

| Name  | Type     | Description                                |
| ----- | -------- | ------------------------------------------ |
| delta | `number` | Number of elements to advance forwards by. |

## codeGenApi
