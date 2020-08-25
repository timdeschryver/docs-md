---
kind: InterfaceDeclaration
name: ɵParsedMessage
module: localize
---

# ɵParsedMessage

## description

Information parsed from a `$localize` tagged string that is used to translate it.

For example:

```
const name = 'Jo Bloggs';
$localize`Hello ${name}:title!`;
```

May be parsed into:

```
{
id: '6998194507597730591',
substitutions: { title: 'Jo Bloggs' },
messageString: 'Hello {$title}!',
}
```

```ts
interface ParsedMessage {
  id: MessageId;
  substitutions: Record<string, any>;
  messageParts: string[];
  placeholderNames: string[];

  // inherited from MessageMetadata
  text: string;
  id?: MessageId;
  legacyIds?: string[];
  meaning?: string;
  description?: string;
  location?: SourceLocation;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/messages.ts#L110-L129)

## Properties

| Name | Type     | Description                                                 |
| ---- | -------- | ----------------------------------------------------------- |
| id   | `string` | The key used to look up the appropriate translation target. |

In `ParsedMessage` this is a required field, whereas it is optional in `MessageMetadata`. |
| substitutions | `Record<string, any>` | A mapping of placeholder names to substitution values. |
| messageParts | `string[]` | The static parts of the message. |
| placeholderNames | `string[]` | The names of the placeholders that will be replaced with substitutions. |
