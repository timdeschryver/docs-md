---
kind: InterfaceDeclaration
name: LanguageServiceHost
module: language-service
---

# LanguageServiceHost

## description

The host for a `LanguageService`. This provides all the `LanguageService` requires to respond
to the `LanguageService` requests.

This interface describes the requirements of the `LanguageService` on its host.

The host interface is host language agnostic.

Adding optional member to this interface or any interface that is described as a
`LanguageServiceHost` interface is not considered a breaking change as defined by SemVer.
Removing a method or changing a member from required to optional will also not be considered a
breaking change.

If a member is deprecated it will be changed to optional in a minor release before it is
removed in a major release.

Adding a required member or changing a method's parameters, is considered a breaking change and
will only be done when breaking changes are allowed. When possible, a new optional member will
be added and the old member will be deprecated. The new member will then be made required in
and the old member will be removed only when breaking changes are allowed.

While an interface is marked as experimental breaking-changes will be allowed between minor
releases. After an interface is marked as stable breaking-changes will only be allowed between
major releases. No breaking changes are allowed between patch releases.

```ts
interface LanguageServiceHost {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/types.ts#L140-L166)

## publicApi
