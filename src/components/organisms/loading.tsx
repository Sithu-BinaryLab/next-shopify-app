function Loading() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="border bg-stone-50 animate-pulse shadow rounded-md p-4 max-w-sm w-full mx-auto h-96 opacity"></div>
        <div className="border bg-stone-50 animate-pulse shadow rounded-md p-4 max-w-sm w-full mx-auto h-96"></div>
        <div className="border bg-stone-50 animate-pulse shadow rounded-md p-4 max-w-sm w-full mx-auto h-96"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
        <div className="border bg-stone-50 animate-pulse shadow rounded-md p-4 max-w-sm w-full mx-auto h-96"></div>
        <div className="border bg-stone-50 animate-pulse shadow rounded-md p-4 max-w-sm w-full mx-auto h-96"></div>
        <div className="border bg-stone-50 animate-pulse shadow rounded-md p-4 max-w-sm w-full mx-auto h-96"></div>
      </div>
    </div>
  );
}

export default Loading;
