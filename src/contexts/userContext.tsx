import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface propsTypes {
  children?: JSX.Element | string
  mock?: string
}

interface userContextTypes {
  avatar: string | undefined
  setAvatar: Dispatch<SetStateAction<string | undefined>>
}

const DEFAULT_VALUE = {
  avatar: undefined,
  setAvatar: () => undefined
}

export const UserContext = createContext<userContextTypes>(DEFAULT_VALUE)

export const UserProvider = ({ children, mock }: propsTypes) => {
  const [avatar, setAvatar] = useState<string | undefined>(mock)

  return (
    <UserContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </UserContext.Provider>
  )
}
