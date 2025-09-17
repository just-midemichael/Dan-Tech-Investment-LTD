"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({ key: "css", prepend: true });

export function AppRouterCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
