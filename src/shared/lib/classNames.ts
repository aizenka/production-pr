type Mods = Record<string, string | boolean>

export default function classNames (
  rcsl: string,
  mods?: Mods,
  additional?: string[]
): string {
  return [
    rcsl,
    ...additional,
    ...Object.keys(mods).filter(cls => mods[cls])
  ].join(' ')
}