// libraries / utilities
import axios from 'axios';

// hooks
import { signal, useSignalEffect } from '@preact/signals-react';

// components
import Container from '../../layouts/Container';
import Markdown from '../../components/Markdown';

// content
import intro from '../../topics/Developer/SpecIntro.md';

const baseUrl = import.meta.env.VITE_CORE_URL;
const data    = signal('');

export default function Spec() {
  useSignalEffect(() => {
    axios
      .get(baseUrl + '/spec.md')
      .then((response) => {
        data.value = response.data;
      })
    ;
  });

  return (
    <Container className="spec">
        <Markdown>
            {intro}
        </Markdown>
        <Markdown toc={{skip: 'specification'}}>
            {data.value}
        </Markdown>
    </Container>
  )
}
