---
kind: InterfaceDeclaration
name: CanActivateChild
module: router
---

# CanActivateChild

## description

Interface that a class can implement to be a guard deciding if a child route can be activated.
If all guards return `true`, navigation continues. If any guard returns `false`,
navigation is cancelled. If any guard returns a `UrlTree`, current navigation
is cancelled and a new navigation begins to the `UrlTree` returned from the guard.

The following example implements a `CanActivateChild` function that checks whether the
current user has permission to activate the requested child route.

````
class UserToken {}
class Permissions {
canActivate(user: UserToken, id: string): boolean {
return true;
}
}


```ts
interface CanActivateChild {}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/interfaces.ts#L186-L189)

## Injectable()

class CanActivateTeam implements CanActivateChild {
constructor(private permissions: Permissions, private currentUser: UserToken) {}

canActivateChild(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
return this.permissions.canActivate(this.currentUser, route.params.id);
}
}

```

Here, the defined guard function is provided as part of the `Route` object
in the router configuration:

```

## NgModule({

imports: [
RouterModule.forRoot([
{
path: 'root',
canActivateChild: [CanActivateTeam],
children: [
{
path: 'team/:id',
component: TeamComponent
}
]
}
])
],
providers: [CanActivateTeam, UserToken, Permissions]
})
class AppModule {}

```

You can alternatively provide an in-line function with the `canActivateChild` signature:

```

imports: [
RouterModule.forRoot([
{
path: 'root',
canActivateChild: ['canActivateTeam'],
children: [
{
path: 'team/:id',
component: TeamComponent
}
]
}
])
],
providers: [
{
provide: 'canActivateTeam',
useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
}
]
})
class AppModule {}

```

## publicApi
```
