
import Markdown from '../../components/Markdown';
import { aside } from './Index';
import axios from 'axios';
import moment from 'moment';

// Hooks
import { signal } from "@preact/signals-react";
import { useEffect } from 'react';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import CardAside from '../../layouts/CardAside';
import { Fragment } from 'react';

//
// Initialize our signal with an empty string.  On initial page load the <Markdown> component
// below will be rendered with no content.
//
const data    = signal([]);
const baseUrl = import.meta.env.VITE_CORE_URL;
const title   = function(path) {
    let match = path.match(/\d{4}-\d{2}-\d{2}/);

    return moment(match[0] + ' 00:00:00').format('dddd, MMMM Do YYYY');
};

export default function Downloads() {

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
      .get(baseUrl + '/api/app/downloads')
      .then((response) => {
        data.value = response.data;
      })
    ;
  }, []);

  return (
    <CardAside>
        <>
            <h2>EQOS Quality Signal Data</h2>
            <p>
                Download EQOS Quality Signal data in a bulk CSV format for custom import or
                analysis.
            </p>
            {
                data.value.map((item, key) => {
                    return (
                        <Fragment key={ key }>
                            <hr className="mt-8" />
                            <section>
                                <h3>{ title(item.path) }</h3>
                                <div className="mb-8">
                                    <Markdown>{ item.desc }</Markdown>
                                </div>
                                <PrimaryButton text="Download"  link={ baseUrl + item.path } />
                            </section>
                        </Fragment>
                    )
                })
            }
        </>
        { aside }
    </CardAside>
  )
}
