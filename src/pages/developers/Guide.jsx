// libraries / utilities
import axios from 'axios';

// hooks
import { signal, useSignalEffect } from '@preact/signals-react';

// components
import Container from '../../layouts/Container';
import Markdown from '../../components/Markdown';

// content
import intro from '../../topics/Developer/GuideIntro.md';

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
