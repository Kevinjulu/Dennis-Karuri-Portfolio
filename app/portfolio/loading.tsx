export default function PortfolioLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8 animate-pulse">
          {/* Header Skeleton */}
          <div className="text-center space-y-4">
            <div className="h-12 w-64 bg-gray-200 rounded-lg mx-auto" />
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto" />
          </div>

          {/* Featured Videos Skeleton */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gray-200 rounded-xl" />
            </div>
            <div className="space-y-8">
              <div className="aspect-video bg-gray-200 rounded-xl" />
              <div className="aspect-video bg-gray-200 rounded-xl" />
            </div>
          </div>

          {/* Filter Buttons Skeleton */}
          <div className="flex justify-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg" />
            ))}
          </div>

          {/* Portfolio Grid Skeleton */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <div className="h-64 bg-gray-200" />
                <div className="p-6 space-y-4 bg-gray-100">
                  <div className="h-6 w-2/3 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

