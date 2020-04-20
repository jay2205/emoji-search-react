import emojiList from "../emojiList.json";

export default function searchEmojiList(searchText) {
  return emojiList.filter(emoji => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  });
}
