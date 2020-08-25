---
kind: ClassDeclaration
name: ReactiveFormsModule
module: forms
---

# ReactiveFormsModule

## description

Exports the required infrastructure and directives for reactive forms,
making them available for import by NgModules that import this module.

```ts
class ReactiveFormsModule {
  static withConfig(opts: {
    /** @deprecated as of v6 */ warnOnNgModelWithFormControl:
      | "never"
      | "once"
      | "always";
  }): ModuleWithProviders<ReactiveFormsModule>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_providers.ts#L41-L65)

## see

[Forms Overview](guide/forms-overview)
[Reactive Forms Guide](guide/reactive-forms)

## publicApi

## Methods

### withConfig

#### description (#withConfig-description)

Provides options for configuring the reactive forms module.

```ts
static withConfig(opts: {  /** @deprecated as of v6 */ warnOnNgModelWithFormControl: 'never'|'once'|'always' }): ModuleWithProviders<ReactiveFormsModule>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_providers.ts#L55-L64)

#### Parameters (#withConfig-parameters)

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| opts | `{ warnOnNgModelWithFormControl: 'never' | 'once'      | 'always'; }` | An object of configuration options |
