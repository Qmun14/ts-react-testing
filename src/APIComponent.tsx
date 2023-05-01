import { useEffect, useState } from 'react'

export default function APIComponent() {
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

  return (
    <div>
      {data && <div role='contentinfo'>Name is {data.name}</div>}
    </div>
  )
}
