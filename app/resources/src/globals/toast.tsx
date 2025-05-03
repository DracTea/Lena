import { toast } from "sonner";
import { Close } from "@carbon/icons-react";

function toastSimple(title: string, desc?: string): number | string {
  return toast.custom((t) => (
    <div className="ath-toast-custom">
      <h1 className="ath-toast-custom__title">{title}</h1>
      {desc && <p className="ath-toast-custom__desc">{desc}</p>}
      <button className="ath-toast-custom__close" onClick={() => toast.dismiss(t)}><Close /></button>
    </div>
  ), { duration: Infinity });
}


export { toastSimple };