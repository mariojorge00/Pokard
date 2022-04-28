import React from "react";
export function Description({ desc }) {
  return (
    <p className="desc">
      {desc.flavor_text_entries[1].flavor_text
        .replace("\f", "\n")
        .replace("\u00ad\n", "")
        .replace("\u00ad", "")
        .replace(" -\n", " - ")
        .replace("-\n", "-")
        .replace("\n", " ")}
    </p>
  );
}
