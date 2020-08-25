---
kind: ClassDeclaration
name: NgStyle
module: common
---

# NgStyle

## description

An attribute directive that updates styles for the containing HTML element.
Sets one or more style properties, specified as colon-separated key-value pairs.
The key is a style name, with an optional `.<unit>` suffix
(such as 'top.px', 'font-style.em').
The value is an expression to be evaluated.
The resulting non-null value, expressed in the given unit,
is assigned to the given style property.
If the result of evaluation is null, the corresponding style is removed.

```ts
class NgStyle implements DoCheck {
  ngDoCheck();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_style.ts#L47-L88)

## ngModule

CommonModule

## usageNotes

Set the font of the containing element to the result of an expression.

```
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
```

Set the width of the containing element to a pixel value returned by an expression.

```
<some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
```

Set a collection of style values using an expression that returns key-value pairs.

```
<some-element [ngStyle]="objExp">...</some-element>
```

## publicApi

## Methods

### ngDoCheck

```ts
ngDoCheck();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_style.ts#L63-L70)
