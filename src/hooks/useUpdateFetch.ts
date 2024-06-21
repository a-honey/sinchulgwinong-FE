import { useEffect, useState } from "react";

/**
 * @description 함수가 fetching 상태인지 판단 및 fetching 종료 후 업데이트 hook
 */

const useUpdateFetch = (
  fn: (args?: any) => void,
  updateState?: (data: any) => void
) => {
  const [data, setData] = useState<any>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const fetchedData = await fn();
        setData(fetchedData);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [fn, updateState]);

  return { isFetching, data };
};

export default useUpdateFetch;
