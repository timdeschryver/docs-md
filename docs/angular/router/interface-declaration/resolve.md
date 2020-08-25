---
kind: InterfaceDeclaration
name: Resolve
module: router
---

# Resolve

## description

Interface that classes can implement to be a data provider.
A data provider class can be used with the router to resolve data during navigation.
The interface defines a `resolve()` method that is invoked when the navigation starts.
The router waits for the data to be resolved before the route is finally activated.

The following example implements a `resolve()` method that retrieves the data
needed to activate the requested route.

````

```ts
interface Resolve<T> {}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/interfaces.ts#L387-L389)

## Injectable({

providedIn: 'root' })
export class HeroResolver implements Resolve<Hero> {
constructor(private service: HeroService) {}

resolve(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<any>|Promise<any>|any {
return this.service.getHero(route.paramMap.get('id'));
}
}

```

Here, the defined `resolve()` function is provided as part of the `Route` object
in the router configuration:

```

## NgModule({

imports: [
RouterModule.forRoot([
{
path: 'detail/:id',
component: HeroDetailComponent,
resolve: {
hero: HeroResolver
}
}
])
],
exports: [RouterModule]
})
export class AppRoutingModule {}

```

You can alternatively provide an in-line function with the `resolve()` signature:

```

export const myHero: Hero = {
// ...
}

imports: [
RouterModule.forRoot([
{
path: 'detail/:id',
component: HeroComponent,
resolve: {
hero: 'heroResolver'
}
}
])
],
providers: [
{
provide: 'heroResolver',
useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => myHero
}
]
})
export class AppModule {}

```

## usageNotes


When both guard and resolvers are specified, the resolvers are not executed until
all guards have run and succeeded.
For example, consider the following route configuration:

```

{
path: 'base'
canActivate: [BaseGuard],
resolve: {data: BaseDataResolver}
children: [
{
path: 'child',
guards: [ChildGuard],
component: ChildComponent,
resolve: {childData: ChildDataResolver}
}
]
}

```
The order of execution is: BaseGuard, ChildGuard, BaseDataResolver, ChildDataResolver.

## publicApi
```
