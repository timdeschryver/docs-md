---
kind: ClassDeclaration
name: RouterLinkActive
module: router
---

# RouterLinkActive

## description

Lets you add a CSS class to an element when the link's route becomes active.

This directive lets you add a CSS class to an element when the link's route
becomes active.

Consider the following example:

```
<a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
```

When the url is either '/user' or '/user/bob', the active-link class will
be added to the `a` tag. If the url changes, the class will be removed.

You can set more than one class, as follows:

```
<a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
<a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
```

You can configure RouterLinkActive by passing `exact: true`. This will add the classes
only when the url matches the link exactly.

```
<a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
true}">Bob</a>
```

You can assign the RouterLinkActive instance to a template variable and directly check
the `isActive` status.

```
<a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
Bob {{ rla.isActive ? '(already open)' : ''}}
</a>
```

Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.

```
<div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
<a routerLink="/user/jim">Jim</a>
<a routerLink="/user/bob">Bob</a>
</div>
```

This will set the active-link class on the div tag if the url is either '/user/jim' or
'/user/bob'.

```ts
class RouterLinkActive implements OnChanges, OnDestroy, AfterContentInit {
  @ContentChildren(RouterLink, { descendants: true }) links!: QueryList<
    RouterLink
  >;
  @ContentChildren(RouterLinkWithHref, { descendants: true })
  linksWithHrefs!: QueryList<RouterLinkWithHref>;
  public readonly isActive: boolean = false;
  @Input() routerLinkActiveOptions: { exact: boolean } = { exact: false };

  ngAfterContentInit(): void;
  ngOnChanges(changes: SimpleChanges): void;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link_active.ts#L75-L152)

## ngModule

RouterModule

## publicApi

## Properties

| Name                    | Type                  | Description |
| ----------------------- | --------------------- | ----------- |
| links                   | `any`                 |             |
| linksWithHrefs          | `any`                 |             |
| isActive                | `boolean`             |             |
| routerLinkActiveOptions | `{ exact: boolean; }` |             |

## Methods

### ngAfterContentInit

```ts
ngAfterContentInit(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link_active.ts#L104-L108)

### ngOnChanges

```ts
ngOnChanges(changes: SimpleChanges): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link_active.ts#L116-L118)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| changes | `any` |             |

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link_active.ts#L119-L121)
