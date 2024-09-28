import { AlertCircle, AlertCircleIcon } from "lucide-react";

export const FormError = ({error}: { error?: string }) => {
  if (!error) return null;
  return (
    <div className="bg-destructive/25 text-secondary-foreground p-3 rounded-md flex gap-2 items-center">
      <AlertCircle className="w-4 h-4"/>
        <p>{error}</p>
    </div>
  );
};
