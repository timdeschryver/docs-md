---
kind: ClassDeclaration
name: RouterLinkWithHref
module: router
---

# RouterLinkWithHref

## description

Lets you link to specific routes in your app.

See `RouterLink` for more information.

```ts
class RouterLinkWithHref implements OnChanges, OnDestroy {
  @HostBinding("attr.target") @Input() target!: string;
  @Input() queryParams!: { [k: string]: any };
  @Input() fragment!: string;
  @Input() queryParamsHandling!: QueryParamsHandling;
  @Input() preserveFragment!: boolean;
  @Input() skipLocationChange!: boolean;
  @Input() replaceUrl!: boolean;
  @Input() state?: { [k: string]: any };
  @HostBinding() href!: string;

  ngOnChanges(changes: {}): any;
  ngOnDestroy(): any;
  @HostListener("click", [
    "$event.button",
    "$event.ctrlKey",
    "$event.metaKey",
    "$event.shiftKey",
  ])
  onClick(
    button: number,
    ctrlKey: boolean,
    metaKey: boolean,
    shiftKey: boolean
  ): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link.ts#L236-L374)

## ngModule

RouterModule

## publicApi

## Properties

| Name                | Type                    | Description                                                                                    |
| ------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| target              | `string`                |                                                                                                |
| queryParams         | `{ [k: string]: any; }` | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| fragment            | `string`                | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| queryParamsHandling | `QueryParamsHandling`   | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| preserveFragment    | `boolean`               | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| skipLocationChange  | `boolean`               | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| replaceUrl          | `boolean`               | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| state               | `{ [k: string]: any; }` | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| href                | `string`                |                                                                                                |

## Methods

### ngOnChanges

```ts
ngOnChanges(changes: {}): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link.ts#L334-L336)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type | Description |
| ------- | ---- | ----------- |
| changes | `{}` |             |

### ngOnDestroy

```ts
ngOnDestroy(): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link.ts#L337-L339)

### onClick

```ts
@HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']) onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link.ts#L341-L358)

#### Parameters (#onClick-parameters)

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| button   | `number`  |             |
| ctrlKey  | `boolean` |             |
| metaKey  | `boolean` |             |
| shiftKey | `boolean` |             |
