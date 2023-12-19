
import CaloriesInfo from "./ui/calories-info";
import WorkoutsInfo from "./ui/workouts-info";
import WeightInfo from "./ui/weight-info";

export default function Page() {


  return (
    <div className='flex p-3 flex-col gap-4'>
      <div className='flex flex-row flex-wrap gap-3'>
        <WeightInfo />
        <WorkoutsInfo />
        <CaloriesInfo />
      </div>
    </div>
  );
}
