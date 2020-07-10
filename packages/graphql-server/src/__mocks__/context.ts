import { ServerContext } from '../index'
import { appointmentTypeMock } from '../resolvers/configurations/__mocks__/appointmentTypes'
import { propertiesMock } from '../resolvers/properties/__mocks__/properties'
import { officesMock } from '../resolvers/offices/__mocks__/offices'
import { negotiatorsMock } from '../resolvers/negotiators/__mocks__/negotiators'

export const mockContext = {
  traceId: 'mockTraceId',
  authorization: 'mockAuthorization',
  dataLoader: {
    configurationLoader: {
      load: jest.fn().mockResolvedValue(() => appointmentTypeMock) as any,
      loadMany: jest.fn().mockResolvedValue(() => appointmentTypeMock) as any,
    },
    propertyLoader: {
      load: jest.fn().mockResolvedValue(() => propertiesMock) as any,
      loadMany: jest.fn().mockResolvedValue(() => propertiesMock) as any,
    },
    officeLoader: {
      load: jest.fn().mockResolvedValue(() => officesMock) as any,
      loadMany: jest.fn().mockResolvedValue(() => officesMock) as any,
    },
    negotiatorLoader: {
      load: jest.fn().mockResolvedValue(() => negotiatorsMock) as any,
      loadMany: jest.fn().mockResolvedValue(() => negotiatorsMock) as any,
    },
  },
} as ServerContext
