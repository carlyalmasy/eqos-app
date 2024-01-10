import React from 'react';
import { RedocStandalone } from 'redoc';

const docsUrl = import.meta.env.VITE_CORE_URL + '/openapi.yml';

function Docs() {
  return (
    <>
      <RedocStandalone specUrl={docsUrl} />
    </>
  )
}

export default Docs;
