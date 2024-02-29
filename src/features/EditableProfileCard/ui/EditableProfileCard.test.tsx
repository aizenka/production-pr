import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile } from 'entities/Profile'
import $api from 'shared/api/axios'
import { renderComponent } from 'shared/lib/tests'
import { profileReducer } from '../model/slice/profileSlice'
import { EditableProfileCard } from './EditableProfileCard'

const mockProfileData:Profile = {
  id: '1',
  firstName: 'admin',
  lastName: 'admin',
  age: 44,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Akkgl',
  username: 'admin556'
}

describe('editableProfileCardTest', () => {
  beforeEach(() => {
    renderComponent(<EditableProfileCard id='1' /> , {
      initialState: {
        profile: {
          readonly: true,
          data: mockProfileData,
          form: mockProfileData
        },
        user: {
          authData: { id: '1' }
        }
      },
      asyncReducers: {
        profile: profileReducer
      }
    })
  })

  test('profile card should become editable', async () => {
    const editBtn = screen.getByTestId('EditableProfileHeader.EditBtn')
    await userEvent.click(editBtn)
    expect(editBtn).not.toBeInTheDocument()

    expect(screen.getByTestId('EditableProfileHeader.CancelBtn')).toBeInTheDocument()
    expect(screen.getByTestId('EditableProfileHeader.SaveBtn')).toBeInTheDocument()
  })

  test('pressing the cancel button should reset the state', async () => {
    const editBtn = screen.getByTestId('EditableProfileHeader.EditBtn')
    await userEvent.click(editBtn)
    expect(editBtn).not.toBeInTheDocument()

    const firstNameInput = screen.getByTestId('ProfileCard.firstName')
    const lastNameInput = screen.getByTestId('ProfileCard.lastName')

    await userEvent.clear(firstNameInput)
    await userEvent.clear(lastNameInput)

    await userEvent.type(firstNameInput, 'user')
    await userEvent.type(lastNameInput, 'user1')

    expect(firstNameInput).toHaveValue('user')
    expect(lastNameInput).toHaveValue('user1')

    const cancelBtn = screen.getByTestId('EditableProfileHeader.CancelBtn')
    expect(cancelBtn).toBeInTheDocument()

    await userEvent.click(cancelBtn)

    expect(firstNameInput).toHaveValue('admin')
    expect(lastNameInput).toHaveValue('admin')

    expect(screen.getByTestId('EditableProfileHeader.EditBtn')).toBeInTheDocument()
  })

  test('an error should appear when entering incorrect values', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileHeader.EditBtn'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'))

    await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveBtn'))

    expect(screen.getByTestId('EditableProfileCard.TextError.Paragraph')).toBeInTheDocument()
  })

  test('if there are no validation errors, then a PUT request should be sent to server', async () => {
    const jestMockRequest = jest.spyOn($api, 'put')
    await userEvent.click(screen.getByTestId('EditableProfileHeader.EditBtn'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user')

    await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveBtn'))

    expect(jestMockRequest).toHaveBeenCalled()
  })
})