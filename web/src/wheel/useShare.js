import { useState } from "react";

const useShare = (options) => {
  const [copied, setCopied] = useState(false);

  const url = new URL(window.location.pathname, window.location.origin);

  url.searchParams.delete("options");

  for (let o of options) {
    url.searchParams.append("options", o);
  }

  let shareUrl = url.href;

  // Because we're using HashRouter,
  // URLs need to have a '#' before the query params
  if (!shareUrl.includes("#")) {
    const queryIndex = shareUrl.indexOf("?");

    const insertAt = queryIndex < 0
        ? shareUrl.length
        : queryIndex;

    shareUrl = shareUrl.slice(0, insertAt) + "#" + shareUrl.slice(insertAt);
  }
  
  const share = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(shareUrl).then(() => setCopied(true));
    } else {
      document.execCommand("copy", true, shareUrl);
      setCopied(true);
    }
  };

  return [copied, share];
};

export default useShare;
