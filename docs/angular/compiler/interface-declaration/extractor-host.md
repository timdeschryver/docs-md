---
kind: InterfaceDeclaration
name: ExtractorHost
module: compiler
---

# ExtractorHost

## description

The host of the Extractor disconnects the implementation from TypeScript / other language
services and from underlying file systems.

```ts
interface ExtractorHost {
  // inherited from StaticSymbolResolverHost
  // inherited from AotSummaryResolverHost
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/extractor.ts#L41-L51)
