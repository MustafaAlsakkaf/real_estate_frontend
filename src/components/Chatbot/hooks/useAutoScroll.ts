import { useEffect } from "react";

export function useAutoScroll(dep: unknown, ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
    }
  }, [dep, ref]);
}
