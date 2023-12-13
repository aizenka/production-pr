export { ProfileCard } from './ui/ProfileCard/ProfileCard'
export type { Profile, ProfileSchema } from './model/types/Profile'
export { profileReducer, profileActions } from './model/slice/profileSlice'
export { fetchProfileData } from './model/services'