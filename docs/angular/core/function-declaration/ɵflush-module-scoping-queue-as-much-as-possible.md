---
kind: FunctionDeclaration
name: ɵflushModuleScopingQueueAsMuchAsPossible
module: core
---

# ɵflushModuleScopingQueueAsMuchAsPossible

## description

Loops over queued module definitions, if a given module definition has all of its
declarations resolved, it dequeues that module definition and sets the scope on
its declarations.

```ts
function flushModuleScopingQueueAsMuchAsPossible();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/module.ts#L49-L66)
