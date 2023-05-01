import { useEffect, useState } from 'react'

export function useAPI() {
  const [data, setData] = useState<{
    name: string;
  }>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  return data;
}