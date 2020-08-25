---
kind: ClassDeclaration
name: RouterOutlet
module: router
---

# RouterOutlet

## description

Acts as a placeholder that Angular dynamically fills based on the current router state.

Each outlet can have a unique name, determined by the optional `name` attribute.
The name cannot be set or changed dynamically. If not set, default value is "primary".

```
<router-outlet></router-outlet>
<router-outlet name='left'></router-outlet>
<router-outlet name='right'></router-outlet>
```

Named outlets can be the targets of secondary routes.
The `Route` object for a secondary route has an `outlet` property to identify the target outlet:

`{path: <base-path>, component: <component>, outlet: <target_outlet_name>}`

Using named outlets and secondary routes, you can target multiple outlets in
the same `RouterLink` directive.

The router keeps track of separate branches in a navigation tree for each named outlet and
generates a representation of that tree in the URL.
The URL for a secondary route uses the following syntax to specify both the primary and secondary
routes at the same time:

`http://base-path/primary-route-path(outlet-name:route-path)`

A router outlet emits an activate event when a new component is instantiated,
and a deactivate event when a component is destroyed.

```
<router-outlet
(activate)='onActivate($event)'
(deactivate)='onDeactivate($event)'></router-outlet>
```

```ts
class RouterOutlet implements OnDestroy, OnInit {
  @Output("activate") activateEvents = new EventEmitter<any>();
  @Output("deactivate") deactivateEvents = new EventEmitter<any>();

  ngOnDestroy(): void;
  ngOnInit(): void;
  detach(): ComponentRef<any>;
  attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute);
  deactivate(): void;
  activateWith(
    activatedRoute: ActivatedRoute,
    resolver: ComponentFactoryResolver | null
  );
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L62-L169)

## see

[Routing tutorial](guide/router-tutorial-toh#named-outlets "Example of a named
outlet and secondary route configuration").
`RouterLink`
`Route`

## ngModule

RouterModule

## publicApi

## Properties

| Name             | Type  | Description |
| ---------------- | ----- | ----------- |
| activateEvents   | `any` |             |
| deactivateEvents | `any` |             |

## Methods

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L79-L81)

### ngOnInit

```ts
ngOnInit(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L83-L98)

### detach

#### description (#detach-description)

Called when the `RouteReuseStrategy` instructs to detach the subtree

```ts
detach(): ComponentRef<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L124-L131)

### attach

#### description (#attach-description)

Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree

```ts
attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L136-L140)

#### Parameters (#attach-parameters)

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| ref            | `any`            |             |
| activatedRoute | `ActivatedRoute` |             |

### deactivate

```ts
deactivate(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L142-L150)

### activateWith

```ts
activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver|null);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_outlet.ts#L152-L168)

#### Parameters (#activateWith-parameters)

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| activatedRoute | `ActivatedRoute` |             |
| resolver       | `any`            |             |
