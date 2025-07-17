import { create } from "zustand"
import { mockDriveData } from "@/lib/mock-data/drive-data"

export type BackupStatus = "backedUp" | "pending" | "untracked" | "ignored" | "failed"

export interface DriveItem {
  id: string
  name: string
  type: "file" | "folder"
  mimeType: string
  size?: string
  modifiedAt: string
  backupStatus: BackupStatus
  parentId?: string
}

interface DriveBrowserState {
  // Connection state
  isConnected: boolean
  userEmail: string

  // Data state
  allItems: DriveItem[]
  currentFolderId: string | null
  currentItems: DriveItem[]
  breadcrumbs: Array<{ id: string; name: string }>

  // UI state
  isLoading: boolean
  error: string | null
  currentPage: number
  itemsPerPage: number
  showOnlyUnbacked: boolean

  // Actions
  setConnected: (connected: boolean) => void
  initializeMockData: () => void
  navigateToFolder: (folderId: string, folderName: string) => void
  navigateUp: () => void
  setPage: (page: number) => void
  toggleUnbackedFilter: () => void
  setError: (error: string | null) => void
  setLoading: (loading: boolean) => void
}

export const useDriveBrowserStore = create<DriveBrowserState>((set, get) => ({
  // Initial state
  isConnected: false,
  userEmail: "sarah.chen@company.com",
  allItems: [],
  currentFolderId: null,
  currentItems: [],
  breadcrumbs: [{ id: "root", name: "My Drive" }],
  isLoading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 20,
  showOnlyUnbacked: false,

  // Actions
  setConnected: (connected) => set({ isConnected: connected }),

  initializeMockData: () => {
    set({ isLoading: true })

    // Simulate API delay
    setTimeout(() => {
      const items = mockDriveData
      const rootItems = items.filter((item) => !item.parentId)

      set({
        allItems: items,
        currentItems: rootItems,
        isLoading: false,
        error: null,
      })
    }, 800)
  },

  navigateToFolder: (folderId, folderName) => {
    const { allItems, breadcrumbs } = get()
    const folderItems = allItems.filter((item) => item.parentId === folderId)

    set({
      currentFolderId: folderId,
      currentItems: folderItems,
      breadcrumbs: [...breadcrumbs, { id: folderId, name: folderName }],
      currentPage: 1,
    })
  },

  navigateUp: () => {
    const { breadcrumbs, allItems } = get()
    if (breadcrumbs.length <= 1) return

    const newBreadcrumbs = breadcrumbs.slice(0, -1)
    const parentId = newBreadcrumbs[newBreadcrumbs.length - 1]?.id

    const items =
      parentId === "root"
        ? allItems.filter((item) => !item.parentId)
        : allItems.filter((item) => item.parentId === parentId)

    set({
      currentFolderId: parentId === "root" ? null : parentId,
      currentItems: items,
      breadcrumbs: newBreadcrumbs,
      currentPage: 1,
    })
  },

  setPage: (page) => set({ currentPage: page }),

  toggleUnbackedFilter: () => {
    const { showOnlyUnbacked, allItems, currentFolderId } = get()
    const newFilter = !showOnlyUnbacked

    let items = currentFolderId
      ? allItems.filter((item) => item.parentId === currentFolderId)
      : allItems.filter((item) => !item.parentId)

    if (newFilter) {
      items = items.filter((item) => item.backupStatus !== "backedUp")
    }

    set({
      showOnlyUnbacked: newFilter,
      currentItems: items,
      currentPage: 1,
    })
  },

  setError: (error) => set({ error }),
  setLoading: (loading) => set({ isLoading: loading }),
}))
