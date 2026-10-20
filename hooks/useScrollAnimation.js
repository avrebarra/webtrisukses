import { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";

// reuse getScrollAnimation — ponytail rung 2 (reuse) + rung 3 (stdlib useMemo)
export default function useScrollAnimation() {
  return useMemo(() => getScrollAnimation(), []);
}
