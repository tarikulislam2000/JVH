"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-GB">
      <body
        style={{
          fontFamily: "system-ui",
          display: "grid",
          minHeight: "100dvh",
          placeItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Something went wrong</h1>
          <button onClick={reset}>Try again</button>
        </div>
      </body>
    </html>
  );
}
