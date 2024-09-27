import { CheckCircle2 } from "lucide-react";

export const formError = ({success}: { success?: string }) => {
  if (!success) return null;
  return (
    <div className="bg-teal-400 text-secondary-foreground p-3 rounded-md">
      <CheckCircle2 className="w-4 h-4">
        <p>{success}</p>
      </CheckCircle2    >
    </div>
  );
};
