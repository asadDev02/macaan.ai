import { AttributeProps } from "./props";

export const Attribute = ({ attribute }: AttributeProps) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <p className="text-[#0f143b] font-light text-sm">
        {attribute.label}
      </p>
      <p className="text-primary font-bold truncate max-w-full">
        {attribute.value}
      </p>
    </div>
  );
}

export default Attribute;