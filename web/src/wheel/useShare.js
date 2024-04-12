import { useState } from "react";

const useShare = (options) => {
  const [copied, setCopied] = useState(false);

  console.log("location", window.location);
  const url = new URL(window.location.href);

  url.searchParams.delete("options");

  for (let o of options) {
    url.searchParams.append("options", o);
  }

  const share = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(url.href).then(() => setCopied(true));
    } else {
      document.execCommand("copy", true, url.href);
      setCopied(true);
    }
  };

  return [copied, share];
};

export default useShare;
