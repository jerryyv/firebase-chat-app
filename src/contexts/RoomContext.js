import { createContext, useContext, useState } from 'react'

const RoomContext = createContext()

function RoomProvider({children}) {
  const [selectedRoomId, setSelectedRoomId] = useState('')
  const value = {selectedRoomId, setSelectedRoomId}

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>
}

function useRoomContext() {
  const context = useContext(RoomContext)
  if (context === undefined) {
    throw new Error('useRoomContext must be used within a RoomProvider')
  }
  return context
}

export {RoomProvider, useRoomContext}