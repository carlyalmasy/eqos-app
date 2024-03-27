export default `
# Kitchen Sink (First Level Heading)

This page is designed to test basic HTML styles via a markdown document which includes the most
common elements.

## Block Elements (Second Level Heading)

Markdown should support pargraphs, blockquotes, etc.  We should have sufficient margin around
paragraphs and blockquotes, as well as some style to call out the blockquotes, like this one:

> Diam et quod nobis elitr possim ut erat tation erat. Invidunt labore aliquyam ea hendrerit no
> sed accusam vero gubergren sed ut aliquyam rebum.

Another paragraph after the blockquote would test the margin between the block quote and a
follow-up paragraph.

Fenced code blocks should also be supported, with syntax highlighting:

\`\`\`pascal
unit main;

uses io;

register main: function(): void
begin
	io.writeLn('Hello, World!');
end
\`\`\`

### Inline Elements (Third Level Heading)

Markdown should support indicators for _emphasis_, **strong**, ~strikethrough~, etc.  Additionally
it should support [linking](https://jff.org) with anchor tags.  Additionally inline \`code\`
samples should be shown in monospace type with some obvious visual indicators that it's different.

#### Lists (Fourth Level Heading)

Markdown supports many types of lists.  Here's a few:

-   Unordered Item 1
-   Unordered Item 2
    -   Unordered Sub-Item 1
    -   Unordered Sub-Item 2

1.  Ordered Item 1
    -   Unordered Sub-Item 1
    -   Unordered Sub-Item 2
1.  Ordered Item 2
    1.  Ordered Sub-item 1
    2.  Ordered Sub-Item 2
1.  Ordered Item 3
    -   Unordered Sub-Item 1
        1.  Ordered Sub-Sub-Item 1
        2.  Ordered Sub-Sub Item 2

            Paragraph related to Sub-Sub-Item 2 should be nested properly

##### Tables (Fifth Level Heading)

| Header 1 | Header 2       | Header 3 |
| :---     | :---:          | ---:     |
| Item 1   | Related Item 1 | ...      |
| Item 2   | Related Item 2 | ...      |
`
