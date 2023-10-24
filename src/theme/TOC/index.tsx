import type { Props } from "@theme/TOC";
import TOCItems from "@theme/TOCItems";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";

export default function TOC({ className, ...props }: Props): JSX.Element {
  const re = /^<code>/;
  const toc = {
    ...props,
    toc: props.toc.map((tocItem) => {
      return {
        ...tocItem,
        value: tocItem.level == 3 && re.test(tocItem.value) ? tocItem.id : tocItem.value,
      };
    }),
  };
  return (
    <div className={clsx(styles["tableOfContents"], "thin-scrollbar", className)}>
      <TOCItems {...toc} linkClassName={LINK_CLASS_NAME} linkActiveClassName={LINK_ACTIVE_CLASS_NAME} />
    </div>
  );
}
