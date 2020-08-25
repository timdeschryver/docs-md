---
kind: ClassDeclaration
name: CommonModule
module: common
---

# CommonModule

## description

Exports all the basic Angular directives and pipes,
such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
Re-exported by `BrowserModule`, which is included automatically in the root
`AppModule` when you create a new app with the CLI `new` command.

- The `providers` options configure the NgModule's injector to provide
  localization dependencies to members.
- The `exports` options make the declared directives and pipes available for import
  by other NgModules.

```ts
class CommonModule {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/common_module.ts#L30-L38)

## publicApi
