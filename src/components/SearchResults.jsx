import { useEffect } from 'react';
import { useSignal } from '@preact/signals-react';
import axios from 'axios';
import CredentialsCard from './CredentialsCard';
import Grid from './layout/Grid';


export default function SearchResults( ) {
    const url = import.meta.env.VITE_CORE_URL + '/api/app/search?occupation=110&l=200';
    const items = useSignal([]);

    useEffect(() => {
      axios
      .get(url)
      .then((response) => {
        items.value = response.data.data;
      });
    }, []);

      return (
        <Grid split="3" className="auto-rows">
            {
                items.value.map((data) => (
                    <CredentialsCard key={data.id} data={data}/>
                ))
            }
        </Grid>
      )
    }
