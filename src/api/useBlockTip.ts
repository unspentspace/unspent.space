import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


  export const useBlockTip = (
  ) => {
    const { data = '', isLoading } = useQuery({
      queryKey: ['blockTip'],
      queryFn: async () =>
      axios
      .get('https://mempool.space/api/blocks/tip/height')
      .then((res) => res.data),
      refetchInterval: 60000,
    })
  
    return { data, isLoading };
  };
  