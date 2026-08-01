import { toast } from "sonner";

export interface FormspreeContactInterface {
  name: string;
  job: string;
  city: string;
  question: string;
  email: string;
}

export class FormspreeHook {
  async post(body: FormspreeContactInterface) {
    try {
      const response = await fetch("https://formspree.io/f/mdaqrlrg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Sent");
    } catch (error) {
      toast.error("Failed to submit");
    }
  }
}
