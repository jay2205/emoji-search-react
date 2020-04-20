import React, { useState } from "react";
import "./EmojiResults.css";

const COPY_TO_CLIPBOARD = "Copy to clipboard";
// const COPIED = "COPIED";

export default function ResultRow(props) {
  const [showCopyText, setShowCopyText] = useState(false);

  const handleCopyToClipboardDisplay = () => {
    setShowCopyText(!showCopyText);
  };

  const handleCopyToClipboard = () => {
    var copyText = props.emoji.symbol;
    navigator.clipboard.writeText(copyText);
    console.log("Copied");
  };

  return (
    <div
      className="component-emoji-result-row"
      onMouseEnter={handleCopyToClipboardDisplay}
      onMouseLeave={handleCopyToClipboardDisplay}
    >
      <p>
        {props.emoji.symbol} {props.emoji.title}
      </p>
      <div>
        {showCopyText ? (
          <button className="" onClick={handleCopyToClipboard}>
            {COPY_TO_CLIPBOARD}
          </button>
        ) : null}
      </div>
    </div>
  );
}
