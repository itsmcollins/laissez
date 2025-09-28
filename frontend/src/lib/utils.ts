import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// EVM account helpers using viem
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"

export type EvmAccount = {
  address: string
  privateKey: `0x${string}`
}

export function createEvmAccount(): EvmAccount {
  const privateKey = generatePrivateKey()
  const account = privateKeyToAccount(privateKey)
  return {
    address: account.address,
    privateKey,
  }
}
