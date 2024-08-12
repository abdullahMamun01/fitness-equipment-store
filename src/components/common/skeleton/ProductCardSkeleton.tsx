import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";


export default function ProductCardSkeleton() {
  return (
    <Card className="max-sm:mx-4 shadow-md group">
      <div className="relative">
        {/* Image skeleton */}
        <div className="relative overflow-hidden rounded-lg shadow-lg flex justify-center bg-gray-200">
          <Skeleton className="w-full h-48 rounded-t-lg" />
        </div>

      
      </div>

      <div className="px-5 py-6 bg-primary">
        <Skeleton className="w-3/4 h-4 bg-gray-200 rounded" />
        <Skeleton className="w-2/3 h-3 bg-gray-200 rounded my-2" />
        <Skeleton className="w-1/4 h-4 bg-gray-200 rounded" />
        <Skeleton className="w-1/4 h-4 bg-gray-100 rounded mt-2" />
      </div>
      {/* <Button className="bg-secondary rounded-none text-primary w-full mt-0 hover:bg-secondary z-10"></Button> */}
      <Skeleton className="w-full h-12 bg-gray-400 rounded-none mt-0 " />

    </Card>
  );
}
