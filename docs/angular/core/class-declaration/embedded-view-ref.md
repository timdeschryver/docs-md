---
kind: ClassDeclaration
name: EmbeddedViewRef
module: core
---

# EmbeddedViewRef

## description

Represents an Angular [view](guide/glossary#view) in a view container.
An [embedded view](guide/glossary#view-tree) can be referenced from a component
other than the hosting component whose template defines it, or it can be defined
independently by a `TemplateRef`.

Properties of elements in a view can change, but the structure (number and order) of elements in
a view cannot. Change the structure of elements by inserting, moving, or
removing nested views in a view container.

```ts
class EmbeddedViewRef<C> extends ViewRef {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_ref.ts#L93-L103)

## see

`ViewContainerRef`

## usageNotes

The following template breaks down into two separate `TemplateRef` instances,
an outer one and an inner one.

```
Count: {{items.length}}
<ul>
<li *ngFor="let  item of items">{{item}}</li>
</ul>
```

This is the outer `TemplateRef`:

```
Count: {{items.length}}
<ul>
<ng-template ngFor let-item [ngForOf]="items"></ng-template>
</ul>
```

This is the inner `TemplateRef`:

```
<li>{{item}}</li>
```

The outer and inner `TemplateRef` instances are assembled into views as follows:

```
<!-- ViewRef: outer-0 -->
Count: 2
<ul>
<ng-template view-container-ref></ng-template>
<!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
<!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
</ul>
<!-- /ViewRef: outer-0 -->
```

## publicApi
