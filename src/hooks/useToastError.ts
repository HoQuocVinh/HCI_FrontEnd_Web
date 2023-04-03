import { useEffect } from "react";
import { FieldError } from "react-hook-form";
import { toast } from "react-toastify";

export function useToastError(errors: any) {
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      const error = arrErrors[0] as FieldError;
      const errorMessage = error?.message;
      toast.dismiss();
      console.log(errors);
      toast.error(errorMessage, {
        autoClose: 1000,
        pauseOnHover: false,
        draggable: true,
        delay: 50,
      });
    }
  }, [errors]);
}
