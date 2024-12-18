// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
} 

export const models: Array<Model> = [
  {
    id: 'gemini-1.5-flash',
    label: 'Regular Model',
    apiIdentifier: 'gemini-1.5-flash',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Pro Model',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'For complex, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-pro';
