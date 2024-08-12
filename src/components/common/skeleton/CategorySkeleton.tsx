import { Skeleton } from "@/components/ui/skeleton";


const CategorySkeleton = () => (
  <div className="flex items-center space-x-4 p-2 ">
    <Skeleton className="w-4 h-4 rounded-sm" /> {/* Checkbox */}
    <Skeleton className="w-32 h-4 rounded-sm" /> {/* Label */}
    <Skeleton className="ml-auto w-12  h-4 rounded-sm" /> {/* Count */}
  </div>
);

export default CategorySkeleton;
