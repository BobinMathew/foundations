import { IdentityCheckModel } from '@reapit/foundations-ts-definitions'

export const idCheck: IdentityCheckModel = {
  id: 'RPT19000104',
  contactId: 'AYL19000001',
  created: '0001-01-01T00:00:00.0000000',
  modified: '2019-12-13T05:41:45.0000000Z',
  checkDate: '0001-01-01T00:00:00.0000000',
  status: 'pass',
  negotiatorId: 'LJW',
  identityDocument1: {
    documentId: 'SOME_ID',
    typeId: 'TX',
    expiry: '2020-02-07',
    details: 'Hshs',
  },
  identityDocument2: {
    documentId: 'SOME_ID',
    typeId: 'CI',
    expiry: '2019-12-21',
    details: 'a',
  },
  metadata: {
    secondaryAddress: {
      year: '7',
      month: '5',
      documentType: 'Recent Utility Bill – Gas, Electricity, Water, Telephone (Not mobile phones)',
      documentImage:
        'https://reapit-dev-app-store-media.s3.eu-west-2.amazonaws.com/BED14000165-secondary-address-id(1).png',
    },
    primaryAddress: {
      documentType: 'Current Full UK Driving Licence',
      month: '6',
      year: '10',
      documentImage:
        'https://reapit-dev-app-store-media.s3.eu-west-2.amazonaws.com/BED14000165-primary-address-id(1).png',
    },
    declarationRisk: {
      reason: '123',
      type: 'Simplified',
      declarationForm:
        'https://reapit-dev-app-store-media.s3.eu-west-2.amazonaws.com/declaration-Simplified-123(1).png',
      riskAssessmentForm:
        'https://reapit-dev-app-store-media.s3.eu-west-2.amazonaws.com/riskAssessment-Simplified-123(1).png',
    },
  },
  _eTag: '"51F8EECB09FB89903C42CAB63E3D5D0C"',
  _links: {
    self: {
      href: '/identityChecks/RPT19000104',
    },
    contact: {
      href: '/contacts/AYL19000001',
    },
    documentType1: {
      href: '/configuration/identityDocumentTypes/TX',
    },
    documentType2: {
      href: '/configuration/identityDocumentTypes/CI',
    },
  },
}
