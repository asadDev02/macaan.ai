import { Switch } from "@/app/elements";
import { VisibilityToggleProps } from "./props";

export const VisibilityToggle = ({ isPublic, onToggle }: VisibilityToggleProps) => (
  <div className="flex flex-col items-start space-y-2 p-4 font-sans">
    <p className="text-[#0f143b] font-light text-sm">Change Visibility</p>
    <div className="flex items-center space-x-3">
      <Switch isChecked={isPublic} toggle={onToggle} />
      <p className={`${isPublic ? 'text-primary' : 'text-gray-500'} font-light text-sm`}>
        {isPublic ? 'Public' : 'Private'}
      </p>
    </div>
  </div>
);

export default VisibilityToggle;