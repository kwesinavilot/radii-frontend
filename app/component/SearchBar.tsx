import { FC, useState } from "react";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsActive(e.target.value.length > 0);
  };

  return (
    <div className="flex items-center space-x-2 border p-2 rounded-lg">
      <FaSearch />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="flex-grow outline-none"
        placeholder="Ask a question"
      />
      <Button onClick={onSubmit} isActive={isActive} />
    </div>
  );
};

export default SearchBar;
