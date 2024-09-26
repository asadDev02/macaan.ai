export const Switch = ({ isChecked, toggle }: { isChecked: boolean; toggle: () => void }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        aria-label="checkbox"
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={toggle}
      />
      <div className={`w-11 h-6 rounded-full shadow-inner transition-colors duration-200 ease-in-out ${isChecked ? 'bg-primary' : 'bg-gray-200'
        }`}>
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out ${isChecked ? 'translate-x-5' : 'translate-x-0'
          }`} />
      </div>
    </label>
  );
};

export default Switch