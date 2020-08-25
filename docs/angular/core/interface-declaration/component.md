---
kind: InterfaceDeclaration
name: Component
module: core
---

# Component

## description

Supplies configuration metadata for an Angular component.

```ts
interface Component {
  changeDetection?: ChangeDetectionStrategy;
  viewProviders?: Provider[];
  moduleId?: string;
  templateUrl?: string;
  template?: string;
  styleUrls?: string[];
  styles?: string[];
  animations?: any[];
  encapsulation?: ViewEncapsulation;
  interpolation?: [string, string];
  entryComponents?: Array<Type<any> | any[]>;
  preserveWhitespaces?: boolean;

  // inherited from Directive
  selector?: string;
  inputs?: string[];
  outputs?: string[];
  providers?: Provider[];
  exportAs?: string;
  queries?: { [key: string]: any };
  host?: { [key: string]: string };
  jit?: true;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L457-L557)

## publicApi

## Properties

| Name            | Type                      | Description                                              |
| --------------- | ------------------------- | -------------------------------------------------------- |
| changeDetection | `ChangeDetectionStrategy` | The change-detection strategy to use for this component. |

When a component is instantiated, Angular creates a change detector,
which is responsible for propagating the component's bindings.
The strategy is one of:

- `ChangeDetectionStrategy#OnPush` sets the strategy to `CheckOnce` (on demand).
- `ChangeDetectionStrategy#Default` sets the strategy to `CheckAlways`. |
  | viewProviders | `Provider[]` | Defines the set of injectable objects that are visible to its view DOM children.
  See [example](#injecting-a-class-with-a-view-provider). |
  | moduleId | `string` | The module ID of the module that contains the component.
  The component must be able to resolve relative URLs for templates and styles.
  SystemJS exposes the `__moduleName` variable within each module.
  In CommonJS, this can be set to `module.id`. |
  | templateUrl | `string` | The relative path or absolute URL of a template file for an Angular component.
  If provided, do not supply an inline template using `template`. |
  | template | `string` | An inline template for an Angular component. If provided,
  do not supply a template file using `templateUrl`. |
  | styleUrls | `string[]` | One or more relative paths or absolute URLs for files containing CSS stylesheets to use
  in this component. |
  | styles | `string[]` | One or more inline CSS stylesheets to use
  in this component. |
  | animations | `any[]` | One or more animation `trigger()` calls, containing
  `state()` and `transition()` definitions.
  See the [Animations guide](/guide/animations) and animations API documentation. |
  | encapsulation | `ViewEncapsulation` | An encapsulation policy for the template and CSS styles. One of:
- `ViewEncapsulation.Native`: Deprecated. Use `ViewEncapsulation.ShadowDom` instead.
- `ViewEncapsulation.Emulated`: Use shimmed CSS that
  emulates the native behavior.
- `ViewEncapsulation.None`: Use global CSS without any
  encapsulation.
- `ViewEncapsulation.ShadowDom`: Use Shadow DOM v1 to encapsulate styles.

If not supplied, the value is taken from `CompilerOptions`. The default compiler option is
`ViewEncapsulation.Emulated`.

If the policy is set to `ViewEncapsulation.Emulated` and the component has no `styles`
or `styleUrls` specified, the policy is automatically switched to `ViewEncapsulation.None`. |
| interpolation | `[string, string]` | Overrides the default encapsulation start and end delimiters (`{{` and `}}`) |
| entryComponents | `(any[] | Type<any>)[]` | A set of components that should be compiled along with
this component. For each component listed here,
Angular creates a {@link ComponentFactory} and stores it in the
{@link ComponentFactoryResolver}. |
| preserveWhitespaces | `boolean` | True to preserve or false to remove potentially superfluous whitespace characters
from the compiled template. Whitespace characters are those matching the `\s`
character class in JavaScript regular expressions. Default is false, unless
overridden in compiler options. |
