import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import FormCard from '.'

test('should hide the content on click', async () => {
  const user = userEvent.setup()
  const example = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

  render(
    <FormCard title="Hello John Doe">
      <p data-testid="example">{example}</p>
    </FormCard>
  )

  expect(screen.getByTestId('example')).toBeVisible()
  await user.click(screen.getByTestId('arrow-button'))
  expect(screen.getByTestId('example')).not.toBeVisible()
})

test("should not lose content whein it's hidden", async () => {
  const user = userEvent.setup()

  render(
    <FormCard title="Hello John Doe">
      <input type="text" data-testid="input" />
    </FormCard>
  )

  const input = screen.getByTestId('input') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'John Doe' } })

  expect(input).toHaveValue('John Doe')

  await user.click(screen.getByTestId('arrow-button'))
  await user.click(screen.getByTestId('arrow-button'))

  expect(input).toHaveValue('John Doe')
})
