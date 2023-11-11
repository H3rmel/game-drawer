import React from "react";

interface CardActionsProps {
  children: React.ReactNode;
}

export function CardActions({ children }: CardActionsProps) {
  return <div className="card-actions justify-end">{children}</div>;
}
