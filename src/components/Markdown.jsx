// libraries / utilities
import jsonLang from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import {oneLight as theme} from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkHID from 'remark-heading-id';
import remarkSectionize from 'remark-sectionize';
import remarkToc from 'remark-toc';

// hooks
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';

// components
import Parser from 'react-markdown';

SyntaxHighlighter.registerLanguage('json', jsonLang);

export default function Markdown(props) {

  const plugins = [
        remarkGfm,
        remarkHID,
        ... (
          props.toc // Position Matters
            ? [[remarkToc, props.toc]]
            : []
        ),
        remarkSectionize,
  ];

  return (
    <Parser
      remarkPlugins={plugins}
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
              style={theme}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    >
      {props.children}
    </Parser>
  )
}
