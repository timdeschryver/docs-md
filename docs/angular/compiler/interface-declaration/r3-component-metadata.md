---
kind: InterfaceDeclaration
name: R3ComponentMetadata
module: compiler
---

# R3ComponentMetadata

## description

Information needed to compile a component for the render3 runtime.

```ts
interface R3ComponentMetadata {
  template: {
    /**
     * Parsed nodes of the template.
     */
    nodes: t.Node[];

    /**
     * Any ng-content selectors extracted from the template. Contains `null` when an ng-content
     * element without selector is present.
     */
    ngContentSelectors: string[];
  };
  pipes: Map<string, o.Expression>;
  directives: { selector: string; expression: o.Expression }[];
  wrapDirectivesAndPipesInClosure: boolean;
  styles: string[];
  encapsulation: ViewEncapsulation;
  animations: o.Expression | null;
  viewProviders: o.Expression | null;
  relativeContextFilePath: string;
  i18nUseExternalIds: boolean;
  interpolation: InterpolationConfig;
  changeDetection?: ChangeDetectionStrategy;

  // inherited from R3DirectiveMetadata
  name: string;
  type: R3Reference;
  internalType: o.Expression;
  typeArgumentCount: number;
  typeSourceSpan: ParseSourceSpan;
  deps: R3DependencyMetadata[] | "invalid" | null;
  selector: string | null;
  queries: R3QueryMetadata[];
  viewQueries: R3QueryMetadata[];
  host: R3HostMetadata;
  lifecycle: {
    /**
     * Whether the directive uses NgOnChanges.
     */
    usesOnChanges: boolean;
  };
  inputs: { [field: string]: string | [string, string] };
  outputs: { [field: string]: string };
  usesInheritance: boolean;
  fullInheritance: boolean;
  exportAs: string[] | null;
  providers: o.Expression | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/api.ts#L123-L207)

## Properties

| Name                            | Type                                                 | Description                                                                                     |
| ------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| template                        | `{ nodes: t.Node[]; ngContentSelectors: string[]; }` | Information about the component's template.                                                     |
| pipes                           | `any`                                                | A map of pipe names to an expression referencing the pipe type which are in the scope of the    |
| compilation.                    |
| directives                      | `{ selector: string; expression: o.Expression; }[]`  | A list of directive selectors and an expression referencing the directive type which are in the |
| scope of the compilation.       |
| wrapDirectivesAndPipesInClosure | `boolean`                                            | Whether to wrap the 'directives' and/or `pipes` array, if one is generated, in a closure.       |

This is done when the directives or pipes contain forward references. |
| styles | `string[]` | A collection of styling data that will be applied and scoped to the component. |
| encapsulation | `ViewEncapsulation` | An encapsulation policy for the template and CSS styles. One of:

- `ViewEncapsulation.Native`: Use shadow roots. This works only if natively available on the
  platform (note that this is marked the as the "deprecated shadow DOM" as of Angular v6.1.
- `ViewEncapsulation.Emulated`: Use shimmed CSS that emulates the native behavior.
- `ViewEncapsulation.None`: Use global CSS without any encapsulation.
- `ViewEncapsulation.ShadowDom`: Use the latest ShadowDOM API to natively encapsulate styles
  into a shadow root. |
  | animations | `o.Expression` | A collection of animation triggers that will be used in the component template. |
  | viewProviders | `o.Expression` | The list of view providers defined in the component. |
  | relativeContextFilePath | `string` | Path to the .ts file in which this template's generated code will be included, relative to
  the compilation root. This will be used to generate identifiers that need to be globally
  unique in certain contexts (such as g3). |
  | i18nUseExternalIds | `boolean` | Whether translation variable name should contain external message id
  (used by Closure Compiler's output of `goog.getMsg` for transition period). |
  | interpolation | `InterpolationConfig` | Overrides the default interpolation start and end delimiters ({{ and }}). |
  | changeDetection | `ChangeDetectionStrategy` | Strategy used for detecting changes in the component. |
