import * as React from 'react'
import { checkbox, arrow, container, red, green } from './__styles__/pending-revision-comparison'

export interface DiffCheckboxProps {
  currentChecked: boolean
  changedChecked: boolean
  dataTest?: string
}

const DiffCheckbox = ({ currentChecked, changedChecked, dataTest }: DiffCheckboxProps) => {
  const changed = currentChecked !== changedChecked

  return (
    <div className={container} data-test={dataTest || ''}>
      <span className={`${checkbox} ${changed ? red : ''}`}>
        <input type="checkbox" checked={currentChecked} readOnly data-test="current" />
      </span>
      {changed && <span className={arrow}>&#8594;</span>}
      {changed && (
        <span className={`${checkbox} ${green}`}>
          <input type="checkbox" checked={changedChecked} readOnly data-test="changed" />
        </span>
      )}
    </div>
  )
}

export default DiffCheckbox
