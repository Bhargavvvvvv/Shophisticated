import { CheckCircle2 } from "lucide-react";

export const FormSuccess = ({success}: { success?: string }) => {
  console.log(success, "succesasdasxzcasds");

  if (!success) return null;

  return (
    <div className="bg-teal-400/25 text-secondary-foreground p-3 rounded-md flex gap-2 items-center">
      <CheckCircle2 className="w-4 h-4"/>
      
        {success}
    </div>
  );
};
