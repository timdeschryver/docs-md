---
kind: InterfaceDeclaration
name: R3DirectiveMetadata
module: compiler
---

# R3DirectiveMetadata

## description

Information needed to compile a directive for the render3 runtime.

```ts
interface R3DirectiveMetadata {
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/api.ts#L21-L118)

## Properties

| Name         | Type           | Description                                                                                     |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------- |
| name         | `string`       | Name of the directive type.                                                                     |
| type         | `R3Reference`  | An expression representing a reference to the directive itself.                                 |
| internalType | `o.Expression` | An expression representing a reference to the directive being compiled, intended for use within |

a class definition itself.

This can differ from the outer `type` if the class is being compiled by ngcc and is inside
an IIFE structure that uses a different name internally. |
| typeArgumentCount | `number` | Number of generic type parameters of the type itself. |
| typeSourceSpan | `ParseSourceSpan` | A source span for the directive type. |
| deps | `R3DependencyMetadata[] | "invalid"` | Dependencies of the directive's constructor. |
| selector | `string` | Unparsed selector of the directive, or `null` if there was no selector. |
| queries | `R3QueryMetadata[]` | Information about the content queries made by the directive. |
| viewQueries | `R3QueryMetadata[]` | Information about the view queries made by the directive. |
| host | `R3HostMetadata` | Mappings indicating how the directive interacts with its host element (host bindings,
listeners, etc). |
| lifecycle | `{ usesOnChanges: boolean; }` | Information about usage of specific lifecycle events which require special treatment in the
code generator. |
| inputs | `{ [field: string]: string | [string, string]; }` | A mapping of input field names to the property names. |
| outputs | `{ [field: string]: string; }` | A mapping of output field names to the property names. |
| usesInheritance | `boolean` | Whether or not the component or directive inherits from another class |
| fullInheritance | `boolean` | Whether or not the component or directive inherits its entire decorator from its base class. |
| exportAs | `string[]` | Reference name under which to export the directive's type in a template,
if any. |
| providers | `o.Expression` | The list of providers defined in the directive. |
