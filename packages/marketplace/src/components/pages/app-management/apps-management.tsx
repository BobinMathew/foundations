import * as React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router'
import { History } from 'history'
import { Loader, Pagination, H3 } from '@reapit/elements'
import ErrorBoundary from '@/components/hocs/error-boundary'
import routes from '@/constants/routes'
import AppList from '@/components/ui/app-list'
import { selectAppsListState } from '@/selector/apps'
import { AppSummaryModel } from '@reapit/foundations-ts-definitions'
import { handleLaunchApp } from '@/utils/launch-app'
import Routes from '@/constants/routes'
import { getParamsFromPath } from '@/utils/client-url-params'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '@/core/connect-session'

export const handleOnChange = history => (page: number) => history.push(`${routes.MY_APPS}?page=${page}`)

export const handleOnSettingClick = (history: History) => (app: AppSummaryModel) => {
  history.push(`${Routes.APPS}/${app.id}/manage`)
}

export const AppsManagement: React.FunctionComponent = () => {
  const history = useHistory()
  const location = useLocation()
  const installedApps = useSelector(selectAppsListState)
  const { connectIsDesktop } = useReapitConnect(reapitConnectBrowserSession)

  const queryParams = getParamsFromPath(location.search)
  const { page: pageNumber = 1 } = queryParams

  const loading = installedApps.isLoading
  const list = installedApps?.data || []
  const { totalCount, pageSize } = installedApps || {}

  return (
    <ErrorBoundary>
      <H3 isHeadingSection>Manage Apps</H3>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AppList
            list={list}
            loading={loading}
            onCardClick={(app: AppSummaryModel) => handleLaunchApp(app, connectIsDesktop)}
            onSettingsClick={handleOnSettingClick(history)}
            infoType="INSTALLED_APPS_EMPTY"
          />
          <Pagination
            totalCount={totalCount}
            pageSize={pageSize}
            pageNumber={pageNumber}
            onChange={handleOnChange(history)}
          />
        </>
      )}
    </ErrorBoundary>
  )
}

export default AppsManagement
