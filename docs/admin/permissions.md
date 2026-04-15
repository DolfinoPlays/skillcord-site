---
title: Permissions setup
---

# Permissions setup

This is the most important part of Skillcord setup.

## How locked channels should work

If you want Skillcord to unlock a channel or category using a user-specific permission overwrite, the locked channel or category must be hidden by default.

The common setup is:

- your normal member role or `@everyone` keeps normal chat permissions like sending messages, embeds, or attachments
- the locked channel or category has **View Channel** turned off by default
- Skillcord later grants **View Channel** to the specific member through a permission overwrite

That way, the member keeps their normal chat abilities from their role, but they only gain visibility when the bot unlocks access.

## Important notes

- If a channel is already visible by default, an access node will not feel like an unlock.
- If your channel permissions are messy, test them before going live.
- Category sync can affect child channels. Be careful when mixing category and channel overrides.

## Best practices

- Use categories for grouped unlocks.
- Keep your permission layout consistent.
- Use role unlocks where they make more sense.
- Use access unlocks when you want personal visibility without creating extra roles.

## Admin checklist

- Is the target hidden by default?
- Are normal send and attachment perms still present on the member role?
- Is the bot role high enough to manage the needed resources?
- Did you test with a normal member account?
