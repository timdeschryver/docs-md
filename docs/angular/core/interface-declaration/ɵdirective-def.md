---
kind: InterfaceDeclaration
name: ɵDirectiveDef
module: core
---

# ɵDirectiveDef

## description

Runtime link information for Directives.

This is an internal data structure used by the render to link
directives into templates.

NOTE: Always use `defineDirective` function to create this object,
never create the object directly since the shape of this object
can change between versions.

```ts
interface DirectiveDef<T> {
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/definition.ts#L153-L262)

## Parameters

| Name     | Type | Description                                                         |
| -------- | ---- | ------------------------------------------------------------------- |
| Selector | ``   | type metadata specifying the selector of the directive or component |

## Properties

| Name   | Type                          | Description                                                                               |
| ------ | ----------------------------- | ----------------------------------------------------------------------------------------- |
| inputs | `{ [P in keyof T]: string; }` | A dictionary mapping the inputs' minified property names to their public API names, which |

are their aliases if any, or their original unminified property names
(as in `@Input('alias') propertyName: any;`). |
| declaredInputs | `{ [P in keyof T]: string; }` | |
| outputs | `{ [P in keyof T]: string; }` | A dictionary mapping the outputs' minified property names to their public API names, which
are their aliases if any, or their original unminified property names
(as in `@Output('alias') propertyName: any;`). |
| contentQueries | `ContentQueriesFunction<T>` | Function to create and refresh content queries associated with a given directive. |
| viewQuery | `ViewQueriesFunction<T>` | Query-related instructions for a directive. Note that while directives don't have a
view and as such view queries won't necessarily do anything, there might be
components that extend the directive. |
| hostBindings | `HostBindingsFunction<T>` | Refreshes host bindings on the associated directive. |
| hostVars | `number` | The number of bindings in this directive `hostBindings` (including pure fn bindings).

Used to calculate the length of the component's LView array, so we
can pre-fill the array and set the host binding start index. |
| hostAttrs | `TAttributes` | Assign static attribute values to a host element.

This property will assign static attribute values as well as class and style
values to a host element. Since attribute values can consist of different types of values, the
`hostAttrs` array must include the values in the following format:

attrs = [
// static attributes (like `title`, `name`, `id`...)
attr1, value1, attr2, value,

// a single namespace value (like `x:id`)
NAMESPACE_MARKER, namespaceUri1, name1, value1,

// another single namespace value (like `x:name`)
NAMESPACE_MARKER, namespaceUri2, name2, value2,

// a series of CSS classes that will be applied to the element (no spaces)
CLASSES_MARKER, class1, class2, class3,

// a series of CSS styles (property + value) that will be applied to the element
STYLES_MARKER, prop1, value1, prop2, value2
]

All non-class and non-style attributes must be defined at the start of the list
first before all class and style values are set. When there is a change in value
type (like when classes and styles are introduced) a marker must be used to separate
the entries. The marker values themselves are set via entries found in the
[AttributeMarker] enum. |
| type | `Type<T>` | Token representing the directive. Used by DI. |
| providersResolver | `<U extends T>(def: DirectiveDef<U>, processProvidersFn?: ProcessProvidersFunction) => void` | Function that resolves providers and publishes them into the DI system. |
| selectors | `CssSelectorList` | The selectors that will be used to match nodes to this directive. |
| exportAs | `string[]` | Name under which the directive is exported (for use with local references in template) |
| factory | `FactoryFn<T>` | Factory function used to create a new directive instance. Will be null initially.
Populated when the factory is first requested by directive instantiation logic. |
| features | `DirectiveDefFeature[]` | The features applied to this directive |
| setInput | `<U extends T>(this: DirectiveDef<U>, instance: U, value: any, publicName: string, privateName: string) => void` | |
