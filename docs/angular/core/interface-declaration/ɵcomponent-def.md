---
kind: InterfaceDeclaration
name: ɵComponentDef
module: core
---

# ɵComponentDef

## description

Runtime link information for Components.

This is an internal data structure used by the render to link
components into templates.

NOTE: Always use `defineComponent` function to create this object,
never create the object directly since the shape of this object
can change between versions.

See: {@link defineComponent}

```ts
interface ComponentDef<T> {
  readonly id: string;
  readonly template: ComponentTemplate<T>;
  readonly consts: TConstants | null;
  readonly ngContentSelectors?: string[];
  readonly styles: string[];
  readonly decls: number;
  readonly vars: number;
  viewQuery: ViewQueriesFunction<T> | null;
  readonly encapsulation: ViewEncapsulation;
  readonly data: { [kind: string]: any };
  readonly onPush: boolean;
  directiveDefs: DirectiveDefListOrFactory | null;
  pipeDefs: PipeDefListOrFactory | null;
  schemas: SchemaMetadata[] | null;
  tView: TView | null;
  readonly _?: never;

  // inherited from DirectiveDef
  readonly inputs: { [P in keyof T]: string };
  readonly declaredInputs: { [P in keyof T]: string };
  readonly outputs: { [P in keyof T]: string };
  contentQueries: ContentQueriesFunction<T> | null;
  viewQuery: ViewQueriesFunction<T> | null;
  readonly hostBindings: HostBindingsFunction<T> | null;
  readonly hostVars: number;
  readonly hostAttrs: TAttributes | null;
  readonly type: Type<T>;
  providersResolver:
    | (<U extends T>(
        def: DirectiveDef<U>,
        processProvidersFn?: ProcessProvidersFunction
      ) => void)
    | null;
  readonly selectors: CssSelectorList;
  readonly exportAs: string[] | null;
  readonly factory: FactoryFn<T> | null;
  readonly features: DirectiveDefFeature[] | null;
  setInput:
    | (<U extends T>(
        this: DirectiveDef<U>,
        instance: U,
        value: any,
        publicName: string,
        privateName: string
      ) => void)
    | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/definition.ts#L290-L388)

## Properties

| Name               | Type                   | Description                                                                               |
| ------------------ | ---------------------- | ----------------------------------------------------------------------------------------- |
| id                 | `string`               | Runtime unique component ID.                                                              |
| template           | `ComponentTemplate<T>` | The View template of the component.                                                       |
| consts             | `TConstants`           | Constants associated with the component's view.                                           |
| ngContentSelectors | `string[]`             | An array of `ngContent[selector]` values that were found in the template.                 |
| styles             | `string[]`             | A set of styles that the component needs to be present for component to render correctly. |
| decls              | `number`               | The number of nodes, local refs, and pipes in this component template.                    |

Used to calculate the length of the component's LView array, so we
can pre-fill the array and set the binding start index. |
| vars | `number` | The number of bindings in this component template (including pure fn bindings).

Used to calculate the length of the component's LView array, so we
can pre-fill the array and set the host binding start index. |
| viewQuery | `ViewQueriesFunction<T>` | Query-related instructions for a component. |
| encapsulation | `ViewEncapsulation` | The view encapsulation type, which determines how styles are applied to
DOM elements. One of

- `Emulated` (default): Emulate native scoping of styles.
- `Native`: Use the native encapsulation mechanism of the renderer.
- `ShadowDom`: Use modern [ShadowDOM](https://w3c.github.io/webcomponents/spec/shadow/) and
  create a ShadowRoot for component's host element.
- `None`: Do not provide any template or style encapsulation. |
  | data | `{ [kind: string]: any; }` | Defines arbitrary developer-defined data to be stored on a renderer instance.
  This is useful for renderers that delegate to other renderers. |
  | onPush | `boolean` | Whether or not this component's ChangeDetectionStrategy is OnPush |
  | directiveDefs | `DirectiveDefListOrFactory` | Registry of directives and components that may be found in this view.

The property is either an array of `DirectiveDef`s or a function which returns the array of
`DirectiveDef`s. The function is necessary to be able to support forward declarations. |
| pipeDefs | `PipeDefListOrFactory` | Registry of pipes that may be found in this view.

The property is either an array of `PipeDefs`s or a function which returns the array of
`PipeDefs`s. The function is necessary to be able to support forward declarations. |
| schemas | `SchemaMetadata[]` | The set of schemas that declare elements to be allowed in the component's template. |
| tView | `TView` | Ivy runtime uses this place to store the computed tView for the component. This gets filled on
the first run of component. |
| \_ | `never` | Used to store the result of `noSideEffects` function so that it is not removed by closure
compiler. The property should never be read. |
