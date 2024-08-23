
import Filter from "../filter/Filter";
import FilterMenu from "./FilterMenu";
export default function Sidebar() {


  return (
    <div>
      <div className="max-sm:hidden divide-y divide-gray-200 space-y-5">
        <FilterMenu/>
      </div>
      <div className="md:hidden">
        <Filter />
      </div>
      
    </div>
  );
}
