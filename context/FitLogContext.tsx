"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveForLater: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined,
);

export const FitLogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    setPlan((current) =>
      current.some((item) => item.id === workout.id)
        ? current
        : [...current, workout],
    );
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) => current.filter((workout) => workout.id !== id));
  };

  const saveForLater = (workout: Workout) => {
    setSaved((current) =>
      current.some((item) => item.id === workout.id)
        ? current
        : [...current, workout],
    );
  };

  const removeFromSaved = (id: number) => {
    setSaved((current) => current.filter((workout) => workout.id !== id));
  };

  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((workout) => workout.id === id);
  };

  const value = useMemo(
    () => ({
      plan,
      saved,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeFromSaved,
      isInPlan,
      isSaved,
    }),
    [plan, saved],
  );

  return (
    <FitLogContext.Provider value={value}>
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};