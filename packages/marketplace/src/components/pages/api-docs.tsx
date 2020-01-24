import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlexContainerResponsive, Content, H3, H4, H5, Table, FlexContainerBasic } from '@reapit/elements'
import Routes from '@/constants/routes'

export const handleUseLayoutEffect = (hash?: string) => () => {
  if (!document) return

  const element = document.getElementById(hash ? hash.slice(1) : 'root')
  if (element) {
    element.scrollIntoView()
  }
}

const ApiDocsPage: React.FC = () => {
  const { hash } = useLocation()
  /* scroll before paint by using useLayoutEffect */
  React.useLayoutEffect(handleUseLayoutEffect(hash), [hash])

  return (
    <FlexContainerBasic flexColumn hasPadding>
      <Content>
        <FlexContainerResponsive flexColumn hasBackground hasPadding>
          <H3>Foundations Documentation</H3>
          <H4>Contents</H4>
          <ul className="mb-6">
            <li>
              <Link to="#api">API Overview</Link>
            </li>
            <li>
              <Link to="#authorization">Authorization</Link>
            </li>
            <li>
              <Link to="#developersandbox">Developer Sandbox</Link>
            </li>
            <li>
              <Link to="#errors">Errors</Link>
            </li>
            <li>
              <Link to="#rate-limits">Rate Limits</Link>
            </li>
            <li>
              <Link to="#pagingation">Pagination</Link>
            </li>
            <li>
              <Link to="#resource-expansion">Resource expansion</Link>
            </li>
            <li>
              <Link to="#versioning">Versioning</Link>
            </li>
            <li>
              <Link to="#elements">Elements</Link>
            </li>
            <li>
              <Link to="#app-scaffolder">React App Scaffolder</Link>
            </li>
            <li>
              <Link to="#cognito-auth">Cognito Auth</Link>
            </li>
            <li>
              <Link to="#ts-definitions">Foundations TS Definitions</Link>
            </li>
          </ul>
          <H4 id="api">API Overview</H4>
          <p>
            The Foundations API is organised around{' '}
            <a title="REST" href="http://en.wikipedia.org/wiki/Representational_State_Transfer">
              REST
            </a>{' '}
            with all resources accessible using standard <Link to="#httpmethods">HTTP methods</Link> and returning
            predictable <Link to="#statuscodes">response codes</Link>. All request and response bodies, including
            errors, are encoded in <a href="https://en.wikipedia.org/wiki/JSON">JSON</a> and served over{' '}
            <a href="https://en.wikipedia.org/wiki/Transport_Layer_Security">HTTPS TLS v1.1+</a> to ensure data privacy
            and security.
          </p>
          <p>
            Our API resources are secured and require an{' '}
            <a href="https://en.wikipedia.org/wiki/JSON_Web_Token">authorization JWT bearer token</a> to be submitted as
            part of requests sent to protected endpoints. For more information how our APIs are secured, please see{' '}
            <Link to="#authorization">Authorization</Link>.
          </p>
          <p>
            Alternatively, our <Link to="#developersandbox">Developer Sandbox</Link> provides a quick start experience
            to quickly get to grips with the platform and start developing.
          </p>
          <H4 id="rest">REST</H4>
          <H5 id="httpmethods">HTTP Methods</H5>
          <p>
            Foundation APIs present a uniform interface for performing CRUD (create, retrieve, update, delete)
            operations. Each endpoint adheres to REST guidelines to map the correct verb to the operation being
            performed. Our APIs support the following HTTP methods:
          </p>
          <div className="mb-4">
            <Table
              scrollable
              loading={false}
              columns={[
                {
                  Header: 'Method',
                  accessor: 'method',
                },
                {
                  Header: 'Action',
                  accessor: 'action',
                },
              ]}
              data={[
                {
                  method: 'GET',
                  action: 'Retrieve a resource or collection of resources',
                },
                {
                  method: 'POST',
                  action: 'Create a new resource',
                },
                {
                  method: 'PATCH',
                  action: 'Partially update an existing resource by only including the fields to replace in payload',
                },
                {
                  method: 'DELETE',
                  action: 'Soft delete an existing resource',
                },
              ]}
            />
          </div>
          <H5 id="statuscodes">Response status codes</H5>
          <p>
            Foundation APIs use standardised HTTP status codes to indicate whether a request has been successful or has
            resulted in an error. Below is a listing of the codes our APIs may return and their meaning:
          </p>
          <div className="mb-4">
            <Table
              scrollable
              loading={false}
              columns={[
                {
                  Header: 'Code',
                  accessor: 'code',
                },
                {
                  Header: 'Title',
                  accessor: 'title',
                },
                {
                  Header: 'Description',
                  accessor: 'description',
                },
              ]}
              data={[
                {
                  code: '200',
                  title: 'OK',
                  description: 'The request has been fulfilled.',
                },
                {
                  code: '201',
                  title: 'Created',
                  description: 'The request has been fulfilled and a new resource has been created.',
                },
                {
                  code: '202',
                  title: 'Async created',
                  description: 'The request has been accepted will be fulfilled asynchronously',
                },
                {
                  code: '400',
                  title: 'Bad request',
                  description: `The request was not understood by the server, generally due to bad syntax or because 
                    the "Content-Type" header was not correctly set to <code>application/json</code>.`,
                },
                {
                  code: '401',
                  title: 'Unauthorized',
                  description: `The provided authentication credentials are incorrect or not present. 
                    Generally, this is due to the lack of an "Authorization" header`,
                },
                {
                  code: '403',
                  title: 'Forbidden',
                  description: `The provided authentication credentials do not provide the 
                    request with sufficient scope to fulfill the request.`,
                },
                {
                  code: '404',
                  title: 'Not found',
                  description: 'The requested resource was not found',
                },
                {
                  code: '422',
                  title: 'Unprocessable entity',
                  description: `A validation error has occured. The error response body 
                    will provide additional information on the failure(s).`,
                },
                {
                  code: '429',
                  title: 'Too many requests',
                  description: `The request was not accepted because the application has exceeded the rate limit. 
                    See Rate Limit for an overview of this mechanism`,
                },
                {
                  code: '500',
                  title: 'Too many requests',
                  description: `The request was not accepted because the application has exceeded the rate limit. 
                    See Rate Limit for an overview of this mechanism`,
                },
              ]}
            />
          </div>
          <H4 id="authorization">Authorization</H4>
          <p>
            The Foundation platform uses <a href="https://openid.net/connect/faq/">OpenID Connect</a> (OIDC) as
            it&apos;s Authentication protocol, based on the OAuth 2.0 specification.
          </p>
          <p>
            Our authentication mechanisms allow you to quickly build apps on top of our platform and provide a seamless
            authentication experience for your end users.
          </p>
          <H5>Registering your application</H5>
          <p>
            Your application must be registered with our Marketplace before it can interact with data, functionality and
            assets provided by the Foundations API. For more information on how to register your application, see our
            Marketplace documentation.
          </p>
          <p>
            As part of creating your application, you&apos;ll be required to choose the{' '}
            <a href="https://oauth.net/2/scope/">scopes </a>that you application requires. Scopes govern the actions
            that your application can perform against our services. Each endpoint will detail the scopes that an
            application must be granted in order to interact with it.
          </p>
          <p>
            Once your application has been successfully registered, you will be provided with a unique application id
            which is required to interact with our authorization services.
          </p>
          <H5>Client installation</H5>
          <p>
            Once your application submission has been approved by Reapit, it will appear as a listing in our
            Marketplace. Reapit clients will then be able to interact with your application&apos;s details and
            potentially choose to install it.
          </p>
          <p>
            As part of the installation process, clients are required to agree to the scopes that your application
            requires before your application becomes accessible to end users. Applications cannot interact with client
            data or assets without prior approval from the client.
          </p>
          <p>
            Once installed, an application can access Foundation services on an end users behalf. The recommended way to
            achieve this is to use one of our Client Libraries, however you can interact directly with our APIs as
            detailed below.
          </p>
          <H5>Create an authorization code</H5>
          <p>
            To create an OAuth <a href="https://oauth.net/2/grant-types/authorization-code/">authorization code</a>,
            direct users to the URL documented below where they&apos;ll be prompted to enter their credentials. The
            clientId parameter is required and provided during the Marketplace app registration process.
          </p>
          <p>
            <pre>
              <code>GET https://foundations.reapit.com/oauth/authorize?clientId=xxxxxxxxxxxxxxxx</code>
            </pre>
          </p>
          <p>
            Upon success, the service will direct back to your application with an authorization code provided as a
            query string.
          </p>
          <p>
            <pre>
              <code>https://application.company.com/?code=xxxxxxxxxxxxxxxx</code>
            </pre>
          </p>
          <H5>Exchange code for tokens</H5>
          <p>
            If your application has successfully guided the end user through the OAuth flow and obtained an
            authorization code, you need to send it along with the client id issued to your application during
            Marketplace registration to the following endpoint:
          </p>
          <p className="mb-4">
            <pre>
              <code>
                POST https://foundations.reapit.com/oauth/access_token
                {`
  {
    "clientId" : "xxxxxxxxxxxxxxxx",
    "code" : "xxxxxxxxxxxxxxx"
  }`}
              </code>
            </pre>
          </p>
          <p>
            Issuing a request with a valid authorization code and client id will provide a response in the following
            format:
          </p>
          <p className="mb-4">
            <pre>
              <code>
                Content-Type: application/json
                {`
{
  "id_token" : "xxxxxxxxxxxxxx"
  "refresh_token" : "xxxxxxxxxxxxxx",
  "access_token" : "xxxxxxxxxxxxxx",
  "expires_in" : 3600,
}
              `}
              </code>
            </pre>
          </p>
          <div className="mb-4">
            <Table
              scrollable
              loading={false}
              columns={[
                {
                  Header: 'Attribute',
                  accessor: 'attribute',
                },
                {
                  Header: 'Description',
                  accessor: 'description',
                },
              ]}
              data={[
                {
                  attribute: 'id_token',
                  description: 'A JWT containing claims about the users identity.',
                },
                {
                  attribute: 'refresh_token',
                  description: 'A refresh token that can be issued to get a new id and access token.',
                },
                {
                  attribute: 'access_token',
                  description: 'A JWT to grant access to secured API resources for given set of scopes',
                },
                {
                  attribute: 'expires_in',
                  description: 'A JWT to grant access to secured API resources for given set of scopes',
                },
              ]}
            />
          </div>
          <H5>Create a request</H5>
          <p>
            The access token must then be sent in the Authorization header to be able to access protected Foundation
            APIs.
          </p>
          <p>
            <pre>
              <code>Authorization : Bearer &lt;access token&gt;</code>
            </pre>
          </p>
          <p>Upon recieving an access token, the Foundation will validate the token to ensure:</p>
          <ul>
            <li>The access token is valid, issued from the correct source and not tampered with&gt;</li>
            <li>The access token contains the required scopes to perform the action that the endpoint requires</li>
            <li>The applications access to the end users data has not been revoked.</li>
          </ul>
          <H4 id="developersandbox">Developer Sandbox</H4>
          <p>
            You can use the Foundation API in Sandbox mode which provides a set of demonstration data that can be
            interacted with without affecting any client environment.
          </p>
          <p>
            Upon registering with our developer portal, you can immediately get familiar with the functionality our APIs
            offer and enjoy a hurdle free route to start developing your application
          </p>
          <p>
            Sandbox mode supports processing of all read and write requests so that you can build and test in confidence
            before submitting your application to our Marketplace.
          </p>
          <p>
            To access the sandbox, you&apos;ll need to register for a developer account at our Portal. You&apos;re then
            able to simply use those credentials provide them to our Authorization services in the normal way. The
            access token generated for your developer credentials will point our APIs at your sandbox data.
          </p>
          <p>
            Alternatively, our Interactive API Explorer will automatically grant access to sandbox data when you&apos;re
            logged into the Developer Portal.
          </p>
          <H4 id="errors">Errors</H4>
          <p>
            Unsuccessful requests return an error response in JSON format. This includes a status code, a time stamp and
            textual description of the error:
          </p>
          <p className="mb-4">
            <pre>
              <code>
                Content-Type: application/json
                {`
{
  "statusCode": 404,
  "dateTime": "2019-04-23T18:25:43.511Z",
  "description": "Contact RPT19000001 was not found."
}
              `}
              </code>
            </pre>
          </p>
          <p>Validation errors will also include a breakdown of the problems with the submitted payload:</p>
          <p className="mb-4">
            <pre>
              <code>
                Content-Type: application/json
                {`
{
  "statusCode": 422,
  "dateTime": "2019-04-23T18:25:43.511Z",
  "description": "The submitted payload has failed validation.
                  See the errors list for more information.",
  "errors": [
    {
      "field" : "caption",
      "message" : "Must be less than 50 characters in length."
    }
  ]
}
              `}
              </code>
            </pre>
          </p>
          <H4 id="rate-limits">Rate limits</H4>
          <p>
            You can make 1000 requests per minute to our APIs. Each response will include HTTP headers to provide
            information on the current rate limit statistics.
          </p>
          <div className="mb-4">
            <Table
              scrollable
              loading={false}
              columns={[
                {
                  Header: 'Header',
                  accessor: 'header',
                },
                {
                  Header: 'Attribute',
                  accessor: 'attribute',
                },
              ]}
              data={[
                {
                  header: 'X-RateLimit-Limit',
                  attribute: 'The number of requests that a client is allowed to issue per minute',
                },
                {
                  header: 'X-RateLimit-Remaining',
                  attribute: `The number of requests that a client is allowed to issue in the current rate limit 
                    window before hitting the limit`,
                },
                {
                  header: 'X-RateLimit-Reset',
                  attribute: 'The unix timestamp at which the current rate limit window resets',
                },
                {
                  header: 'Retry-After',
                  attribute: `When the rate limit is hit, this header presents the number of seconds 
                    to wait before attempting another request`,
                },
              ]}
            />
          </div>
          <p>If the rate limit is hit, a response similar to below will be issued:</p>
          <p className="mb-4">
            <pre>
              <code>
                HTTP/1.1 429 Too Many Requests X-RateLimit-Limit: 1000 X-RateLimit-Remaining: 0 X-RateLimit-Reset:
                1402010983 Retry-After: 30
                <br />
                Content-Type: application/json
                {`
{
  "statusCode": 429,
  "dateTime": "2019-04-23T18:25:43.511Z",
  "description": "Rate limit for API requests has been hit.
                  Your limit is 1000 requests per minute.
                  This limit will be reset in 30 seconds."
}
              `}
              </code>
            </pre>
          </p>
          <H4 id="pagingation">Pagination</H4>
          <p>
            All collection API resources can be paged and share a common structure in their responses. Page size and
            offset is controlled by use of standardised query strings.
          </p>
          <H5>Request</H5>
          <p>Unless documented, the default page size is 25 and the maximum is 50.</p>
          <p>
            <pre>
              <code>http://foundations.reapit.com/contacts?pageSize=10&amp;pageNumber=2</code>
            </pre>
          </p>
          <H5>Response</H5>
          <p className="mb-4">
            <pre>
              <code>
                Content-Type: application/json
                {`
{
  "pageNumber": 2,
  "pageSize": 10,
  "pageCount": 10,
  "totalCount" : 142,
  "data" : [
    ...
  ]
}
              `}
              </code>
            </pre>
          </p>
          <H4 id="resource-expansion">Resource expansion</H4>
          <p>
            Some of the top level resources made available by the platform include resource expansion functionality.
            When fetching data from a resource expansion enabled endpoint, clients can optionally request that a
            response includes data from one or more related resources.
          </p>
          <p>
            This ability is to designed to reduce the number of required client-server roundtrips to obtain the data
            that a client needs for a specific use-case.
          </p>
          <p>
            Query parameters are used to govern this functionality, please see the specific documention of each end
            point for details.
          </p>
          <H5>Request</H5>
          <p>
            The example request below will fetch a list of contacts with resource expansion enabled for the identity
            checks nested collection:
          </p>
          <p>
            <pre>
              <code>http://foundations.reapit.com/contacts?embed=identityChecks</code>
            </pre>
          </p>
          <H5>Response</H5>
          <p>
            A paged response from the
            <code>/contacts</code>
            request example above:
          </p>
          <p className="mb-4">
            <pre>
              <code>
                Content-Type: application/json
                {`
{
  "data" :
  [
    {
      "id" : "RPT1900001",
      "title" : "Mr",
      "forename" : "David",
      "surname" : "Smith",
      ...
      "embedded": {
          "identityChecks" :
          [
            {
              "id" : "RPT1900050",
              "contactId" : "RPT1900001",
              "status" : "pending",
              ...
              }
            ]
        }
      }
  ],
  "pageNumber": 1,
  "pageSize": 25,
  "pageCount": 25,
  "totalCount" : 142,
}
              `}
              </code>
            </pre>
          </p>
          <H4>Metadata</H4>
          <p>
            Resources that support editing have a<code>metadata</code>
            attribute available in their payload. This attribute can be used to set a JSON data fragment against a
            specific resource by including the metadata attribute in POST and PATCH requests. This will subsequently be
            included in future fetches of that resource.
          </p>
          <p>
            Metadata should be used to store additional, structured information against an object. This allows our
            clients to build upon the resource returned by the API and create a point of integration between our
            platform and third party applications. A common use case would be to store a unique identifier from an
            external system.
          </p>
          <p>
            Once metadata has been submitted to a representation, a JSON schema is built and used to validate future
            metadata submissions to the same endpoint to keep ensure that data is valid and consistant.
          </p>
          <p>
            Information stored in metadata is specific to your application and is not available to other Reapit or third
            party applications. Do not store any sensitive information (personally identifiable information, bank
            details, etc.) as metadata.
          </p>
          <H4 id="versioning">Versioning</H4>
          <H4 id="elements">Elements</H4>
          <p>
            The Elements UI toolkit you can browse <Link to={Routes.DEVELOPER_ELEMENTS}>here</Link> is available as an
            NPM package. We also support an AMD (require.js), version that may suit your needs better, especially when
            serving content from a CDN or CMS.
          </p>
          <H4 id="app-scaffolder">React App Scaffolder</H4>
          <p>Content</p>
          <H4 id="cognito-auth">Cognito Auth</H4>
          <p>Content</p>
          <H4 id="ts-definitions">Foundations TS Definitions</H4>
          <p>
            If you are using TypeScript (and we recommend you do!), for your front end project, we provide full type
            definitions for the API documented in the <Link to={Routes.DEVELOPER_SWAGGER}>API explorer</Link>. We
            generate these types from the Swagger contracts direct so you can be sure that when the API changes, your
            types will be updated also. This allows for a much closer alignment between front and back end development
            and ultimately more robust applications.
          </p>
        </FlexContainerResponsive>
      </Content>
    </FlexContainerBasic>
  )
}

export default ApiDocsPage