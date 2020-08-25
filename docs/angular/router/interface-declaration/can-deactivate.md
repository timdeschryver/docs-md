---
kind: InterfaceDeclaration
name: CanDeactivate
module: router
---

# CanDeactivate

## description

Interface that a class can implement to be a guard deciding if a route can be deactivated.
If all guards return `true`, navigation continues. If any guard returns `false`,
navigation is cancelled. If any guard returns a `UrlTree`, current navigation
is cancelled and a new navigation begins to the `UrlTree` returned from the guard.

The following example implements a `CanDeactivate` function that checks whether the
current user has permission to deactivate the requested route.

```
class UserToken {}
class Permissions {
canDeactivate(user: UserToken, id: string): boolean {
return true;
}
}
```

Here, the defined guard function is provided as part of the `Route` object
in the router configuration:

````


```ts
interface CanDeactivate<T> {}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/interfaces.ts#L274-L279)

## Injectable()

class CanDeactivateTeam implements CanDeactivate<TeamComponent> {
constructor(private permissions: Permissions, private currentUser: UserToken) {}

canDeactivate(
component: TeamComponent,
currentRoute: ActivatedRouteSnapshot,
currentState: RouterStateSnapshot,
nextState: RouterStateSnapshot
): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
return this.permissions.canDeactivate(this.currentUser, route.params.id);
}
}

## NgModule({

imports: [
RouterModule.forRoot([
{
path: 'team/:id',
component: TeamComponent,
canDeactivate: [CanDeactivateTeam]
}
])
],
providers: [CanDeactivateTeam, UserToken, Permissions]
})
class AppModule {}

```

You can alternatively provide an in-line function with the `canDeactivate` signature:

```

imports: [
RouterModule.forRoot([
{
path: 'team/:id',
component: TeamComponent,
canDeactivate: ['canDeactivateTeam']
}
])
],
providers: [
{
provide: 'canDeactivateTeam',
useValue: (component: TeamComponent, currentRoute: ActivatedRouteSnapshot, currentState:
RouterStateSnapshot, nextState: RouterStateSnapshot) => true
}
]
})
class AppModule {}

```

## publicApi
```
