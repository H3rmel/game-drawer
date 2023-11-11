import React from "react";

interface CardTitleProps {
  children: React.ReactNode;
}

export function CardTitle({ children }: CardTitleProps) {
  return <h2 className="card-title">{children}</h2>;
}
