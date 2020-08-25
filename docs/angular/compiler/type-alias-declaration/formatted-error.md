---
kind: TypeAliasDeclaration
name: FormattedError
module: compiler
---

# FormattedError

```ts
export type FormattedError = Error & {
  chain: FormattedMessageChain;
  position?: Position;
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/formatted_error.ts#L23-L26)
