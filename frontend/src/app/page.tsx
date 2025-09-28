import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="dark">
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="fixed inset-x-0 top-4 z-50">
          <div className="mx-auto max-w-2xl px-6">
            <div className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 px-6 py-3">
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">Laissez</div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen w-full flex items-center">
          <div className="absolute inset-0 -z-10">
            <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-[40vh] w-[60vw] rounded-full bg-emerald-700/20 blur-3xl" />
          </div>
          <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              All‑in‑one agentic payments with observability and control
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Companies lack visibility into agentic spend. Laissez offers unified observability and policy‑driven controls for every payment your agents make via the x402 protocol.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-emerald-700 hover:bg-emerald-600">
                <Link href="/platform">Launch platform</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem / Why Section */}
        <section className="min-h-screen w-full flex items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold">Why enterprises need Laissez</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Get a breakdown of agent spend, enforce policies, and keep budgets safe while your agents move fast.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
                <CardHeader>
                  <CardTitle>Observability</CardTitle>
                  <CardDescription>Real‑time visibility into every transaction initiated by your agents.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Trace spend by agent, project, and wallet. Detect anomalies before they become incidents.
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
                <CardHeader>
                  <CardTitle>Policy control</CardTitle>
                  <CardDescription>Allow or deny actions with declarative policies.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Define what agents can do, where, and for how much. Block risky vendors or categories.
                </CardContent>
              </Card>
              <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
                <CardHeader>
                  <CardTitle>Audit & compliance</CardTitle>
                  <CardDescription>Every action is logged, attributed, and exportable.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Ship audits in hours, not weeks. Laissez keeps you ready for review.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="min-h-screen w-full flex items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <div className="mb-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold">Simple by design</h2>
              <p className="text-muted-foreground mt-2">Create wallets. Write policies. Connect your Laissez MCP server to your AI systems.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
                <CardHeader>
                  <CardTitle>1. Create wallets</CardTitle>
                  <CardDescription>Scoped to projects, teams, or agents.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
                <CardHeader>
                  <CardTitle>2. Write policies</CardTitle>
                  <CardDescription>Budgets, vendors, limits, approvals.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
                <CardHeader>
                  <CardTitle>3. Connect MCP</CardTitle>
                  <CardDescription>Use x402 for agentic payments in production.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="min-h-screen w-full flex items-center">
          <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-semibold">Try Laissez</h2>
            <p className="text-muted-foreground max-w-xl">
              Get observability, policies, and peace of mind for agentic payments.
            </p>
            <Button asChild className="bg-emerald-700 hover:bg-emerald-600">
              <Link href="/platform">Go to platform</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
