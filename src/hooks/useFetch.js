import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const useFetch = (categorie) => {
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const getAllDestinations = async () => {
      let query = supabase.from('td_srilanka_places').select('*');
      if (categorie) {
        query = query.eq('type', categorie);
      }
      const { data, error } = await query;
      if (error) throw error;
      setDestination(data);
    };

    getAllDestinations().catch(console.error);
  }, [categorie]);

  return destination;
};

export default useFetch;
