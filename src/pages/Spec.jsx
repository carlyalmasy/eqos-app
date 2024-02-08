import {useEffect} from 'react';
import {signal} from '@preact/signals-react';
import Markdown from '../components/Markdown';
import axios from 'axios';

//
// Initialize our signal with an empty string.  On initial page load the <Markdown> component
// below will be rendered with no content.
//
const data = signal('');

export default function Spec() {

  //
  // Initiate a request out to our Specification document (written in markdown).  This is an
  // asynchronous request.  Once the request completes we will re-assign the data of the
  // request to the `data.value` property which will trigger the <Markdown> component to
  // re-render based on the signal.  We wrap it in useEffect() with empty dependency set
  // (second argument) to prevent it from rerunning when the component is re-rendered
  // by setting the updated value.
  //
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_CORE_URL + '/spec.md')
      .then((response) => {
        data.value = response.data;
      })
    ;
  }, []);

  return (
    <article className="spec toc">
      <Markdown toc={true}>
        {data.value}
      </Markdown>
    </article>
  )
}