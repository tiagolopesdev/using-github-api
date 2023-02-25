# Improvemends done in Action Icons component

When you define a component and are using typescript, you MUST define an interface or a type
to say the possible propoerties that component can accept. Since you define a component called
ActionIcons you can define the interface with the same name and adding the `I` prefix or `Props` sufix.

```tsx
interface IActionIconProps extends HTMLAttributes<HTMLImageElement> {}

export function ActionIcon(props: IActionIconProps){
  
}
```