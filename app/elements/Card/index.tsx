import { ReactNode } from 'react';

export const Card = ({ cardStyle, children, withShadow }: { cardStyle?: string; children: ReactNode; withShadow: boolean }) => {
  return (
    <div className={`${withShadow && "shadow-card-shadow"} rounded-lg  ${cardStyle}`}>
      {children}
    </div>
  )
}
