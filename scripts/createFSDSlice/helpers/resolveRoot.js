import path from 'path'

export const resolveRoot = (...segments) => {
  return path.resolve(__dirname, '..', '..', '..', ...segments)
}