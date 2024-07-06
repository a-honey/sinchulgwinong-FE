import { useEffect, useRef } from "react";

interface useIntersectObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectObserver = <T extends HTMLElement>({
  root = null,
  rootMargin = "10px",
  threshold = 0.5,
  onIntersect,
}: useIntersectObserverProps) => {
  const ref = useRef<T | null>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observerRef.current = observer;

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
      observerRef.current = null;
    };
  }, [ref, onIntersect, root, rootMargin, threshold]);
  return { ref };
};

export default useIntersectObserver;
