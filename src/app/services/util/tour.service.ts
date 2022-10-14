import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import Shepherd from 'shepherd.js';
import { translate } from '@ngneat/transloco';
import { TourEvent } from 'src/app/models/tour/tour-event';
import { ScrollService } from './scroll.service';
import { TourStepSetting } from 'src/app/models/tour/tour-step-settings';
import { EnterpriseTourStep } from 'src/app/models/tour/tour-step-enums/enterprise-tour-step';
import { TourConfig } from 'src/assets/config/tour/tour-config';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private tour: Shepherd.Tour;
  private enabled: boolean;

  tourSubject = new Subject<TourEvent>();
  viewedSteps: Set<EnterpriseTourStep> = new Set();
  currentlyShowing: boolean;

  constructor(private scrollService: ScrollService) {
  }

  start(steps: TourStepSetting[]) {
    if (this.enabled) {
      this.prepareShepherd(steps);
      this.tour.start();
    } else {
      throw new Error('Tour Service must be enabled first once, before starting it.');
    }
  }

  setEnabled(value: boolean) {
    this.enabled = value;
    this.viewedSteps = new Set();
  }

  isEnabled() {
    return this.enabled;
  }

  hideTour() {
    if (this.tour) {
      const currentStep = this.tour.getCurrentStep();
      if (currentStep) {
        currentStep.hide();
      }
    }
  }

  private prepareShepherd(steps) {
    this.tour = new Shepherd.Tour({
      defaultStepOptions: TourConfig.OPTIONS,
      useModalOverlay: true
    });
    this.tour.addSteps(this.createShepherdSteps(steps));
    this.tour.on('cancel', this.hideTour.bind(this));
    this.tour.on('complete', this.hideTour.bind(this));
  }

  private createShepherdSteps(settings: TourStepSetting[]): any[] {
    const steps = [];
    settings.forEach(setting => {
      if (!this.viewedSteps.has(setting.id)) {
        steps.push(this.buildStep(setting));
      }
    });
    return steps;
  }

  private buildStep(setting: TourStepSetting) {
    return {
      id: setting.id,
      attachTo: setting.anchorSettings,
      beforeShowPromise: (): Promise<void> => new Promise<void>(resolve => {
          setTimeout(() => {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        }),
      buttons: [
        {
          classes: 'shepherd-button-next',
          text: 'Next',
          action: () => {
            this.tour.next();
          }
        }
      ],
      popperOptions: {
        modifiers: [{
          name: 'offset', options: { offset: setting.offset ? [setting.offset.perpendicular, setting.offset.parallel] : [0, 0] }
        }]
      },
      canClickTarget: false,
      cancelIcon: {
        enabled: true
      },
      highlightClass: 'highlight',
      modalOverlayOpeningRadius: setting.overlay ? setting.overlay.radius : 0,
      modalOverlayOpeningPadding: setting.overlay ? setting.overlay.padding : 0,
      text: [translate(setting.translateKey)],
      when: {
        show: () => {
          this.currentlyShowing = true;
          this.viewedSteps.add(setting.id);
          this.tourSubject.next({stepId: setting.id, eventType: 'show'});
          this.scrollService.disableScroll();
        },
        hide: () => {
          this.currentlyShowing = false;
          this.tourSubject.next({stepId: setting.id, eventType: 'hide'});
          this.scrollService.enableScroll();
        }
      }
    };
  }
}
