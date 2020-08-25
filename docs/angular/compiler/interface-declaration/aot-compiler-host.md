---
kind: InterfaceDeclaration
name: AotCompilerHost
module: compiler
---

# AotCompilerHost

## description

The host of the AotCompiler disconnects the implementation from TypeScript / other language
services and from underlying file systems.

```ts
interface AotCompilerHost {
  // inherited from StaticSymbolResolverHost
  // inherited from AotSummaryResolverHost
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler_host.ts#L16-L33)
