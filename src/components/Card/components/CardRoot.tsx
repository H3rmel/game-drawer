import React from "react";

interface CardRootProps {
  children: React.ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <article className="card w-96 bg-base-100 shadow-xl">{children}</article>
  );
}
