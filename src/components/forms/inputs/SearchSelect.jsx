import { useEffect } from 'react';
import { useSignal, useComputed } from '@preact/signals-react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import bjoin from '../../../utilities/bjoin';
import axios from 'axios';

export default function SearchSelect({type, collection}) {
  const url = import.meta.env.VITE_CORE_URL + '/api/app/search/' + collection;
  const items = useSignal([]);
  const query = useSignal('');
  const selectedItem  = useSignal(null);

  const filteredItems = useComputed(() => {
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
      {/* <Combobox.Label className="block text-sm font-medium leading-6 text-neutrals-dark-600"></Combobox.Label> */}
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-neutrals-dark-600 shadow-sm ring-1 ring-inset ring-neutrals-dark-300 focus:ring-2 focus:ring-inset focus:ring-eqos-600 sm:text-sm sm:leading-6"
          onChange={ (event) => { query.value = event.target.value } }
          placeholder="Select ..."
          displayValue={ (item) => item?.name }
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-neutrals-dark-400" aria-hidden="true" />
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
                    active ? 'bg-eqos-600 text-neutrals-light-100' : 'text-neutrals-dark-500'
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
                          active ? 'text-neutrals-light-100' : 'text-eqos-600'
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