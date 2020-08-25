---
kind: InterfaceDeclaration
name: CanLoad
module: router
---

# CanLoad

## description

Interface that a class can implement to be a guard deciding if children can be loaded.
If all guards return `true`, navigation continues. If any guard returns `false`,
navigation is cancelled. If any guard returns a `UrlTree`, current navigation
is cancelled and a new navigation starts to the `UrlTree` returned from the guard.

The following example implements a `CanLoad` function that decides whether the
current user has permission to load requested child routes.

````
class UserToken {}
class Permissions {
canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
return true;
}
}


```ts
interface CanLoad {}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/interfaces.ts#L469-L472)

## Injectable()

class CanLoadTeamSection implements CanLoad {
constructor(private permissions: Permissions, private currentUser: UserToken) {}

canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
return this.permissions.canLoadChildren(this.currentUser, route, segments);
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
loadChildren: 'team.js',
canLoad: [CanLoadTeamSection]
}
])
],
providers: [CanLoadTeamSection, UserToken, Permissions]
})
class AppModule {}

```

You can alternatively provide an in-line function with the `canLoad` signature:

```

imports: [
RouterModule.forRoot([
{
path: 'team/:id',
component: TeamComponent,
loadChildren: 'team.js',
canLoad: ['canLoadTeamSection']
}
])
],
providers: [
{
provide: 'canLoadTeamSection',
useValue: (route: Route, segments: UrlSegment[]) => true
}
]
})
class AppModule {}

```

## publicApi
```
