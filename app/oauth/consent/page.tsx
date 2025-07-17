import { OAuthConsentHeader } from "@/components/oauth-consent/oauth-consent-header"
import { ScopeExplanation } from "@/components/oauth-consent/scope-explanation"
import { SecurityAssurances } from "@/components/oauth-consent/security-assurances"
import { VisualFlow } from "@/components/oauth-consent/visual-flow"
import { ConsentActions } from "@/components/oauth-consent/consent-actions"
import { Header } from "@/components/header"

export default function OAuthConsentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <OAuthConsentHeader />
        <div className="my-8">
          <ConsentActions />
        </div>
        <div className="space-y-12">
          <ScopeExplanation />
          <SecurityAssurances />
          <VisualFlow />
        </div>
      </main>
    </div>
  )
}
