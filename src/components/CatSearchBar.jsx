import { useEffect } from 'react';
import { signal, computed } from '@preact/signals-react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import bjoin from '../helpers/bjoin.js';

import axios from 'axios';

const items = signal([]);
const query = signal('');
const selectedItem  = signal(null);

export default function CatSearchBar({type, collection}) {
  const url = import.meta.env.VITE_CORE_URL + '/api/app/search/' + collection;

  const filteredItems = computed(() => {
    return query.value == ''
      ? items.value
      : items.value.filter((item) => {
          return item.name.toLowerCase().includes(query.value.toLowerCase())
        });
  });

  useEffect(() => {
    axios
    .get(url)
    .then((response) => {
      items.value = response.data;
    });
  }, []);

  return (
    <Combobox as="div" value={ selectedItem.value } onChange={ (value) => { selectedItem.value = value; query.value = ''; } }>
      {/* <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900"></Combobox.Label> */}
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          onChange={ (event) => { query.value = event.target.value } }
          placeholder="Select ..."
          displayValue={ (item) => item?.name }
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredItems.value.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            { filteredItems.value.map((item) => (
              <Combobox.Option
                key={ item.id }
                value={ item }
                className={
                  ({ active }) => bjoin(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-blue-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={ bjoin('block truncate', selected && 'font-semibold') }>{ item.name }</span>

                    {selected && (
                      <span
                        className={ bjoin(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-blue-600'
                        ) }
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            )) }
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
