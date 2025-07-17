"use client"

import { useEffect } from "react"
import { DashboardHeader } from "@/components/drive-browser/dashboard-header"
import { MinimalBreadcrumb } from "@/components/drive-browser/minimal-breadcrumb"
import { MinimalFileTable } from "@/components/drive-browser/minimal-file-table"
import { MinimalPagination } from "@/components/drive-browser/minimal-pagination"
import { MinimalEmptyState } from "@/components/drive-browser/minimal-empty-state"
import { MinimalLoadingState } from "@/components/drive-browser/minimal-loading-state"
import { DriveBrowserError } from "@/components/drive-browser/drive-browser-error"
import { DriveConnectionBanner } from "@/components/drive-browser/drive-connection-banner"
import { useDriveBrowserStore } from "@/lib/stores/use-drive-browser-store"
import { Header } from "@/components/header"

export default function StoragePage() {
  const { isLoading, error, isConnected, currentItems, initializeMockData, setConnected } = useDriveBrowserStore()

  useEffect(() => {
    // Simulate OAuth success and initialize mock data
    setConnected(true)
    initializeMockData()
  }, [setConnected, initializeMockData])

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <main className="container mx-auto px-6 py-12">
          <DriveConnectionBanner />
        </main>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Header />
        <main className="container mx-auto px-6 py-12">
          <DriveBrowserError error={error} />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <DashboardHeader />

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800">
              <MinimalBreadcrumb />
            </div>

            <div className="p-6">
              {isLoading ? (
                <MinimalLoadingState />
              ) : currentItems.length === 0 ? (
                <MinimalEmptyState />
              ) : (
                <MinimalFileTable />
              )}
            </div>

            {!isLoading && currentItems.length > 0 && (
              <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800">
                <MinimalPagination />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
