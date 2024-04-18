import axios from 'axios';

// components
import Container from '../../layouts/Container';
import Markdown from '../../components/Markdown';

// topics
import intro from '../../topics/Developer/GuideIntro.md';

// hooks
import { signal, useSignalEffect } from '@preact/signals-react';

const data = signal('');

export default function Guide() {
  useSignalEffect(() => {
    axios
      .get(import.meta.env.VITE_CORE_URL + '/guide.md')
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
        <Markdown toc={{skip: 'guide'}}>
            {data.value}
        </Markdown>
    </Container>
  )
}
