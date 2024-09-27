import { AlertCircle, AlertCircleIcon } from "lucide-react";

export const formError = ({error}: { error?: string }) => {
  if (!error) return null;
  return (
    <div className="bg-destructive text-secondary-foreground p-3 rounded-md">
      <AlertCircle className="w-4 h-4">
        <p>{error}</p>
      </AlertCircle>
    </div>
  );
};
