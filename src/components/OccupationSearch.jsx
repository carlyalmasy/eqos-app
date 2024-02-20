import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const occupations = [
  'Cyber Security',
  'Healthcare',
  'Software Development',
]

export default function OccupationSearch() {
  const [selectedOccupation, setSelectedOccupation] = useState(occupations[0])
  const [query, setQuery] = useState('')

  const filteredOccupations =
    query === ''
      ? occupations
      : occupations.filter((occupation) => {
          return occupation.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedOccupation} onChange={setSelectedOccupation}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredOccupations.map((occupation) => (
          <Combobox.Option key={occupation} value={occupation}>
            {occupation}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}