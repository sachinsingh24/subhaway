import React from 'react';

// Renders the small Markdown subset the blog posts are authored in:
// "### " headings, "- " bullets, "1. " numbered lists, **bold** and *italic*.
// Deliberately not a full Markdown parser — it emits React elements, so there is
// no dangerouslySetInnerHTML and no HTML-injection surface.

// Splits a line into text / <strong> / <em> pieces.
const renderInline = (text, keyPrefix) => {
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={`${keyPrefix}-b${i}`}>{match[1]}</strong>);
    } else {
      parts.push(<em key={`${keyPrefix}-i${i}`}>{match[2]}</em>);
    }
    lastIndex = pattern.lastIndex;
    i += 1;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : text;
};

// Groups the raw lines into headings, lists and paragraphs.
const parseBlocks = (raw) => {
  const lines = String(raw).replace(/\r\n/g, '\n').split('\n').map((line) => line.trim());
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };
  const pushItem = (type, text) => {
    flushParagraph();
    if (!list || list.type !== type) {
      flushList();
      list = { type, items: [] };
    }
    list.items.push(text);
  };

  lines.forEach((line) => {
    if (!line) {
      flushParagraph();
      flushList();
      return;
    }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    const bullet = line.match(/^[-*]\s+(.*)$/);
    const numbered = line.match(/^\d+\.\s+(.*)$/);

    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h', level: heading[1].length, text: heading[2] });
    } else if (bullet) {
      pushItem('ul', bullet[1]);
    } else if (numbered) {
      pushItem('ol', numbered[1]);
    } else {
      flushList();
      paragraph.push(line);
    }
  });

  flushParagraph();
  flushList();
  return blocks;
};

const headingStyle = {
  fontSize: '1.25rem',
  color: '#0f172a',
  fontWeight: 700,
  lineHeight: 1.4,
  margin: '30px 0 10px',
  // The global stylesheet capitalizes every heading; keep the author's own casing.
  textTransform: 'none',
};

const listStyle = { paddingLeft: '22px', margin: '0 0 18px', display: 'grid', gap: '8px' };

const MarkdownContent = ({ text, style }) => (
  <div style={style}>
    {parseBlocks(text).map((block, index) => {
      const key = `blk-${index}`;

      if (block.type === 'h') {
        const Tag = `h${Math.min(block.level + 1, 6)}`;
        return (
          <Tag key={key} style={headingStyle}>
            {renderInline(block.text, key)}
          </Tag>
        );
      }

      if (block.type === 'ul' || block.type === 'ol') {
        const Tag = block.type;
        return (
          <Tag key={key} style={listStyle}>
            {block.items.map((item, itemIndex) => (
              <li key={`${key}-${itemIndex}`} style={{ lineHeight: 1.75 }}>
                {renderInline(item, `${key}-${itemIndex}`)}
              </li>
            ))}
          </Tag>
        );
      }

      return (
        <p key={key} style={{ margin: '0 0 18px' }}>
          {renderInline(block.text, key)}
        </p>
      );
    })}
  </div>
);

export default MarkdownContent;
