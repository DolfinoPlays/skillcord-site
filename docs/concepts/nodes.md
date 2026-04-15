---
title: Nodes and unlocks
---

# Nodes and unlocks

Each node in Skillcord should represent one choice, milestone, or unlock.

## Recommended node structure

- **id**: unique internal identifier
- **name**: display name
- **description**: short explanation
- **cost**: skill point cost
- **prerequisites**: required node IDs
- **type**: role, access, or progression
- **targets**: role IDs, channel IDs, or category IDs depending on type

## Node types

### Role node

Grants one or more roles when unlocked.

Use this when you want a Discord-native reward that other bots, admins, and channel permissions can use.

### Access node

Unlocks a category or channel for one specific member.

Use this when you want a personal path without forcing the server to create a new role for every unlock.

### Progression node

Does not directly grant a role or access change. It only unlocks later nodes.

Use this for passive progress or tree structure.

## Example

```json
{
  "id": "blacksmith_path",
  "name": "Blacksmith Path",
  "description": "Begin the crafting branch.",
  "cost": 1,
  "prerequisites": [],
  "type": "role",
  "targets": ["123456789012345678"]
}
```
