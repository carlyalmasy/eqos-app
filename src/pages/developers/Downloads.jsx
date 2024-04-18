import axios from 'axios';
import moment from 'moment';

import Markdown from '../../components/Markdown';
import { Fragment } from 'react';
import { Aside } from './Index';

// Hooks
import { signal, useSignalEffect } from "@preact/signals-react";
import PrimaryButton from '../../components/buttons/PrimaryButton';
import CardAside from '../../layouts/CardAside';

const data    = signal([]);
const baseUrl = import.meta.env.VITE_CORE_URL;
const title   = function(path) {
    let match = path.match(/\d{4}-\d{2}-\d{2}/);

    return moment(match[0] + ' 00:00:00').format('dddd, MMMM Do YYYY');
};

export default function Downloads() {
  useSignalEffect(() => {
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
        <Aside />
    </CardAside>
  )
}
