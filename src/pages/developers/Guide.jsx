// libraries / utilities
import axios from 'axios';

// hooks
import { signal, useSignalEffect } from '@preact/signals-react';

// components
import Container from '../../layouts/Container';
import Markdown from '../../components/Markdown';
import SubHeader from "../../components/developers/navigation/SubHeader";

// content
import subNavItems from "../../topics/developers/Navigation.md"
import intro from '../../topics/developers/GuideIntro.md';

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
    <>
        <SubHeader items= { subNavItems}  />
        <Container className="spec">
        <Markdown>
            {intro}
        </Markdown>
        <Markdown toc={{skip: 'guide'}}>
            {data.value}
        </Markdown>
    </Container></>

  )
}
