---
kind: InterfaceDeclaration
name: Directive
module: core
---

# Directive

## description

Directive decorator and metadata.

```ts
interface Directive {
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L85-L291)

## Annotation

## publicApi

## Properties

| Name     | Type     | Description                                                   |
| -------- | -------- | ------------------------------------------------------------- |
| selector | `string` | The CSS selector that identifies this directive in a template |

and triggers instantiation of the directive.

Declare as one of the following:

- `element-name`: Select by element name.
- `.class`: Select by class name.
- `[attribute]`: Select by attribute name.
- `[attribute=value]`: Select by attribute name and value.
- `:not(sub_selector)`: Select only if the element does not match the `sub_selector`.
- `selector1, selector2`: Select if either `selector1` or `selector2` matches.

Angular only allows directives to apply on CSS selectors that do not cross
element boundaries.

For the following template HTML, a directive with an `input[type=text]` selector,
would be instantiated only on the `<input type="text">` element.

````html
<form>
  <input type="text" />
  <input type="radio" />
  <form>
    ``` | | inputs | `string[]` | Enumerates the set of data-bound input
    properties for a directive Angular automatically updates input properties
    during change detection. The `inputs` property defines a set of
    `directiveProperty` to `bindingProperty` configuration: -
    `directiveProperty` specifies the component property where the value is
    written. - `bindingProperty` specifies the DOM property where the value is
    read from. When `bindingProperty` is not provided, it is assumed to be equal
    to `directiveProperty`. | | outputs | `string[]` | Enumerates the set of
    event-bound output properties. When an output property emits an event, an
    event handler attached to that event in the template is invoked. The
    `outputs` property defines a set of `directiveProperty` to `bindingProperty`
    configuration: - `directiveProperty` specifies the component property that
    emits events. - `bindingProperty` specifies the DOM property the event
    handler is attached to. | | providers | `Provider[]` | Configures the
    [injector](guide/glossary#injector) of this directive or component with a
    [token](guide/glossary#di-token) that maps to a
    [provider](guide/glossary#provider) of a dependency. | | exportAs | `string`
    | Defines the name that can be used in the template to assign this directive
    to a variable. | | queries | `{ [key: string]: any; }` | Configures the
    queries that will be injected into the directive. Content queries are set
    before the `ngAfterContentInit` callback is called. View queries are set
    before the `ngAfterViewInit` callback is called. | | host | `{ [key:
    string]: string; }` | Maps class properties to host element bindings for
    properties, attributes, and events, using a set of key-value pairs. Angular
    automatically checks host property bindings during change detection. If a
    binding changes, Angular updates the directive's host element. When the key
    is a property of the host element, the property value is the propagated to
    the specified DOM property. When the key is a static attribute in the DOM,
    the attribute value is propagated to the specified property in the host
    element. For event handling: - The key is the DOM event that the directive
    listens to. To listen to global events, add the target to the event name.
    The target can be `window`, `document` or `body`. - The value is the
    statement to execute when the event occurs. If the statement evaluates to
    `false`, then `preventDefault` is applied on the DOM event. A handler method
    can refer to the `$event` local variable. | | jit | `true` | When present,
    this directive/component is ignored by the AOT compiler. It remains in
    distributed code, and the JIT compiler attempts to compile it at run time,
    in the browser. To ensure the correct behavior, the app must import
    `@angular/compiler`. |
  </form>
</form>
````
