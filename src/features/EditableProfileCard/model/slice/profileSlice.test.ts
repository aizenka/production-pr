import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { updateProfileData } from '../services'
import type { ProfileSchema } from '../types/EditableProfileCardSchema'
import { profileActions, profileReducer } from './profileSlice'
import { ValidateProfileError } from '../consts'

const profileData = {
  firstName: 'asd',
  lastName: 'dsa',
  age: 33,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin'
}

describe('profileSliceTest', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false
    }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: { username: '' }
    }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateProfileErrors: [],
      data: profileData,
      form: profileData
    })
  })

  test('test update profile form', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '' }
    }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfileForm({
        username: '12345'
      }))
    ).toEqual({
      form: { username: '12345' }
    })
  })

  test('test update profile form service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateProfileErrors: [ValidateProfileError.SERVER_ERROR]
    }

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateProfileErrors: undefined
    })
  })

  test('test update profile form service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(profileData, '')
    )).toEqual({
      isLoading: false,
      validateProfileErrors: undefined,
      readonly: true,
      form: profileData,
      data: profileData
    })
  })
})