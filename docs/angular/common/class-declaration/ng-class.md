---
kind: ClassDeclaration
name: NgClass
module: common
---

# NgClass

## description

Adds and removes CSS classes on an HTML element.

The CSS classes are updated as follows, depending on the type of the expression evaluation:

- `string` - the CSS classes listed in the string (space delimited) are added,
- `Array` - the CSS classes declared as Array elements are added,
- `Object` - keys are CSS classes that get added when the expression given in the value
  evaluates to a truthy value, otherwise they are removed.

```ts
class NgClass implements DoCheck {
  ngDoCheck();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_class.ts#L40-L160)

## ngModule

CommonModule

## usageNotes

```
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```

## publicApi

## Methods

### ngDoCheck

```ts
ngDoCheck();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_class.ts#L79-L91)
