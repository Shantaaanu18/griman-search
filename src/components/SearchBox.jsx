import { Input } from "../components/ui/input";
import { Search } from "lucide-react";


export default function SearchBox({ value, onChange, onKeyDown }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <Input
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="pl-10 h-12 rounded-2xl shadow-sm focus-visible:ring-2"
      />
    </div>
  );
}
