// libraries / utilities
import axios from 'axios';
import moment from 'moment';

// hooks
import { signal, useSignalEffect } from "@preact/signals-react";

// components
import { Fragment } from 'react';

import Aside from '../../components/developer/Aside';
import CardAside from '../../layouts/CardAside';
import Markdown from '../../components/Markdown';
import PrimaryButton from '../../components/buttons/PrimaryButton';

//content
import intro from '../../topics/Developer/DownloadsIntro.md';

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
            <Markdown>{intro}</Markdown>
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
