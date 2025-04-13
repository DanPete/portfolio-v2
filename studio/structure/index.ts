import {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export const singletonTypes = new Set(['settings'])

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .id('settings')
        .child(S.document().schemaType('settings').documentId('settings').title('Settings')),
    ])
}
