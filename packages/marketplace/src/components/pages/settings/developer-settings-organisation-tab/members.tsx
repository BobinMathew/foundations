import React from 'react'
import { H3, FlexContainerResponsive, Content, FlexContainerBasic, Table } from '@reapit/elements'
import SetAsAdminModal from '@/components/ui/developer-settings/set-as-admin-modal'
import SetMemberStatusModal from '@/components/ui/organisation-set-member-status-modal'
import styles from '@/styles/elements/link.scss?mod'
import { developerStub } from '@/sagas/__stubs__/developer'

interface CellNameProps {
  row: {
    original: {
      email: string
      title: string
    }
  }
}

export const CellName: React.FC<CellNameProps> = ({
  row: {
    original: { email, title },
  },
}) => {
  return (
    <FlexContainerBasic flexColumn centerContent>
      <div>{email}</div>
      <div>{title}</div>
    </FlexContainerBasic>
  )
}

export const columns = [
  {
    Header: 'Name',
    Cell: CellName,
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Tel',
    accessor: 'tel',
  },
  {
    Header: 'User Account',
    accessor: 'userAccount',
  },
  {
    Header: 'Status',
    id: 'status',
  },
  {
    accessor: 'action',
    columnProps: {
      style: { minWidth: '105px' },
    },
  },
]

const mockData = [developerStub]

export const prepareData = (data, handleOpenSetAdminModal, setSelectedUser, setEditStatusModalVisible) => {
  return data.map(user => ({
    ...user,
    action: (
      <FlexContainerBasic centerContent flexColumn>
        <a
          className={styles.hyperlinked}
          onClick={openSetMemberStatusModal(setSelectedUser, setEditStatusModalVisible, user)}
        >
          {user.isInactive ? 'Enable' : 'Disable'}
        </a>
        <a
          data-test="button-cancel"
          className={styles.hyperlinked}
          onClick={() => {
            setSelectedUser(user)
            handleOpenSetAdminModal()
          }}
        >
          Set as Admin
        </a>
      </FlexContainerBasic>
    ),
  }))
}

export const handleToggleVisibleModal = (setModalOpen: React.Dispatch<boolean>, isVisible: boolean) => () => {
  setModalOpen(isVisible)
}

export const closeSetMemberStatusModal = (
  setEditStatusModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => () => {
  setEditStatusModalVisible(false)
}

export const openSetMemberStatusModal = (setSelectedUser, setEditStatusModalVisible, user) => () => {
  setSelectedUser(user)
  setEditStatusModalVisible(true)
}

export const Members: React.FC = () => {
  const [isSetAdminModalOpen, setIsSetAdminModalOpen] = React.useState<boolean>(false)
  const [selectedUser, setSelectedUser] = React.useState<any>(null)
  const [editStatusModalVisible, setEditStatusModalVisible] = React.useState<boolean>(false)

  const handleOpenSetAdminModal = handleToggleVisibleModal(setIsSetAdminModalOpen, true)
  const handleCloseSetAdminModal = handleToggleVisibleModal(setIsSetAdminModalOpen, false)

  const data = prepareData(mockData, handleOpenSetAdminModal, setSelectedUser, setEditStatusModalVisible)

  return (
    <FlexContainerBasic flexColumn hasPadding>
      <Content>
        <FlexContainerResponsive flexColumn hasBackground hasPadding>
          <H3>Members</H3>
          <Table scrollable={true} loading={false} data={data} columns={columns} />
        </FlexContainerResponsive>
      </Content>
      <SetMemberStatusModal
        visible={editStatusModalVisible}
        developer={selectedUser}
        onCancel={closeSetMemberStatusModal(setEditStatusModalVisible)}
        onSuccess={closeSetMemberStatusModal(setEditStatusModalVisible)}
      />
      <SetAsAdminModal
        visible={isSetAdminModalOpen}
        afterClose={handleCloseSetAdminModal}
        username={selectedUser?.name}
      />
    </FlexContainerBasic>
  )
}