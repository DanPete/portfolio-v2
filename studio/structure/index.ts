import {StructureResolver} from 'sanity/structure'
import {CogIcon, UserIcon} from '@sanity/icons'

export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export const singletonTypes = new Set(['intro', 'settings'])

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Intro')
        .icon(UserIcon)
        .id('intro')
        .child(S.document().schemaType('intro').documentId('intro').title('Intro')),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .id('settings')
        .child(S.document().schemaType('settings').documentId('settings').title('Settings')),
    ])
}
