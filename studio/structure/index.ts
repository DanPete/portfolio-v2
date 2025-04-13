import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .id('settings')
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
}
