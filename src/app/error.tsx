"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-dvh place-items-center p-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-ink/60">
          Please try again. If the problem continues, contact support.
        </p>
        <Button size="lg" className="mt-6" onClick={reset}>
          Try again
        </Button>
      </div>
    </main>
  );
}
