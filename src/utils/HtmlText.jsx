const HtmlText = ({ 
  html = "", 
  limit, 
  className = "", 
  style = {} 
}) => {
  let content = html;

  if (limit && content.length > limit) {
    content = content.substring(0, limit) + "...";
  }

  return (
    <div
      className={`html-text ${className}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlText;
