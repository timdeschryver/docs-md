---
kind: InterfaceDeclaration
name: HttpResourceUrls
module: data
---

# HttpResourceUrls

## description

Resource URLS for HTTP operations that target single entity
and multi-entity endpoints.

```ts
interface HttpResourceUrls {
  entityResourceUrl: string;
  collectionResourceUrl: string;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/dataservices/http-url-generator.ts#L18-L33)

## Properties

| Name              | Type     | Description                                                           |
| ----------------- | -------- | --------------------------------------------------------------------- |
| entityResourceUrl | `string` | The URL path for a single entity endpoint, e.g, `some-api-root/hero/` |

such as you'd use to add a hero.
Example: `httpClient.post<Hero>('some-api-root/hero/', addedHero)`.
Note trailing slash (/). |
| collectionResourceUrl | `string` | The URL path for a multiple-entity endpoint, e.g, `some-api-root/heroes/`
such as you'd use when getting all heroes.
Example: `httpClient.get<Hero[]>('some-api-root/heroes/')`
Note trailing slash (/). |
