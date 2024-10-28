import { RequestFormDialog } from "@/components/request-form-dialog";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 justify-center items-center font-display">
        <h1 className="text-7xl font-extrabold">Johnny Builds</h1>
        <p className="text-xl text-center">I build web stuff for people in public</p>
        <RequestFormDialog />
      </main>
    </div>
  );
}
