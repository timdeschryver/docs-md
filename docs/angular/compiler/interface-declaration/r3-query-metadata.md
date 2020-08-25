---
kind: InterfaceDeclaration
name: R3QueryMetadata
module: compiler
---

# R3QueryMetadata

## description

Information needed to compile a query (view or content).

```ts
interface R3QueryMetadata {
  propertyName: string;
  first: boolean;
  predicate: o.Expression | string[];
  descendants: boolean;
  read: o.Expression | null;
  static: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/api.ts#L212-L254)

## Properties

| Name                                     | Type           | Description                                                                                    |
| ---------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| propertyName                             | `string`       | Name of the property on the class to update with query results.                                |
| first                                    | `boolean`      | Whether to read only the first matching result, or an array of results.                        |
| predicate                                | `o.Expression  | string[]`                                                                                      | Either an expression representing a type or `InjectionToken` for the query |
| predicate, or a set of string selectors. |
| descendants                              | `boolean`      | Whether to include only direct children or all descendants.                                    |
| read                                     | `o.Expression` | An expression representing a type to read from each matched node, or null if the default value |
| for a given node is to be returned.      |
| static                                   | `boolean`      | Whether or not this query should collect only static results.                                  |

If static is true, the query's results will be set on the component after nodes are created,
but before change detection runs. This means that any results that relied upon change detection
to run (e.g. results inside *ngIf or *ngFor views) will not be collected. Query results are
available in the ngOnInit hook.

If static is false, the query's results will be set on the component after change detection
runs. This means that the query results can contain nodes inside *ngIf or *ngFor views, but
the results will not be available in the ngOnInit hook (only in the ngAfterContentInit for
content hooks and ngAfterViewInit for view hooks). |
