---
kind: InterfaceDeclaration
name: CanActivate
module: router
---

# CanActivate

## description

Interface that a class can implement to be a guard deciding if a route can be activated.
If all guards return `true`, navigation continues. If any guard returns `false`,
navigation is cancelled. If any guard returns a `UrlTree`, the current navigation
is cancelled and a new navigation begins to the `UrlTree` returned from the guard.

The following example implements a `CanActivate` function that checks whether the
current user has permission to activate the requested route.

````
class UserToken {}
class Permissions {
canActivate(user: UserToken, id: string): boolean {
return true;
}
}


```ts
interface CanActivate {}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/interfaces.ts#L92-L95)

## Injectable()

class CanActivateTeam implements CanActivate {
constructor(private permissions: Permissions, private currentUser: UserToken) {}

canActivate(
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
path: 'team/:id',
component: TeamComponent,
canActivate: [CanActivateTeam]
}
])
],
providers: [CanActivateTeam, UserToken, Permissions]
})
class AppModule {}

```

You can alternatively provide an in-line function with the `canActivate` signature:

```

imports: [
RouterModule.forRoot([
{
path: 'team/:id',
component: TeamComponent,
canActivate: ['canActivateTeam']
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
