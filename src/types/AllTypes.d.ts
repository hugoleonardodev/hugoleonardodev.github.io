import { type User } from 'next-auth'
import { type Infer } from 'next/dist/compiled/superstruct'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import { type StaticImageData } from 'next/image'
import type React from 'react'
import { type FieldErrorsImpl, type FieldError, type UseFormRegister, type UseFormSetValue } from 'react-hook-form'

declare module 'next-auth' {
  export interface Session {
    accessToken?: string // token from Google
    user: User // user from Google
    access_token?: string // token from opu_backend
  }
}
export interface RegisterFormData {
  userEmail: string
  userPassword: string
  confirmPassword: string
  termsAndConditions: string
}

export interface LoginFormData {
  userEmail: string
  userPassword: string
  stayConnected?: boolean
}

export type AuthFormData = Infer<RegisterFormData | LoginFormData>

export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export interface FormFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  type: InputType
  placeholder: string
  name: ValidFieldNames
  label: string
  register: UseFormRegister<AuthFormData>
  dirtyField?: boolean
  touchedField?: boolean
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  min?: string | number
  max?: string | number
  minLength?: number
  maxLength?: number
  valueAsNumber?: boolean
  disabled?: boolean
  pattern?: string
  value?: string | number | readonly string[] | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export interface InputTextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  // type: InputType
  placeholder: string
  name: ValidFieldNames
  label: string
  register: UseFormRegister<AuthFormData>
  dirtyField?: boolean
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined | undefined
  valueAsNumber?: boolean
  disabled?: boolean
  pattern?: string
  value?: string | number | readonly string[] | undefined
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

interface SelectOptionData {
  description: string
  value: string
}

export interface InputSelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  name: ValidFieldNames
  label: string
  register: UseFormRegister<AuthFormData>
  dirtyField?: boolean
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined | undefined
  valueAsNumber?: boolean
  disabled?: boolean
  options: SelectOptionData[]
  defaultValue?: string
  value?: string | number | readonly string[] | undefined
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export interface LocationData {
  name: string
  code: string
  flag: string | StaticImageData | StaticImport
  dial_code: string
}

export interface CityData {
  name: string
  code: string
  cities: string[]
}

export interface ProfileLocations {
  country: LocationData | null
  state?: LocationData | null
  city?: string | null
}

export interface UserData {
  // firstName: string
  // lastName: string
  userCategory: string
  userCountry: string
  userState: string
  userCity: string
  userQuote?: string
  userPhone: string
  startedAt: Date
  userSocialMedia?: string
  userPicture: string
  userAvatar: string
  userLevel: '1' | '2' | '3'
  // termsAndConditions: string
  // isPrivate: boolean
  // isComplete: boolean
  // isGroupOwner: boolean
  // isEventOwner: boolean
  // isPlaceOwner: boolean
  // userGroup: string
}

export interface GroupData {
  groupId: string
  groupName: string
  groupType: string
  groupAdmin: string
  groupLogo: string
  groupPhone: string
  groupDescription: string
  groupCategory: string
  groupCountry: string
  groupState: string
  groupCity: string
  startedAt: Date
  // termsAndConditions: string
  groupSocialMedia: string
  groupCategories: string
  groupTypes: string
  groupVenue?: string | undefined
  groupLocation?: string | undefined
}

enum EventTypes {
  PROMOTIONAL = 'promotional',
  COMPETITION = 'competition',
  TOUR = 'tour',
  ARTISTIC = 'artisctic',
  MEETING = 'meeting',
  LECTURE = 'lecture',
}

export interface EventData {
  eventId: string
  eventName: string
  eventType: EventTypes
  eventLocation: string
  eventDescription: string
  eventArt: string
  eventOwner: string
  eventDate: string
  createdAt: Date
  startsAt: string
  endsAt: string
  eventIsPrivate: boolean
  eventChat: string
  eventCountry: string
  eventState: string
  eventCity: string
  // termsAndConditions: string
  eventSponsors: string | string[]
  eventPartners: string | string[]
}

export interface PlaceData {
  placeId: string
  placeName: string
  placeType: string
  placeOwner: string
  placeChat: string
  placePicture: string
  placeDescription: string
  placeLocation: string
  placeCountry: string
  placeState: string
  placeCity: string
  startedAt: Date
  publishedBy: string
  // termsAndConditions: string
  recommendedGears: string
  recommendedLevels: string | string[]
}

export interface LocationFieldsAvailable {
  userCountry: string
  userState: string
  userCity: string
  groupCountry: string
  groupState: string
  groupCity: string
}

export type AutocompelteCountriesProps = FormFieldProps & {
  // control: Control<FieldValues> | Infer<Control<FieldValues>>
  isLoading?: boolean
  setLocationsState: React.Dispatch<React.SetStateAction<ProfileLocations>>
  locationState: ProfileLocations
  // data?: LocationData[] | CityData[]
  onChange: (...event: any[]) => void
  value: string
  clearData: UseFormSetValue<UserData> | React.Dispatch<React.SetStateAction<ProfileLocations>>
}

// export type AutocompelteCountriesGroupProps = AutocompelteCountriesProps & {
//   clearData: UseFormSetValue<GroupData>
// }

export type AllFieldValues = UserData | GroupData | EventData | PlaceData

export type AutocompleteStateWithData = FormFieldProps & {
  // control: Control<FieldValues> | Infer<Control<FieldValues>>
  isLoading?: boolean
  setLocationsState: React.Dispatch<React.SetStateAction<ProfileLocations>>
  locationState: ProfileLocations
  data: LocationData[]
  onChange: (...event: any[]) => void
  value: string
  clearData: UseFormSetValue<UserData> | React.Dispatch<React.SetStateAction<ProfileLocations>>
}

export type AutocompleteCityWithData = FormFieldProps & {
  // control: Control<FieldValues> | Infer<Control<FieldValues>>
  isLoading?: boolean
  setLocationsState: React.Dispatch<React.SetStateAction<ProfileLocations>>
  locationState: ProfileLocations
  data: CityData[]
  onChange: (...event: any[]) => void
  value: string
  clearData: UseFormSetValue<UserData> | React.Dispatch<React.SetStateAction<ProfileLocations>>
}

export interface CategoryIconData {
  code: string
  icons: StaticImageData[]
}

export type AutocompleteCategoriesData = FormFieldProps & {
  // control: Control<FieldValues> | Infer<Control<FieldValues>>
  isLoading?: boolean
  // data: CategoryIconData[]

  setCurrentSelected: React.Dispatch<React.SetStateAction<string | null>>
  currentSelected: string | null
  onChange: (...event: any[]) => void
  value: string
  clearData: UseFormSetValue<UserData>
}

export type ValidFieldNames =
  | 'firstName'
  | 'lastName'
  | 'userCategory'
  | 'userLocation'
  | 'userCountry'
  | 'userState'
  | 'userCity'
  | 'userQuote'
  | 'userPhone'
  | 'userLevel'
  | 'startedAt'
  | 'registeredAt'
  | 'userSocialMedia'
  | 'userPicture'
  | 'userAvatar'
  | 'userSessionToken'
  | 'userEmail'
  | 'userPassword'
  | 'confirmPassword'
  | 'termsAndConditions'
  | 'stayConnected'
  | 'referenceToken'
  | 'groupName'
  | 'groupType'
  | 'groupAdmin'
  | 'groupLogo'
  | 'groupDescription'
  | 'groupCategory'
  | 'groupPhone'
  | 'groupGallery'
  | 'groupSocialMedia'
  | 'groupLocation'
  | 'groupCountry'
  | 'groupState'
  | 'groupCity'
  | 'groupVenue'
  | 'groupCategories'
  | 'groupTypes'
  | 'eventName'
  | 'eventType'
  | 'eventRecurrency'
  | 'eventLocation'
  | 'eventCountry'
  | 'eventState'
  | 'eventCity'
  | 'eventDescription'
  | 'eventArt'
  | 'eventOwner'
  | 'eventDate'
  | 'createdAt'
  | 'startsAt'
  | 'endsAt'
  | 'eventIsPrivate'
  | 'eventChat'
  | 'placeName'
  | 'placeChat'
  | 'placeType'
  | 'placeOwner'
  | 'placePicture'
  | 'placeDescription'
  | 'placeLocation'
  | 'placeCountry'
  | 'placeState'
  | 'placeCity'
  | 'publicPrivateRadio'
  | 'indoorOutdoorRadio'
  | 'adultsChildrenRadio'
  | 'petsRadio'
  | 'recommendedGears'
  | 'searchTerm'

export type PlaceRadioFields = 'publicPrivateRadio' | 'indoorOutdoorRadio' | 'adultsChildrenRadio' | 'petsRadio'

interface ContextProvider {
  children?: React.ReactNode
}

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  onConfirm: (event: React.MouseEvent<HTMLAnchorElement>) => void
  href: string
  text?: string
}

type WorldDataResponse = Record<string, { category: string; value: string }>

export interface StateWithModalProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string
  path: string
  circle?: string | undefined
  text: string
  transform: string
  countData: WorldDataResponse
}

export interface UserAuthResponse {
  userId: string
  googleId: string | null
  userAvatar: string | null
  referenceToken: string | null
  firstName: string | null
  lastName: string | null
  userLevel: string | null
  userCountry: string | null
  userState: string | null
  userCity: string | null
  bornAt: string | null
  startedAt: string | null
  registeredAt: string
  // userGender: any
  userEmail: string
  roles: string
  // _userPassword: string
  userPhone: string | null
  userSocialMedia: string | null
  userPicture: string | null
  userQuote: string | null
  isPrivate: boolean
  isComplete: boolean
  isGroupOwner: boolean
  isPlaceOwner: boolean
  isEventOwner: boolean
  userCategory: string
  userGroup: string | null
  userPlace: string | null
  userEvent: string | null
  // favoritePlaces: any[]
  // favoriteGroups: any[]
  // favoriteCategories: any[]
  termsAndConditions: string
  userSessionToken: string | null
  iat: number
  exp: number
}

export interface HelpWithPicture {
  title: string
  button: string
  h1: string
  h2: string
  recommended: RecommendedCloud[]
}

export interface RecommendedCloud {
  title: string
  link: string
  p1: string
  p2: string
}

export interface HelpWithLocation {
  button: string
  title: string
  h1: string
  p1: string
  li1: string
  li2: string
  li3: string
  understood: string
  goToGoogle: string
}

export interface SelectOptionsData {
  value: string
  description: string
}

export interface JumbotronMainProps {
  mainDictionary: {
    title: string
    description: string
    h1: string
    h2: string
    p1: string
    link: {
      about: string
      text: string
    }
    profiles: {
      title: string
      description: string
      h1: string
      link: {
        register: string
        text: string
      }
    }
    groups: {
      title: string
      description: string
      h1: string
      p1: string
      p2: string
      p3: string
      link: {
        group: string
        text: string
      }
    }
    events: {
      title: string
      description: string
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
    }
    places: {
      title: string
      description: string
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
    }
    news: {
      title: string
      description: string
      p1: string
      p2: string
      p3: string
      p4: string
      p5: string
    }
  }
}
