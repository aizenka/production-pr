export type ClsMods = Record<string, string | boolean | undefined>
export type ClsAdditional = Array<string | undefined>

export default function classNames (
  rcsl: string,
  mods: ClsMods = {},
  additional:ClsAdditional = []
): string {
  return [
    rcsl,
    ...additional.filter(acsl => !!acsl),
    ...Object.keys(mods).filter(cls => mods[cls])
  ].join(' ')
}