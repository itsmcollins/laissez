"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy } from "lucide-react"
import { createEvmAccount } from "@/lib/utils"

type Wallet = {
  id: string
  name: string
  policies: string
  address: string
  balance: number
}

export default function PlatformPage() {
  const [wallets, setWallets] = React.useState<Wallet[]>([])
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [policies, setPolicies] = React.useState("")
  const [address, setAddress] = React.useState("")

  function resetForm() {
    setName("")
    setPolicies("")
    setAddress("")
  }

  function generateAddress() {
    const { address } = createEvmAccount()
    return address
  }

  function handleCreateDraft() {
    const addr = address || generateAddress()
    setAddress(addr)
  }

  function handleCopy() {
    if (!address) return
    navigator.clipboard.writeText(address)
    toast.success("Address copied to clipboard")
  }

  function handleSave() {
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now())
    const walletAddress = address || generateAddress()
    const walletName = name.trim() || "Untitled wallet"
    setWallets((prev) => [
      ...prev,
      { id, name: walletName, policies, address: walletAddress, balance: 10 },
    ])
    toast.success(`${walletName} created with $10 testnet USDC`)
    setOpen(false)
    resetForm()
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Title */}
        <div className="flex items-center justify-center py-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Laissez</h1>
        </div>

        {/* Wallets Section */}
        <div className="mt-4 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Wallets</h2>
          <Card className="backdrop-blur-xl bg-white/[0.04] border-white/10">
            <CardHeader>
              <CardTitle>Manage wallets</CardTitle>
              <CardDescription>Create and view wallets for teams, projects, or agents.</CardDescription>
              <CardAction>
                <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (v) handleCreateDraft() }}>
                  <DialogTrigger asChild>
                    <Button className="bg-emerald-700 hover:bg-emerald-600">Create wallet</Button>
                  </DialogTrigger>
                  <DialogContent className="bg-background text-foreground">
                    <DialogHeader>
                      <DialogTitle>Create wallet</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-2">
                      <div className="grid gap-2">
                        <Label htmlFor="wallet-name">Name</Label>
                        <Input
                          id="wallet-name"
                          placeholder="ex: Research, Growth, Agent‑A"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="wallet-policies">Policies</Label>
                        <Textarea
                          id="wallet-policies"
                          placeholder="Describe budgets, limits, allowed vendors, approvals, etc."
                          value={policies}
                          onChange={(e) => setPolicies(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Wallet address</Label>
                        <div className="flex items-center gap-2">
                          <Input readOnly value={address} placeholder="Will generate on open" />
                          <Button variant="outline" className="shrink-0" onClick={handleCopy}>
                            <Copy />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Claim your free $10 testnet USDC for this wallet via the Circle Faucet. Paste the address above at
                          {" "}
                          <a className="underline" href="https://faucet.circle.com" target="_blank" rel="noreferrer">Circle Faucet</a>.
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleSave} className="bg-emerald-700 hover:bg-emerald-600">Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardAction>
            </CardHeader>
            <CardContent>
              {wallets.length === 0 ? (
                <div className="text-sm text-muted-foreground py-10 text-center">
                  No wallets yet. Create your first wallet to get started.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {wallets.map((w) => (
                    <Dialog key={w.id}>
                      <DialogTrigger asChild>
                        <Card className="bg-white/[0.03] border-white/10 cursor-pointer hover:bg-white/[0.05] transition-colors">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <CardTitle className="text-base">{w.name}</CardTitle>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-semibold">${w.balance.toFixed(2)} USDC</div>
                                <div className="text-[10px] text-muted-foreground break-all">{w.address}</div>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="bg-background text-foreground">
                        <DialogHeader>
                          <DialogTitle>{w.name}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-2">
                          <div className="grid gap-1">
                            <Label>Balance</Label>
                            <div className="text-sm">${w.balance.toFixed(2)} USDC</div>
                          </div>
                          <div className="grid gap-1">
                            <Label>Address</Label>
                            <div className="flex items-center gap-2">
                              <Input readOnly value={w.address} />
                              <Button
                                variant="outline"
                                className="shrink-0"
                                onClick={() => {
                                  navigator.clipboard.writeText(w.address)
                                  toast.success("Address copied to clipboard")
                                }}
                              >
                                <Copy />
                              </Button>
                            </div>
                          </div>
                          <div className="grid gap-1">
                            <Label>Policies</Label>
                            <Textarea readOnly value={w.policies || ""} />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


