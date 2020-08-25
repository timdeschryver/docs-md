---
kind: InterfaceDeclaration
name: UrlResolver
module: compiler
---

# UrlResolver

## description

Used by the {@link Compiler} when resolving HTML and CSS template URLs.

This class can be overridden by the application developer to create custom behavior.

See {@link Compiler}

## Example

{@example compiler/ts/url_resolver/url_resolver.ts region='url_resolver'}

```ts
interface UrlResolver {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/url_resolver.ts#L36-L38)

## security

When compiling templates at runtime, you must
ensure that the entire template comes from a trusted source.
Attacker-controlled data introduced by a template could expose your
application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).
