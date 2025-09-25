import { type ReactNode } from "react";

const Link = (props: HTMLLinkElement & { children?: ReactNode }) => {
  return (
    <a
      className="visited:text-violet-600 hover:underline hover:text-violet-400"
      href={(props.href as string) ?? ""}
      referrerPolicy="no-referrer"
      target="_blank"
    >
      {props.children ?? props.href}
    </a>
  );
};

export default Link;
