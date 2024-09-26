import { ATTRIBUTES } from "@/app/constants";
import { Card } from "@/app/elements";
import { Attribute } from "./components";

export const AttributeView = () => {
  return (
    <Card withShadow={false} cardStyle="bg-gray-20 border border-1  border-gray-30   p-4 flex flex-wrap items-center justify-between">
      {ATTRIBUTES.map((attribute, index) => (
        <Attribute key={index} attribute={attribute} />
      ))}
    </Card>
  )
}

export default AttributeView;