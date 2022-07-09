import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import { useState } from 'react'

import userEvent from '@testing-library/user-event'
import Modal from '.'

const childrenText = 'Lorem ipsum dolor sit amet.'

const FakeModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const handleClose = () => setIsModalVisible(false)

  if (isModalVisible)
    return (
      <Modal title="Foo Baar" onClose={handleClose}>
        <p data-testid="modal-content">{childrenText}</p>
      </Modal>
    )
  else return <></>
}

test('should not be visible after clicking in close button', async () => {
  render(<FakeModal />)

  const user = userEvent.setup()

  await user.click(screen.getByTestId('close-button'))
  expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
})

test('should render the correct title', async () => {
  render(<FakeModal />)

  expect(screen.queryByTestId('modal-title')).toHaveTextContent('Foo Baar')
})

test('should render the correct children content', async () => {
  render(<FakeModal />)

  expect(screen.queryByTestId('modal-content')).toHaveTextContent(childrenText)
})

test('should close on click outside', async () => {
  render(<FakeModal />)

  const user = userEvent.setup()

  await user.click(screen.getByTestId('modal-bg'))
  expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
})
