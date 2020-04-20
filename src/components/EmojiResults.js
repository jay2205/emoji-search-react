import React from "react";
import EmojiResultRow from "./EmojiResultRow";

export default function EmojiResults(props) {
  return (
    <div className="component-emoji-results">
      {props.emojis.map(emoji => {
        return <EmojiResultRow emoji={emoji} />;
      })}
    </div>
  );
}
