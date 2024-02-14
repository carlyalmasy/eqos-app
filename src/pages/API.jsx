import { RedocStandalone } from 'redoc';

const docsUrl = import.meta.env.VITE_CORE_URL + '/openapi.yml';

export default function API() {
  return (
    <>
      <RedocStandalone specUrl={docsUrl} />
    </>
  )
}