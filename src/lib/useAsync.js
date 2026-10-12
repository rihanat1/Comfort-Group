import { useCallback, useEffect, useState } from "react";

// Runs an async function on mount and tracks loading / error / data.
// Pass a stable function (e.g. one imported from an api/ file); `reload`
// re-runs it, e.g. for a retry button.
export function useAsync(fn) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState({ attempt: -1, data: null, error: null });

  useEffect(() => {
    let cancelled = false;
    fn()
      .then((data) => !cancelled && setResult({ attempt, data, error: null }))
      .catch((error) => !cancelled && setResult({ attempt, data: null, error }));
    return () => {
      cancelled = true;
    };
  }, [fn, attempt]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);

  // Loading until the result for the latest attempt arrives.
  const loading = result.attempt !== attempt;

  return {
    data: loading ? null : result.data,
    error: loading ? null : result.error,
    loading,
    reload,
  };
}
