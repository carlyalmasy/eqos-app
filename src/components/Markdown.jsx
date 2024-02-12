import Parser from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneLight as theme} from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsonLang from 'react-syntax-highlighter/dist/esm/languages/prism/json';

SyntaxHighlighter.registerLanguage('json', jsonLang);

export default function Markdown(props) {
  return (
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