import Header from './(ui)/Header/Header';

export default function Home() {
  return (
    <div>
        <Header />
        <section className="h-screen bg-gradient-to-b from-background to-violet-500">
            <div className="rounded-xl font-extralight p-3 m-5 w-fit mx-auto font-Unbounded flex flex-col justify-end">
                <p className="text-5xl mt-32 ">Manage your body.</p>
                <p className="text-3xl text-gray-400">Manage your goals.</p>
            </div>
        </section>
        <section>
            <div className="rounded-xl font-extralight p-3 m-5 w-fit mx-auto font-Unbounded flex flex-col justify-end">
                <p className="text-5xl mt-32 ">Manage your body.</p>
                <p className="text-3xl text-gray-400">Manage your goals.</p>
            </div>
        </section>
    </div>
  );
}
