import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Parser from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export default function Markdown(props) {
  return (
    <section
      className={
        "prose prose-pre:bg-[#1e1e1e] prose-pre:p-0 max-w-none "
        + (props.toc && 'toc')
      }
    >
      <Parser
        remarkPlugins={[
          remarkGfm,
          remarkToc
        ]}
        components={{
          code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={vscDarkPlus}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
      >{props.children}</Parser>
    </section>
  )
}