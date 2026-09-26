import { getWorkout } from "@/lib/api";
import WorkoutDetails from "@/components/workout/WorkoutDetails";

interface WorkoutPageProps {
  params: Promise<{ id: string }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutPage;