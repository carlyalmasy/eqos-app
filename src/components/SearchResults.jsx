import { useEffect } from 'react';
import { useSignal } from '@preact/signals-react';
// import bjoin from "../utilities/bjoin";
import axios from 'axios';
import CredentialsGrid from './CredentialsGrid';


export default function SearchResults( ) {
    const url = import.meta.env.VITE_CORE_URL + '/api/app/search?occupation=110';
    const items = useSignal([]);

    useEffect(() => {
      axios
      .get(url)
      .then((response) => {
        items.value = response.data;
      });
    }, []);

    console.log("====>", items.value);

      return (
        <div>
            {items?.value?.data?.map((data)=>(
                <CredentialsGrid key={data.id} data={data}/>
            ))}
        </div>
      )
    }