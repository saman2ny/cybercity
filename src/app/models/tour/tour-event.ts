import { EnterpriseTourStep } from './tour-step-enums/enterprise-tour-step';

export class TourEvent {
  stepId: EnterpriseTourStep;
  eventType: 'show' | 'hide';
}
