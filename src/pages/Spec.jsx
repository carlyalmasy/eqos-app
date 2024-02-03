import React from 'react';
import { signal } from '@preact/signals-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';

const data = signal('Waiting...');

export default function Spec() {
  axios
    .get(import.meta.env.VITE_CORE_URL + '/spec.md')
    .then((response) => {
      data.value = response.data;
    })
  ;

  return (
    <Markdown remarkPlugins={[remarkGfm]}>{data.value}</Markdown>
  )
}