import { useEffect, useState } from "react";
import { atom, subscribe } from "value-stores";

export function useAtom<T>(callback: () => T, deps?: unknown[]) {
  const [state, SetState] = useState(callback);
  useEffect(() => {
    SetState(callback);
    return subscribe(callback, SetState);
  }, deps ?? []);

  return state;
}
