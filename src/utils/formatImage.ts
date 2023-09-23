import { Asset, ChainModifiers, UnresolvedLink } from 'contentful'

export function getProcessedPicture(
  picture:
    | (() => Asset<ChainModifiers, string>)
    | Asset<ChainModifiers, string>
    | UnresolvedLink<'Asset'>
): string {
  if (typeof picture === 'function') {
    const asset = picture()
    return `https:${asset.fields.file.url}`
  } else if (picture && 'fields' in picture) {
    return `https:${picture.fields.file.url}`
  } else if (typeof picture === 'string') {
    return picture
  }
  return ''
}
