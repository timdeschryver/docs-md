---
kind: TypeAliasDeclaration
name: MetaDefinition
module: platform-browser
---

# MetaDefinition

## description

Represents the attributes of an HTML `<meta>` element. The element itself is
represented by the internal `HTMLMetaElement`.

```ts
export type MetaDefinition = {
  charset?: string;
  content?: string;
  httpEquiv?: string;
  id?: string;
  itemprop?: string;
  name?: string;
  property?: string;
  scheme?: string;
  url?: string;
} & {
  // TODO(IgorMinar): this type looks wrong
  [prop: string]: string;
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L21-L34)

## see

[HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
`Meta`

## publicApi
