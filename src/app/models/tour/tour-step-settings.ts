import { EnterpriseTourStep } from './tour-step-enums/enterprise-tour-step';

export class TourStepSetting {
  id: EnterpriseTourStep;
  translateKey: string;
  anchorSettings?: {
    element: string;
    on: 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
  };
  // Parallel means X axis on left/right and Y axis on top/bottom
  offset?: {
    parallel: number;
    perpendicular: number;
  };
  overlay?: {
    radius: number;
    padding: number;
  };
}
